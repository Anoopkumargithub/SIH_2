import fs from 'fs';
import { SpeechClient } from '@google-cloud/speech';

const client = new SpeechClient();

async function speechToText(filePath) {
  const file = fs.readFileSync(filePath);
  const audioBytes = file.toString('base64');

  const request = {
    audio: {
      content: audioBytes,
    },
    config: {
      encoding: 'MP3',
      sampleRateHertz: 16000,
      languageCode: 'en-US',
    },
  };

  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');

    console.log(`Transcription: ${transcription}`);

  return transcription;
}

export default speechToText;