from gtts import gTTS
import playsound

class TextAudio:
    def __init__(self,text):
        self.text = text

    def text_to_audio(self, filename='output.mp3'):
        tts = gTTS(self.text)
        tts.save(filename)
        playsound.playsound(filename)