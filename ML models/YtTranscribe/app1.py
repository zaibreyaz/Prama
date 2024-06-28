import streamlit as st
import os
from dotenv import load_dotenv

load_dotenv() 
import google.generativeai as genai

from youtube_transcript_api import YouTubeTranscriptApi

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

prompt="""You are a YouTube video summarizer. Your task is to take the transcript text of a given video and create a detailed summary, highlighting the key points in a concise and organized manner. The summary should be within 500 words and presented in paragraph and bullet points for clarity. After providing the summary, ask the user if they are ready to take a quiz and if the user says yes generate a quiz with 10-15 questions based on the video's content to test their understanding and if thw user say no display appropriate message. Please provide the summary of the text given here:  """

##  transcript  from yt 
def extract_transcript_details(youtube_video_url):
    try:
        video_id=youtube_video_url.split("=")[1]
        
        transcript_text=YouTubeTranscriptApi.get_transcript(video_id)

        transcript = ""
        for i in transcript_text:
            transcript += " " + i["text"]

        return transcript

    except Exception as e:
        raise e
    
## Google Gemini Pro
def generate_gemini_content(transcript_text,prompt):

    model=genai.GenerativeModel("gemini-pro")
    response=model.generate_content(prompt+transcript_text)
    return response.text

## Generate Quiz
def generate_quiz(transcript_text):
    quiz_prompt = "Generate a quiz with 10-15 questions based on the video's content to test their understanding."
    model=genai.GenerativeModel("gemini-pro")
    response=model.generate_content(quiz_prompt+transcript_text)
    return response.text

st.title("YouTube Transcript to Detailed Notes Converter")
youtube_link = st.text_input("Enter YouTube Video Link:")

if youtube_link:
    video_id = youtube_link.split("=")[1]
    print(video_id)
    st.image(f"http://img.youtube.com/vi/{video_id}/0.jpg", use_column_width=True)

if st.button("Get Detailed Notes"):
    transcript_text=extract_transcript_details(youtube_link)

    if transcript_text:
        summary=generate_gemini_content(transcript_text,prompt)
        st.markdown("## Detailed Notes:")
        st.write(summary)

        if 'ready_for_quiz' not in st.session_state:
            st.session_state.ready_for_quiz = False

        with st.form("quiz_form"):
            ready_for_quiz_input = st.text_input("Are you ready to take a quiz? (yes/no):")
            submitted = st.form_submit_button("Submit")

            if submitted:
                st.session_state.ready_for_quiz = True
                st.session_state.ready_for_quiz_input = ready_for_quiz_input.lower()

if st.session_state.get('ready_for_quiz'):
    if st.session_state.ready_for_quiz_input == "yes":
        quiz = generate_quiz(transcript_text)
        st.markdown("## Quiz:")
        st.write(quiz)
    else:
        st.write("Okay, no quiz for now!")