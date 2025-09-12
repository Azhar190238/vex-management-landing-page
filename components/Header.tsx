export default function BonusHeader() {
  return (
    <div
      className="
        w-full 
        text-white text-center text-sm md:text-base font-medium
        border-b-4 border-teal-600
        relative overflow-hidden
        animate-bgPulse
      "
    >
      {/* Animated Gray Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent animate-grayMove"></div>

      <div className="relative max-w-7xl mx-auto animate-textPulse delay-500 px-4 py-4 flex items-center justify-center gap-2 flex-wrap">
        <span className="text-teal-300 font-semibold ">
          BONUS EXPIRES SOON:
        </span>
        <span className="text-yellow-400 font-bold">
          $1,200
        </span>
        <span className="text-white">
          Worth of Business Systems Course Included with the Free Strategy Session
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400 "
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9z" />
        </svg>
      </div>
    </div>
  );
}
