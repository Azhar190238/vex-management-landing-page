// components/Footer.tsx
"use client";
import { BarChart4, Clock, DollarSign, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Small Label */}
        <div className="border border-[#0AAA78] flex items-center justify-center w-fit mx-auto text-[#0AAA78] bg-[#1C372E] rounded-full px-6 py-2 text-sm font-medium mb-6">
          <BarChart4 className="mr-2 h-4 w-4" />
          Ready To Build Your Growth System?
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Ready To <span className="text-[#0AAA78]">Build Your Growth</span>{" "}
          System?
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto mb-10">
          Stop chasing jobs. Start scaling profits. Get your free construction
          audit today and discover how to generate consistent work so you can
          finally step away from the daily grind.
        </p>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:bg-gray-700 transition">
            <Clock className="h-10 w-10 text-[#0AAA78] mb-3" />
            <h4 className="text-xl font-semibold mb-1">Free 30-Min Audit</h4>
            <p className="text-gray-400 text-sm">No commitment required</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:bg-gray-700 transition">
            <DollarSign className="h-10 w-10 text-[#0AAA78] mb-3" />
            <h4 className="text-xl font-semibold mb-1">$100 Cash Promise</h4>
            <p className="text-gray-400 text-sm">
              If we can't help, we pay you
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:bg-gray-700 transition">
            <TrendingUp className="h-10 w-10 text-[#0AAA78] mb-3" />
            <h4 className="text-xl font-semibold mb-1">30% Growth Guarantee</h4>
            <p className="text-gray-400 text-sm">
              Or we work completely for free
            </p>
          </div>
        </div>

        {/* CTA Button */}

        <div>
          <Link
            href="/booking"
            className="bg-[#00AB70] hover:bg-green-600 font-semibold px-8 py-5 text-lg md:text-xl lg:text-2xl rounded-xl inline-block transition transform hover:scale-105 shadow-lg"
          >
            Get My Free $100 Guarantee Audit
          </Link>
        </div>

        {/* Limited Spots */}
        <div className="bg-[#3A2626] text-[#FF6B5A] px-6 py-3 rounded-lg inline-block mt-6 text-base font-medium">
          <p>
            📞 Book your call in the next 30 seconds — Limited spots available
            this week
          </p>
        </div>

        {/* What Happens After You Book */}
        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="text-2xl font-bold mb-8">
            What Happens After You Book?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
              <div className="text-4xl text-[#0AAA78] font-bold mb-3">1</div>
              <h4 className="text-lg font-semibold mb-2">Deep Dive Analysis</h4>
              <p className="text-gray-400 text-sm">
                We'll analyze your current marketing, identify gaps, and map out
                growth opportunities.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
              <div className="text-4xl text-[#0AAA78] font-bold mb-3">2</div>
              <h4 className="text-lg font-semibold mb-2">Custom Strategy</h4>
              <p className="text-gray-400 text-sm">
                Get a tailored action plan to reach your specific revenue goals
                in construction.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
              <div className="text-4xl text-[#0AAA78] font-bold mb-3">3</div>
              <h4 className="text-lg font-semibold mb-2">
                Implementation Plan
              </h4>
              <p className="text-gray-400 text-sm">
                Walk away with exact next steps to start building your
                predictable growth system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
