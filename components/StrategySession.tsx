// components/StrategySession.tsx

import { cn } from "./lib/utils";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";


export default function StrategySession() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient + Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00332d] via-[#006d63] to-[#009688]" />
      <div className="absolute inset-0">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-white">
        {/* Main Card */}
        <div className="bg-[#0a5e57] bg-opacity-80 rounded-xl p-8 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Zero-Risk Strategy Session Guarantee
          </h2>
          <p className="text-teal-100 mb-6">
            I guarantee you&apos;ll walk away with at least one actionable
            insight worth $10,000+ in potential revenue.
          </p>

          <div className="bg-[#02897b] p-4 rounded-md mb-6 font-medium">
            If you don&apos;t get concrete, implementable strategies from our
            30-minute call, I&apos;ll personally send you $100 for wasting your
            time.
          </div>

          {/* Two Columns */}
          <div className="grid gap-4 md:grid-cols-2 text-left">
            <div className="bg-[#0f4f49] p-4 rounded-md">
              <h3 className="text-lg font-semibold text-teal-200">
                No Sales Pressure
              </h3>
              <p className="text-teal-100 text-sm">
                This is a genuine strategy session, not a sales call. You&apos;ll
                get value whether we work together or not.
              </p>
            </div>
            <div className="bg-[#0f4f49] p-4 rounded-md">
              <h3 className="text-lg font-semibold text-teal-200">
                Complete Confidentiality
              </h3>
              <p className="text-teal-100 text-sm">
                Your business information stays private. I&apos;ve worked with
                Fortune 500 companies – your secrets are safe.
              </p>
            </div>
          </div>
        </div>

        {/* What You'll Walk Away With */}
        <div className="bg-[#0a5e57] bg-opacity-80 rounded-xl p-8 mt-8 text-center shadow-lg">
          <h3 className="text-xl font-bold mb-6">
            What You&apos;ll Walk Away With
          </h3>
          <div className="grid gap-4 md:grid-cols-2 text-sm text-left">
            <ul className="list-disc list-inside space-y-1">
              <li>Identify your top 3 growth opportunities</li>
              <li>3 specific areas to focus on first</li>
              <li>Roadmap for your next 90 days</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Key metrics you should be tracking</li>
              <li>Your biggest growth opportunity</li>
              <li>Action steps you can start immediately</li>
            </ul>
          </div>
        </div>

        {/* Guarantee Statement */}
        <p className="italic text-teal-200 text-center mt-6">
          This guarantee exists because I&apos;ve never had a business owner leave
          our call empty-handed. When you understand your numbers and see the
          opportunities, the path forward becomes crystal clear.
        </p>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#009688] hover:bg-[#00b8a9] text-white font-bold px-8 py-4 rounded-lg shadow-lg transition">
            APPLY NOW FOR FREE STRATEGY SESSION
          </button>
        </div>
      </div>
    </section>
  );
}
