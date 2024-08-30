
import React, { useState, useRef, useEffect } from 'react';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import BackgroundImage from './mockInterview.png';

const VideoCallLayout = () => {
  const [question, setQuestion] = useState('');
  const [time, setTime] = useState(60);
  const [isMicEnabled, setIsMicEnabled] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const timerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    startTimer();
    startCamera();
    return () => {
      stopTimer();
      stopCamera();
      stopMicrophone();
    };
  }, []);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const startMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'audio/mp3' });
        uploadAudio(blob);
        setRecordedChunks([]);
      };

      recorder.start();
      setMediaRecorder(recorder);
      setAudioStream(stream);
      setIsMicEnabled(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopMicrophone = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsMicEnabled(false);
    }
    if (audioStream) {
      audioStream.getTracks().forEach((track) => track.stop());
      setAudioStream(null);
    }
  };

  const toggleMic = () => {
    if (!isMicEnabled) {
      startMicrophone();
    } else {
      stopMicrophone();
    }
  };

  const handleNext = () => {
    stopMicrophone();
    // Add any additional logic for moving to the next question
  };

  const uploadAudio = async (blob) => {
    const formData = new FormData();
    formData.append('file', blob, 'audio.mp3');

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Audio uploaded successfully');
      } else {
        console.error('Error uploading audio');
      }
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <div className="flex h-full bg-[#0a0f1f]">
        <div className="w-1/4 h-[33vh] flex flex-col">
          <div className="flex-grow bg-black flex justify-center items-center">
            <video ref={videoRef} autoPlay className="w-full h-full object-cover rounded-lg"></video>
          </div>
          <div className="bg-[#0a0f1f] text-white border-t border-white p-4 py-40">
            <h2 className="text-lg font-bold mb-2 text-center">Question Update</h2>
            <table className="w-full text-white border border-white">
              <tbody>
                <tr className="border-b border-white">
                  <td className="p-2">Total Number of Questions</td>
                  <td className="p-2 text-right">10</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="p-2">Total Attempted</td>
                  <td className="p-2 text-right">3</td>
                </tr>
                <tr>
                  <td className="p-2">Remaining</td>
                  <td className="p-2 text-right">7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-1 bg-[#0a0f1f] text-white p-6 flex flex-col justify-between relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundImage})`, filter: 'brightness(0.5)' }}
          />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="question mb-4">
              <input
                type="text"
                placeholder="Ask your question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-3 border border-white rounded-md bg-[#1c1c1c] text-white focus:outline-none"
              />
            </div>
            <div className="controls flex flex-col items-center">
              <div className="flex gap-4 mb-4">
                <button
                  className={`p-3 rounded-md flex items-center ${
                    isMicEnabled ? 'bg-[#06aed5] text-[#edf6f9]' : 'bg-[#83c5be] text-[#006d77]'
                  }`}
                  onClick={toggleMic}
                >
                  {isMicEnabled ? (
                    <FaMicrophone className="mr-2" />
                  ) : (
                    <FaMicrophoneSlash className="mr-2" />
                  )}
                  Mic
                </button>
              </div>
              <div className="timer bg-[#83c5be] px-6 py-3 rounded-md mb-4 text-[#006d77]">
                {time > 0 ? time : "Time's up!"}
              </div>
              <button className="p-3 bg-[#06aed5] text-[#edf6f9] rounded-md w-full" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCallLayout;
    
          