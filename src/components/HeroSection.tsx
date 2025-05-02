import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export function HeroSection() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-black overflow-hidden">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0 opacity-20",
          "bg-[size:40px_40px]",
          "bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]",
        )}
      />

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>

      {/* Content container */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-6 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Voice of the Nation
        </h1>

        <p className="text-2xl sm:text-3xl font-medium bg-gradient-to-b from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
          Speak, Identify, Connect
        </p>

        <p className="text-base sm:text-lg text-neutral-400 max-w-2xl">
          Instantly classify spoken audio across 10 Indian languages — powered
          by deep learning. Perfect for call centers, virtual assistants, and
          multilingual services.
        </p>

        <Link
          href="/camera"
          className="mt-8 px-8 py-3 rounded-md bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
        >
          Try Demo →
        </Link>
      </div>
    </div>
  );
}
