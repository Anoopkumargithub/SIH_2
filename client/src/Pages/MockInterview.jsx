import React, { useState, useRef, useEffect } from 'react';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import BackgroundImage from './mockInterview.png'; // Adjust path if needed
import {axios} from '../services/helpers';
import Cookie from 'js-cookie';

const MockInterview = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [question, setQuestion] = useState('');
  const [time, setTime] = useState(60);
  const [isMicEnabled, setIsMicEnabled] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [videoStream, setVideoStream] = useState(null);
  const timerRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Fetch questions from the API
    const fetchQuestions = async () => {
      try {
        const token = Cookie.get('accessToken'); // Retrieve token from cookies
        const response = await axios.get('/api/users/question', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.data;
        console.log('Fetched questions:', data); // Debugging line
        setQuestions(data);
        setQuestion(data[0] || ''); // Set the first question initially
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    // Set a timer to change the question every 2 minutes
    const timer = setTimeout(() => {
      handleNextQuestion();
    }, 120000); // 2 minutes in milliseconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    const nextIndex = (currentQuestionIndex + 1) % questions.length;
    setCurrentQuestionIndex(nextIndex);
    setQuestion(questions[nextIndex]);
  };

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
      setVideoStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (videoStream) {
      videoStream.getTracks().forEach((track) => track.stop());
      setVideoStream(null);
    }
  };

  const startMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioStream(stream);
      if (audioRef.current) {
        audioRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopMicrophone = () => {
    if (audioStream) {
      audioStream.getTracks().forEach((track) => track.stop());
      setAudioStream(null);
    }
  };

  const toggleMic = () => {
    setIsMicEnabled((prevState) => {
      if (!prevState) {
        startMicrophone();
      } else {
        stopMicrophone();
      }
      return !prevState;
    });
  };

  return (
    <div className="relative h-screen w-screen">
      <div className="flex h-full bg-[#0a0f1f]">
        {/* Video Feed on the Left */}
        <div className="w-1/4 h-[33vh] flex flex-col">
          <div className="flex-grow bg-black flex justify-center items-center">
            <video
              ref={videoRef}
              autoPlay
              className="w-full h-full object-cover rounded-lg"
            ></video>
            <audio
              ref={audioRef}
              autoPlay
              className="hidden"
            ></audio>
          </div>
          {/* Table below the video */}
          <div className="bg-[#0a0f1f] text-white border-t border-white p-4 py-40">
            <h2 className="text-lg font-bold mb-2 text-center">Question Update</h2>
            <table className="w-full text-white border border-white">
              <tbody>
                <tr className="border-b border-white">
                  <td className="p-2">Total Number of Questions</td>
                  <td className="p-2 text-right">10</td> {/* Example value */}
                </tr>
                <tr className="border-b border-white">
                  <td className="p-2">Total Attempted</td>
                  <td className="p-2 text-right">3</td> {/* Example value */}
                </tr>
                <tr>
                  <td className="p-2">Remaining</td>
                  <td className="p-2 text-right">7</td> {/* Example value */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Black Background for the Rest of the Screen */}
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
              <button onClick={handleNextQuestion} className="mt-2 p-2 bg-blue-500 text-white rounded-md">
        Next
      </button>
            </div>
            <div className="controls flex flex-col items-center">
              <div className="flex gap-4 mb-4">
                <button
                  className={`p-3 rounded-md flex items-center ${
                    isMicEnabled
                      ? 'bg-[#06aed5] text-[#edf6f9]'
                      : 'bg-[#83c5be] text-[#006d77]'
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
              <button className="p-3 bg-[#06aed5] text-[#edf6f9] rounded-md w-full">
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
