import React from "react";

export default function ServicesSection() {
  return (
    <section className="w-full max-w-[1320px] mx-auto px-4 py-16 md:px-8 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          The Construction Growth System
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-[#156D6A]">
          Our proven 3-pillar system has helped construction businesses generate
          consistent pipelines and scale beyond word-of-mouth dependency.
        </p>
      </div>

      {/* Top Stats / Guarantee Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="bg-[#006E6B] hover:bg-[#007471] hover:scale-105 transition-all duration-500 text-white rounded-lg p-6 lg:p-8 text-center shadow-lg">
          <h3 className="text-4xl font-extrabold mb-2">30%+</h3>
          <p className="text-lg font-medium">Revenue Increase</p>
          <p className="text-sm mt-2">Guaranteed in 30-60 days</p>
        </div>

        <div className="bg-[#006E6B] hover:bg-[#007471] hover:scale-105 transition-all duration-500 text-white rounded-lg p-6 lg:p-8 text-center shadow-lg">
          <h3 className="text-4xl font-extrabold mb-2">📈</h3>
          <p className="text-lg font-medium">Acquisition Engine</p>
          <p className="text-sm mt-2">Targeted Lead Generation</p>
        </div>

        <div className="bg-[#006E6B] hover:bg-[#007471] hover:scale-105 transition-all duration-500 text-white rounded-lg p-6 lg:p-8 text-center shadow-lg">
          <h3 className="text-4xl font-extrabold mb-2">🤝</h3>
          <p className="text-lg font-medium">Growth Partner</p>
          <p className="text-sm mt-2">Hands-On Support & Consulting</p>
        </div>
      </div>

      {/* 3-Pillar System Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1 */}
        <div className="border-2 hover:scale-105 transition-all duration-500 border-[#006663] rounded-lg p-6 bg-white shadow-md">
          <h3 className="text-xl font-bold mb-4 text-[#006663]">
            Acquisition Engine
          </h3>
          <p className="text-gray-700 mb-4">
            Content, ads, creative, and tracking tailored specifically for
            construction professionals. No more generic marketing that doesn’t
            work in your industry.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Industry-specific ad campaigns</li>
            <li>Content that speaks construction</li>
            <li>Advanced tracking systems</li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="border-2 hover:scale-105 transition-all duration-500 border-black rounded-lg p-6 bg-white shadow-md">
          <h3 className="text-xl font-bold mb-4 text-black">
            Conversion & Retention Systems
          </h3>
          <p className="text-gray-700 mb-4">
            Landing pages, workflows, and follow-ups designed for construction
            buyers. We know how your clients make decisions.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>High-converting landing pages</li>
            <li>Automated follow-up sequences</li>
            <li>Client retention systems</li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="border-2 hover:scale-105 transition-all duration-500 border-[#006663] rounded-lg p-6 bg-white shadow-md">
          <h3 className="text-xl font-bold mb-4 text-[#006663]">
            Consulting & Growth Partnering
          </h3>
          <p className="text-gray-700 mb-4">
            Weekly updates, direct consulting, and hands-on growth support. We
            become your growth partner, not just another vendor.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Weekly strategy sessions</li>
            <li>Direct access to experts</li>
            <li>Ongoing optimization</li>
          </ul>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-lg bg-gray-100 rounded-lg p-4 lg:p-8 text-gray-500 mt-8">
        <p className="text-[#006663] font-medium">
          Designed exclusively for construction businesses that want to grow
          predictably — without relying on word-of-mouth.
        </p>
      </div>
    </section>
  );
}
