"use client";

import Image from "next/image";
import ApplyButton from "./ApplyButton";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { cn } from "./lib/utils";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#051616] to-[#156D6A] text-white py-12 px-4 md:px-8 overflow-hidden">
      {/* Subtle radial grid background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]"
        aria-hidden="true"
      ></div>

      {/* Animated squares */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-6"
        )}
      />

      <div className="relative max-w-[1320px] mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image
            src="/logo.webp"
            alt="Hone Coach"
            width={300}
            height={300}
            className="w-[200px] md:w-[250px] lg:w-[285px] h-[100px] md:h-[120px] lg:h-[130px]"
          />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight break-words">
          STOP WORKING 60+ HOURS A WEEK JUST TO STAY AFLOAT
        </h1>
        <p className="mt-4 text-lg md:text-2xl lg:text-3xl italic text-teal-100 mx-auto">
          Discover the 3 Hidden Numbers Every Business Owner Must Know to Turn
          Their Company Into a Predictable Profit Machine
        </p>

        <div className="max-w-[600px] h-[2px] bg-white/70 mx-auto mt-6 mb-10"></div>

        <div className="relative aspect-video max-w-7xl mx-auto rounded-xl overflow-hidden shadow-xl border border-white/20">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/w8sL27Tl88I?list=PL8XEQ1XKYNDU28EZTqiP_qMo3kriBsnMk"
            title="Hone Coach Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Apply Button */}
        <div className="mt-8">
          <ApplyButton />
        </div>
      </div>
    </section>
  );
}
