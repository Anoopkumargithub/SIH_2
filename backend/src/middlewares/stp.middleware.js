import express from 'express';
import multer from 'multer';
import fs from 'fs';
import util from 'util';
import textToSpeech from '@google-cloud/text-to-speech';

// const express = require('express');
// const multer = require('multer');
// const fs = require('fs');
// const util = require('util');
// const textToSpeech = require('@google-cloud/text-to-speech');

const app = express();
const upload = multer({ dest: 'uploads/' });
const client = new textToSpeech.TextToSpeechClient();

// Route to handle audio upload
app.post('/api/upload', upload.single('file'), async (req, res) => {
  const filePath = req.file.path;

  try {
    // Convert audio to text using Google Cloud Text-to-Speech API
    const text = await convertAudioToText(filePath);

    // Output the converted text to the console
    console.log('Converted Text:', text);

    res.status(200).send('Audio uploaded and processed successfully');
  } catch (error) {
    console.error('Error processing audio:', error);
    res.status(500).send('Error processing audio');
  } finally {
    // Delete the uploaded file after processing
    fs.unlinkSync(filePath);
  }
});

// Function to convert audio to text
async function convertAudioToText(filePath) {
  const audioBytes = fs.readFileSync(filePath).toString('base64');

  const request = {
    input: { audioContent: audioBytes },
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  };

  const [response] = await client.synthesizeSpeech(request);
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.mp3', response.audioContent, 'binary');

  return 'Simulated text'; // Replace with actual speech-to-text conversion logic
}

// Ensure the server is running
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);