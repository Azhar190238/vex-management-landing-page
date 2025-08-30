// components/Footer.tsx
import { BarChart4 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white px-4 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <div className=" border border-[#0AAA78] flex w-80 mx-auto text-[#0AAA78] bg-[#1C372E] rounded-full px-6 py-3 text-base mb-4">
          <BarChart4 className=" mr-2" /> Just like Scott&apos;s business
          doubled
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold my-4 px-4 ">
          Ready to <span className="text-[#0AAA78]">Double Your Business</span>{" "}
          Like Scott Did?
        </h2>

        <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto my-8">
          Stop guessing what will grow your business. Get the same proven system
          that&apos;s helped 50+ business owners break through their growth
          ceiling and build profitable, scalable companies.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto mb-8">
          <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <span className="text-[#00B67A] text-lg">📊</span>
            <p className="text-lg">Know your numbers like Scott learned to</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <span className="text-[#00B67A] text-lg">🎯</span>
            <p className="text-lg">Set data-driven goals that actually work</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <span className="text-[#00B67A] text-lg">⚙️</span>
            <p className="text-lg">Build systems for sustainable growth</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <span className="text-[#00B67A] text-lg">🏆</span>
            <p className="text-lg">Get accountability that drives results</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/booking"
          className="bg-[#00AB70] hover:bg-green-600  font-semibold  px-6 py-5 text-lg md:text-xl lg:text-2xl text-white  rounded-lg inline-block transition mb-2"
        >
          APPLY NOW FOR FREE STRATEGY SESSION
        </Link>
        <p className="text-gray-400 text-base my-6 ">
          No obligations • 100% free consultation
        </p>

        {/* Limited Spots Notice */}
        <div className="bg-[#473131] text-[#FF6B5A] px-4 py-2 rounded-lg inline-block mb-8">
          Limited spots available - Book before they&apos;re gone
        </div>
        <hr />
        <p className="text-gray-100 text-base my-6 ">
          Join successful business owners who've transformed their companies:
        </p>
        {/* Client Logos */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="bg-[#23362F] px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            Scott Robison
          </div>

          <div className="bg-[#23362F] px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            Ogden Made
          </div>

          <div className="bg-[#23362F] px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            Turf Elevated
          </div>

          <div className="bg-[#23362F] px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            50+ More
          </div>
        </div>
      </div>
    </footer>
  );
}
