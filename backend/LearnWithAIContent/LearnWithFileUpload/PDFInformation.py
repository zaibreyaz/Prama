import os
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
import google.generativeai as genai
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
from langchain_community.vectorstores import FAISS 

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

class PDFChat:
    def __init__(self):
        self.api_key = os.getenv("GOOGLE_API_KEY")
        genai.configure(api_key=self.api_key)
        self.vector_store = None

    def get_pdf_text(self, pdf_docs):
        text = ""
        for pdf in pdf_docs:
            pdf_reader = PdfReader(pdf)
            for page in pdf_reader.pages:
                text += page.extract_text()
        return text

    def get_text_chunks(self, text):
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
        chunks = text_splitter.split_text(text)
        return chunks

    def get_vector_store(self, text_chunks):
        embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
        vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
        vector_store.save_local("faiss_index")
        self.vector_store = vector_store

    def get_conversational_chain(self):
        prompt_template = """
        Answer the question as detailed as possible from the provided context, make sure to provide all the details, if the answer is not in
        provided context just say, "answer is not available in the context", don't provide the wrong answer\n\n
        Context:\n {context}?\n
        Question: \n{question}\n

        Answer:
        """

        model = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.9)
        prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
        chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

        return chain

    def user_input(self, user_question):
        if self.vector_store is None:
            raise ValueError("Vector store not initialized. Process PDF documents first.")
        
        embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
        new_db = FAISS.load_local("faiss_index", embeddings)
        docs = new_db.similarity_search(user_question)

        chain = self.get_conversational_chain()
        response = chain({"input_documents": docs, "question": user_question}, return_only_outputs=True)

        return response["output_text"]

    def process_pdfs(self, pdf_docs):
        raw_text = self.get_pdf_text(pdf_docs)
        text_chunks = self.get_text_chunks(raw_text)
        self.get_vector_store(text_chunks)
    
    def PDFInformationRun(self, pdf_docs, user_question):
        # api_key = os.getenv("GOOGLE_API_KEY")
        pdf_chat = PDFChat()
        # pdf_docs = ["lecture.pdf"]  # List of PDF file paths
        pdf_chat.process_pdfs(pdf_docs)
        
        response = pdf_chat.user_input(user_question)
        with open("InformationFromFile.txt", "w") as file:
            file.writelines(response)


# # Usage Example:
# if __name__ == "__main__":
    
#     pdf_chat = PDFChat()

#     # Process PDF files
#     pdf_docs = ["lecture.pdf"]  # List of PDF file paths
#     pdf_chat.process_pdfs(pdf_docs)

#     # Get user input and fetch the response
#     user_question = "Explain Data Mining?"
#     response = pdf_chat.user_input(user_question)
#     # print("Reply:", response)

#     with open("InformationFromFile.txt", "w") as file:
#         file.writelines(response)
