from langchain_community.llms import Ollama
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from flask import Flask, request, render_template
import logging
import re

# Setup basic logging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__)

# Define a function to format text by converting Markdown bold syntax to HTML strong tags
def format_output(text):
    """Convert Markdown bold syntax to HTML strong tags."""
    return re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', text)

# Define chatbot initialization
def initialise_llama3():
    try:
        # Create chatbot prompt
        create_prompt = ChatPromptTemplate.from_messages(
            [
                ("system", "You are my personal assistant"),
                ("user", "Question: {question}")
            ]
        )

        # Initialize OpenAI LLM and output parser
        lamma_model = Ollama(model="llama3")
        format_output = StrOutputParser()

        # Create chain
        chatbot_pipeline = create_prompt | lamma_model | format_output
        return chatbot_pipeline
    except Exception as e:
        logging.error(f"Failed to initialize chatbot: {e}")
        raise

# Initialize chatbot
chatbot_pipeline = initialise_llama3()

# Define route for home page
@app.route('/', methods=['GET', 'POST'])
def main():
    query_input = None
    output = None
    if request.method == 'POST':
        query_input = request.form.get('query-input')
        if query_input:
            try:
                response = chatbot_pipeline.invoke({'question': query_input})
                output = format_output(response)
            except Exception as e:
                logging.error(f"Error during chatbot invocation: {e}")
                output = "Sorry, an error occurred while processing your request."
    return render_template('index.html', query_input=query_input, output=output)

if __name__ == '__main__':
    app.run(debug=True)
