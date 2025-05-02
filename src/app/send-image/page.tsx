"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const SendImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedImage = sessionStorage.getItem("capturedImage");
    if (storedImage) {
      setImageUrl(storedImage);
    } else {
      fileInputRef.current?.click(); // Open file picker if no image found
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        sessionStorage.setItem("capturedImage", base64Image);
        setImageUrl(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendImageToBackend = async () => {
    if (!imageUrl) return;

    setSending(true);
    setMessage(null);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageUrl }),
      });

      if (!response.ok) throw new Error("Failed to send image");

      setMessage("✅ Image sent successfully!");
      sessionStorage.removeItem("capturedImage");
      setImageUrl(null);
    } catch (error) {
      setMessage("❌ Failed to send image. Try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 min-h-screen text-center">
      <h1 className="mb-4 font-bold text-lg">Captured Image</h1>

      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Captured"
          className="shadow-lg border rounded-lg w-[300px] h-auto"
          width={300}
          height={300}
          unoptimized={true}
        />
      ) : (
        <p>No image found. Please select an image.</p>
      )}

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Change Image Button */}
      {imageUrl && (
        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-yellow-500 mt-4 px-4 py-2 rounded-lg text-white"
        >
          Change Image
        </button>
      )}

      {/* Upload Button */}
      {!imageUrl && (
        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-blue-500 mt-4 px-4 py-2 rounded-lg text-white"
        >
          Select Image
        </button>
      )}

      {/* Send Image Button */}
      {imageUrl && (
        <button
          onClick={sendImageToBackend}
          disabled={sending}
          className={`mt-4 px-6 py-2 rounded-lg text-white ${
            sending ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {sending ? "Sending..." : "Send Image"}
        </button>
      )}

      {/* Status Message */}
      {message && <p className="mt-2 text-sm">{message}</p>}

      {/* Go Back Button */}
      <a href="/dashboard" className="mt-4 text-blue-500 hover:underline">
        Go Back
      </a>
    </div>
  );
};

export default SendImage;
