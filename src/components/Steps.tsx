"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { TextHoverEffect } from "./ui/text-hover-effect";

const loadingStates = [
  {
    text: "Initial Consultation: We begin by understanding your business needs through a discovery call to gather insights into your goals and challenges.",
  },
  {
    text: "Strategy Session: Our experts analyze your requirements and propose a tailored roadmap, aligning with your business objectives and technical needs.",
  },
  {
    text: "Proposal & Agreement: We present a comprehensive proposal, including project scope, timelines, and pricing, followed by signing an agreement.",
  },
  {
    text: "Development & Integration: Our team develops your solution and integrates it with existing systems, ensuring smooth collaboration throughout.",
  },
  {
    text: "Testing & Deployment: We rigorously test the solution for performance, security, and scalability before deploying it to your live environment.",
  },
  {
    text: "Ongoing Support: After deployment, we provide continuous monitoring and support, ensuring the solution stays optimized and runs smoothly.",
  },
];

export function Steps() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {" "}
      <div className="w-full h-[60vh] flex items-center justify-center">
        {/* Core Loader Modal */}

        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />

        {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
        <button
          onClick={() => setLoading(true)}
          className="relative mx-auto inline-flex h-20 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-16 py-6 text-xl md:text-2xl font-medium text-white backdrop-blur-3xl">
            Steps to avail service →
          </span>
        </button>

        {loading && (
          <button
            className="fixed top-4 right-4 text-black dark:text-white z-[120]"
            onClick={() => setLoading(false)}
          >
            <IconSquareRoundedX className="h-10 w-10" />
          </button>
        )}
      </div>
    </div>
  );
}
