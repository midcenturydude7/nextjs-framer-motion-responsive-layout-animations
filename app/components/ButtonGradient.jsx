import React from "react";

export default function ButtonGradient() {
  return (
    <div className="group relative">
      <div className="group-hover-duration:200 absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100"></div>
      <button className="relative flex items-center divide-x divide-zinc-600/75 rounded-lg border border-transparent bg-zinc-900/90 px-7 py-4 leading-none transition-colors duration-1000 hover:border hover:border-zinc-100/30 hover:bg-black/80 group-hover:divide-slate-100/80">
        <span className="flex items-center space-x-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 -rotate-6 text-pink-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
            />
          </svg>
          <span className="pr-6 text-slate-100/70 transition-colors duration-200 group-hover:text-slate-100/80">
            Labs Release 2024.05
          </span>
        </span>
        <span className="pl-6 text-indigo-400 transition-colors duration-200 group-hover:text-slate-100/80">
          See What&apos;s New &rarr;
        </span>
      </button>
    </div>
  );
}
