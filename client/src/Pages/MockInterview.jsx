import React, { useState, useRef, useEffect } from 'react';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

const VideoCallLayout = () => {
  const [question, setQuestion] = useState('');
  const [time, setTime] = useState(60);
  const [isMicEnabled, setIsMicEnabled] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [videoStream, setVideoStream] = useState(null);
  const timerRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

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
    <div className="flex h-screen bg-[#006d77] text-white w-screen">
      <div className="w-1/3 h-1/3 bg-[#307cee] flex justify-center items-center">
        <video
          ref={videoRef}
          autoPlay
          className="video bg-[#0e124a] w-full h-full"
        ></video>
        <audio
          ref={audioRef}
          autoPlay
          className="audio bg-[#83c5be] w-full h-full"
        ></audio>
      </div>
      <div className="flex-1 bg-[#006d77] flex justify-center items-center">
        <div className="w-2/3 h-2/3 bg-[#edf6f9] text-[#006d77] p-6 flex flex-col justify-between">
          <div className="question">
            <input
              type="text"
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-2 border border-[#006d77] rounded-md bg-[#edf6f9] text-[#006d77]"
            />
          </div>
          <div className="controls flex justify-between items-center">
            <button
              className={`p-2 rounded-md flex items-center ${
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
            <div className="timer bg-[#83c5be] px-4 py-2 rounded-md">
              {time > 0 ? time : 'Time\'s up!'}
            </div>
            <button className="p-2 bg-[#06aed5] text-[#edf6f9] rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCallLayout;