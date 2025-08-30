import React from "react";

export default function ServicesSection() {
  return (
    <section className="w-full max-w-[1320px] mx-auto px-4 py-16 md:px-8 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          Real Business Owners, Real Transformations
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-[#156D6A]">
          See how business owners like you escaped the 70-hour work week trap
        </p>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="bg-[#006E6B] hover:bg-[#007471] hover:scale-105 transition-all duration-500 text-white rounded-lg p-6 lg:p-8 text-center font-bold text-xl shadow-lg">
          <span className="text-3xl md:text-4xl lg:text-5xl">41.6k+</span>
          <p className="text-lg  font-normal mt-4">Coaching Calls Completed</p>
        </div>
        <div className="bg-black hover:bg-[#003333] hover:scale-105 transition-all duration-500 text-white rounded-lg p-6 text-center font-bold text-xl shadow-lg">
          <span className="text-3xl md:text-4xl lg:text-5xl">34.7%</span>
          <p className="text-lg  font-normal mt-4">
            Average Annual Growth Rate
          </p>
        </div>
        <div className="bg-[#006E6B] hover:bg-[#007471] hover:scale-105 transition-all duration-500 text-white rounded-lg p-6 text-center font-bold text-xl shadow-lg">
          <span className="text-3xl md:text-4xl lg:text-5xl">28.4%</span>
          <p className="text-lg  font-normal mt-4">
            Average Workload Reduction
          </p>
        </div>
      </div>

      {/* Stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="border-2 hover:scale-105 transition-all duration-500 border-[#006663] rounded-lg p-6 bg-white shadow-md pb-10">
          <p className="inline-block relative -top-9 bg-[#006663] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            LANDSCAPING
          </p>
          <p className="text-lg text-gray-700 mb-4">
            After 20 years of carrying debt on a rolling credit line, we paid
            off $65,000 in the first 6 months of working with Derrik. The
            clarity on our numbers changed everything.
          </p>
          <div className="bg-teal-700 text-white text-base md:text-lg font-bold px-4 py-3 rounded-xl">
            Debt Eliminated: $65,000 in 6 months
          </div>
        </div>

        <div className="border-2 hover:scale-105 transition-all duration-500 border-black rounded-lg p-6 bg-white shadow-md pb-10">
          <p className="inline-block relative -top-9 bg-black text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            HVAC COMPANY
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I called Derrik because I hated my life and my business. I was
            making $170K working 80 hours a week. Now I’m on track for $2M
            revenue this year working 30 hours per week.
          </p>
          <div className="bg-black text-white text-base md:text-lg font-bold px-4 py-3 rounded-xl">
            Revenue: $170K → $2M | Hours: 80/week → 30/week
          </div>
        </div>

        {/* Card 3 */}

        <div className="border-2 hover:scale-105 transition-all duration-500 border-[#006663] rounded-lg p-6 bg-white shadow-md pb-10">
          <p className="inline-block relative -top-9 bg-[#006663] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            CONSTRUCTION
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We went from $2M revenue with $200K profit to $6M revenue with $1.2M
            profit. Not by working more hours, but by finally understanding our
            business metrics.
          </p>
          <div className="bg-[#006663] text-white text-base md:text-lg font-bold px-4 py-3 rounded-xl">
            Revenue: $2M → $6M | Profit: $200K → $1.2M
          </div>
        </div>

        {/* Card 4 */}
        <div className="border-2 hover:scale-105 transition-all duration-500 border-black rounded-lg p-6 bg-white shadow-md pb-10">
          <p className="inline-block relative -top-9 bg-black text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            HOME SERVICES AVERAGE
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our home services clients consistently outperform industry standards
            with a 34.7% average annual growth rate compared to the typical
            8-11% industry benchmark. This represents 3x higher growth through
            data-driven business strategies.
          </p>
          <div className="bg-black text-white text-base md:text-lg font-bold px-4 py-3 rounded-xl">
            Growth Rate: 34.7% vs 8-11% Industry Standard
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-lg bg-gray-100 rounded-lg p-4 lg:p-8 text-gray-500 mt-8">
        <p className="text-[#006663] font-medium">
          Results are not typical. Individual results may vary based on effort,
          commitment, and implementation of strategies.
        </p>
      </div>
    </section>
  );
}
