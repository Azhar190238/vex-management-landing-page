// components/BusinessFramework.tsx
import {
  LucideChartNoAxesCombined,
  LucideSettings,
  LucideRocket,
} from "lucide-react";

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
    icon: <LucideChartNoAxesCombined className="w-12 h-12 text-teal-600" />,
    title: "DIAGNOSE",
    subtitle: "Financial Clarity & Metrics",
    description:
      "Get crystal clear on your numbers. We identify exactly where your business is profitable, where it's bleeding money, and the key metrics that drive growth.",
    points: [
      "Know your true profit margins",
      "Track the right KPIs",
      "Stop guessing, start measuring",
    ],
  },
  {
    number: 2,
    icon: <LucideSettings className="w-12 h-12 text-teal-600" />,
    title: "SYSTEMATIZE",
    subtitle: "Operations & Team Leverage",
    description:
      "Build systems that run without you. Create processes, hire the right people, and establish accountability structures that keep everything running smoothly.",
    points: [
      "Document core processes",
      "Hire and train A-players",
      "Create accountability systems",
    ],
  },
  {
    number: 3,
    icon: <LucideRocket className="w-12 h-12 text-teal-600" />,
    title: "SCALE",
    subtitle: "Predictable Growth Without More Hours",
    description:
      "Now your business grows automatically. With systems in place and team accountability, you can focus on strategy while revenue increases predictably.",
    points: [
      "Consistent monthly growth",
      "Work 30 hours per week",
      "Business runs without you",
    ],
  },
];

export default function BusinessFramework() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          The 3-Step Business Freedom Framework
        </h2>
        <p className="text-teal-600 text-lg font-medium mt-4 mb-12">
          The exact system I used to go from 70-hour weeks to 30-hour weeks{" "}
          <br />
          while doubling revenue
        </p>

        <div className="grid gap-8 md:grid-cols-3 mt-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative border-2 hover:scale-105 transition-all duration-500 rounded-xl pt-16 pb-8  px-6 shadow-sm flex flex-col items-center text-center"
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
                className={`bg-gray-50  border-l-4 ${
                  step.number === 2 ? "border-[#161617]" : " border-[#14878C]"
                }  rounded-2xl  p-4 text-left w-full max-w-xs mx-auto`}
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
      </div>
    </section>
  );
}
