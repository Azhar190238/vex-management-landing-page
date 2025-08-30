// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white px-4 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block border border-[#00B67A] text-[#00B67A] rounded-full px-4 py-1 text-sm mb-4">
          Just like Scott&apos;s business doubled
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 px-4">
          Ready to <span className="text-[#00B67A]">Double Your Business</span> Like Scott Did?
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Stop guessing what will grow your business. Get the same proven system that&apos;s helped 50+ business
          owners break through their growth ceiling and build profitable, scalable companies.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto mb-8">
          <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <span className="text-[#00B67A] text-lg">📊</span>
            <p>Know your numbers like Scott learned to</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <span className="text-[#00B67A] text-lg">🎯</span>
            <p>Set data-driven goals that actually work</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <span className="text-[#00B67A] text-lg">⚙️</span>
            <p>Build systems for sustainable growth</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <span className="text-[#00B67A] text-lg">🏆</span>
            <p>Get accountability that drives results</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="#"
          className="bg-[#00B67A] hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg inline-block transition mb-2"
        >
          APPLY NOW FOR FREE STRATEGY SESSION
        </Link>
        <p className="text-gray-400 text-sm mb-6">No obligations • 100% free consultation</p>

        {/* Limited Spots Notice */}
        <div className="bg-red-700 text-white px-4 py-2 rounded-lg inline-block mb-8">
          Limited spots available - Book before they&apos;re gone
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="#">
            <div className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
              Scott Robison
            </div>
          </Link>
          <Link href="#">
            <div className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
              Ogden Made
            </div>
          </Link>
          <Link href="#">
            <div className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
              Turf Elevated
            </div>
          </Link>
          <Link href="#">
            <div className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
              50+ More
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
