from LearnWithAIContent.LearnTopic.MaterialGeneration import MaterialGeneration
from LearnWithAIContent.SubjectContent.ContentGeneration import ContentGeneration
from LearnWithAIContent.LearnWithTranscript.transcript import Transcript


topics = ""

material = MaterialGeneration(topics)
material.MaterialGenerator()


subject = "Database Management System"
level = "Beginner"

content = ContentGeneration(subject, level)
content.ContentGenerator()


video_link = "https://www.youtube.com/watch?v=ErnWZxJovaM"

transcript = Transcript(video_link)
transcript.TranscriptSummarizer()
