import Link from "next/link";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

export default function ApplyButton() {
  return (
    <div className="flex items-center justify-center gap-6 pt-16">
      {/* Left Arrow */}
      <FaAngleDoubleRight className="text-white text-5xl md:text-7xl lg:text-9xl animate-bounceLeft" />

      {/* Button */}
      <Link href={"/booking"}>
      <p
        className="
          px-12 py-7 relative top-4 rounded-lg cursor-pointer
          bg-[#007471] hover:bg-teal-600 
          text-white font-bold text-xl md:text-2xl lg:text-3xl tracking-wide
          shadow-lg shadow-teal-900/40
          transition-all duration-300
          animate-pulseScale
        "
      >
        APPLY NOW FOR FREE STRATEGY SESSION
      </p>
      </Link>

      {/* Right Arrow */}
      <FaAngleDoubleLeft className="text-white text-5xl md:text-7xl lg:text-9xl animate-bounceRight" />
    </div>
  );
}