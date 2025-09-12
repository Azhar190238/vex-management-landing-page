// components/BusinessFramework.tsx
import { LucideBadgeDollarSign, LucideTrendingUp, LucideRocket } from "lucide-react";

interface Step {
  number: number;
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

const steps: Step[] = [
  {
    number: 1,
    icon: <LucideBadgeDollarSign className="w-12 h-12 text-teal-600" />,
    title: "$100 CASH PROMISE",
    subtitle: "We'll Pay If We Can't Deliver",
    description:
      "If we can't find strategies to increase your revenue by 30%, we'll give you $100 cash for your time — no strings attached.",
    points: [
      "Free audit of your current systems",
      "Identify 30%+ growth potential",
      "You get paid if we can’t find it",
    ],
  },
  {
    number: 2,
    icon: <LucideTrendingUp className="w-12 h-12 text-teal-600" />,
    title: "REVENUE GUARANTEE",
    subtitle: "We Work Until You Grow",
    description:
      "If we don't increase your revenue by at least 30%, we'll continue working with you for free until we hit that target.",
    points: [
      "Zero-risk partnership",
      "Performance-based commitment",
      "Pay only when results are proven",
    ],
  },
  {
    number: 3,
    icon: <LucideRocket className="w-12 h-12 text-teal-600" />,
    title: "FAST RESULTS",
    subtitle: "Growth Within 30-60 Days",
    description:
      "See 20-30 qualified leads and measurable revenue growth within 30-60 days of implementing our strategies.",
    points: [
      "Rapid lead generation system",
      "Track results in real-time",
      "Quick revenue impact",
    ],
  },
];

export default function BusinessFramework() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          Risk-Free Guarantee
        </h2>
        <p className="text-teal-600 text-lg font-medium mt-4 mb-12">
          We're so confident, we'll pay YOU if we can't deliver results.
          <br />
          The construction industry's strongest guarantee.
        </p>

        {/* 3-Step Grid */}
        <div className="grid gap-8 md:grid-cols-3 mt-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative border-2 hover:scale-105 transition-all duration-500 rounded-xl pt-16 pb-8 px-6 shadow-sm flex flex-col items-center text-center"
              style={{
                borderColor:
                  step.number === 2 ? "#000" : "rgba(0, 128, 128, 0.5)",
              }}
            >
              {/* Step Number Badge */}
              <div
                className={`absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 ${
                  step.number === 2 ? "bg-[#161617]" : "bg-[#14878C]"
                } text-white rounded-full flex items-center justify-center font-bold shadow-lg`}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-4">{step.icon}</div>

              {/* Title & Subtitle */}
              <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
              <p className="text-teal-600 font-medium mb-4 mt-4">{step.subtitle}</p>

              {/* Description */}
              <p className="text-gray-600 mb-6 mt-2">{step.description}</p>

              {/* Points */}
              <div
                className={`bg-gray-50 border-l-4 ${
                  step.number === 2 ? "border-[#161617]" : "border-[#14878C]"
                } rounded-2xl p-4 text-left w-full max-w-xs mx-auto`}
              >
                {step.points.map((point, i) => (
                  <p key={i} className="text-gray-700 text-base">
                    ✓ {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-white p-6 bg-red-900 text-lg font-semibold  rounded-xl">
          No contracts. No commitments. Just results — or you get paid.
        </p>
        </div>
      </div>
    </section>
  );
}
