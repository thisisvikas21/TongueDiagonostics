"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const router = useRouter();

  // Start Camera on Load
  useEffect(() => {
    const startCamera = async () => {
      try {
        const userStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { exact: "environment" } },
        });
        setStream(userStream);
        if (videoRef.current) {
          videoRef.current.srcObject = userStream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();
    return () => stopCamera();
  }, []);

  // Capture Image and Store in Session
  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageUrl = canvas.toDataURL("image/png");
      sessionStorage.setItem("capturedImage", imageUrl);
      router.push("/send-image");
    }
  };

  // Stop Camera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen">
      <h1 className="mb-4 font-bold text-lg sm:text-2xl md:text-3xl">
        Live Camera Scanner
      </h1>

      {/* Video Feed with White Alignment Box */}
      <div className="relative bg-black rounded-lg w-full h-[60vh] overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-full"
        ></video>
        <canvas ref={canvasRef} className="hidden"></canvas>

        {/* White Alignment Box */}
        <div
          className="absolute inset-0 m-auto border-4 border-white w-[255px] h-[255px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        ></div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={captureImage}
          className="bg-gray-200 border-4 rounded-full w-16 h-16"
        ></button>
      </div>

      {/* Go Back Button */}
      <a
        href="/"
        onClick={stopCamera}
        className="mt-4 text-blue-400 hover:underline"
      >
        Go Back
      </a>
    </div>
  );
};

export default Camera;
