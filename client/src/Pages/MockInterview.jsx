import React, { useState, useRef, useEffect } from 'react';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import BackgroundImage from './mockInterview.png'; // Adjust path if needed
import { axios } from '../services/helpers';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const MockInterview = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [question, setQuestion] = useState('');
  const [time, setTime] = useState(60);
  const [isMicEnabled, setIsMicEnabled] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const timerRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch questions from the API
    const fetchQuestions = async () => {
      try {
        const token = Cookie.get('accessToken'); // Retrieve token from cookies
        console.log('Token:', token); // Debugging line
        const response = await axios.post('/api/users/question', {}, {
          headers: {
            "authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        });
        const data = await response.data;
        console.log('Fetched questions:', data); // Debugging line
        setQuestions(data);
        setQuestion(data[0]?.question || ''); // Set the first question initially
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    // Set or reset the timer when the question or time changes
    startTimer();
    startCamera();
    return () => {
      stopTimer();
      // stopCamera()
    };
  }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    console.log('handleNextQuestion function called');
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setQuestion(questions[nextIndex]?.question || '');
      resetTimer();
    } else {
      // Show popup and redirect to previous page
      alert("Interview is finished!");
      navigate(-1); // Navigate to the previous page
    }
  };

  const startTimer = () => {
    console.log('startTimer function called');
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timerRef.current);
          alert("Time's up!");
          handleNextQuestion(); // Move to the next question when time is up
          return 60; // Reset timer for next question
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    console.log('resetTimer function called');
    setTime(60); // Reset timer to 60 seconds
    clearInterval(timerRef.current); // Clear the existing timer
    startTimer(); // Start a new timer
  };

  const stopTimer = () => {
    console.log('stopTimer function called');
    clearInterval(timerRef.current);
  };

  const startCamera = async () => {
    console.log('startCamera function called');
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
    console.log('stopCamera function called');
    if (videoRef.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const startMicrophone = async () => {
    console.log('startMicrophone function called');
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
    console.log('stopMicrophone function called');
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
    console.log('toggleMic function called');
    if (!isMicEnabled) {
      startMicrophone();
    } else {
      stopMicrophone();
    }
  };

  const handleNext = () => {
    console.log('handleNext function called');
    stopMicrophone();
    handleNextQuestion();
  };

  const uploadAudio = async (blob) => {
    console.log('uploadAudio function called');
    const formData = new FormData();
    formData.append('file', blob, 'audio.mp3');
  
    try {
      const response = await fetch('/api/upload-audio',{}, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Audio uploaded successfully. Transcription:', result.text);
        alert(`Transcription: ${result.text}`);
      } else {
        console.error('Error uploading audio:', response.statusText);
        alert('Failed to upload audio');
      }
    } catch (error) {
      console.error('Error uploading audio:', error);
      alert('Error occurred while uploading audio');
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
                  <td className="p-2 text-right">{questions.length}</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="p-2">Total Attempted</td>
                  <td className="p-2 text-right">{currentQuestionIndex}</td>
                </tr>
                <tr>
                  <td className="p-2">Remaining</td>
                  <td className="p-2 text-right">{questions.length - currentQuestionIndex}</td>
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
                value={question || ''}
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

export default MockInterview;
