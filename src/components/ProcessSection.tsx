import React from "react";
import { Timeline } from "./ui/timeline";

const ProcessSection = () => {
  const blankImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAQlBMVEU0NDSenp4xMTEqKiqamppUVFRjY2N/f3+lpaWHh4ctLS2ioqKLi4tMTEwhISEYGBhBQUF3d3c8PDyUlJRaWlpra2uLUZmMAAABgElEQVR4nO3Z246CMBRA0V65tIJC4f9/dVqZ8RKtGeeFHGevF2N86Q49hKJSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgfzD2BbP36t50al44yaoxPjpdE33Ye31vMb5LbdUg7cp0/agqIxMKQT3nmNnXLfPeS/y9EnP0sTo2uvNyLs13jDtUOIExvQlPHXuJMer5kkdi9nKNKffimx+2RxmhMWqNrrnWjOtSImTGGJ+07i/PYnZI7Wwkx8RLjFFtTEOQGqPM2qXlZ2zGSTu9CI6xxzHYZi2DPzZOuzjlfSY1Jn+xi4urzQNz0M7pss/kxoRTnx/Sck0bXVb2mdgYo6YckWtWXVrO+0xsTGi2CL19lH0mNsbmm7O7oxepMTYPzH1L2WdCY9TUPRzM0iD0CDAPj7y8K3PYZubZ8UzYrVnNy2A/5TyjTDDhY2KyHFN9EZjkxejqK1oXhcWY1y/P917emz7qbw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBXX03UGMBymTrgAAAAAElFTkSuQmCC";

  const data = [
    {
      title: "Upload Audio",
      content: (
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex-1">
            <img
              src={blankImage}
              alt="Upload audio file"
              className="mx-auto w-full max-w-xs"
            />
          </div>
          <p className="flex-1 text-neutral-400">
            Simply record or upload an audio clip in any of the 10 supported
            Indian languages. We accept common formats like MP3, WAV, or direct
            microphone input.
          </p>
        </div>
      ),
    },
    {
      title: "AI Processing",
      content: (
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="order-2 flex-1 md:order-1">
            <p className="text-neutral-400">
              Our deep learning model analyzes the audio's spectrogram patterns
              using convolutional neural networks (CNNs) to extract
              language-specific features.
            </p>
          </div>
          <div className="order-1 flex-1 md:order-2">
            <img
              src={blankImage}
              alt="AI processing audio"
              className="mx-auto w-full max-w-xs"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Get Results",
      content: (
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex-1">
            <img
              src={blankImage}
              alt="Language identification results"
              className="mx-auto w-full max-w-xs"
            />
          </div>
          <p className="flex-1 text-neutral-400">
            Receive instant classification with confidence scores across 10
            languages: Hindi, Bengali, Tamil, Telugu, Gujarati, Punjabi,
            Marathi, Kannada, Malayalam, and Odia.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};

export default ProcessSection;
