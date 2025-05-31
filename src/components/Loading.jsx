import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden relative">
      <h1 className="text-6xl font-bold text-gray-700 relative">
        <span className="torch-text">Loading</span>
      </h1>
      <div className="torch"></div>

      <style jsx>{`
        .torch-text {
          background: linear-gradient(90deg, #00ffab, #00ffab);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: torchMove 2s linear infinite;
        }

        .torch::before {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(0, 255, 171, 0.8) 0%, transparent 60%);
          border-radius: 50%;
          animation: moveTorch 20s linear infinite;
          pointer-events: none;
        }

        @keyframes moveTorch {
          0% {
            left: -150px;
            top: 50%;
            transform: translateY(-50%);
          }
          100% {
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        @keyframes torchMove {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
