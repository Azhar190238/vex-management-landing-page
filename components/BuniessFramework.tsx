// components/BusinessFramework.tsx
import Image from "next/image";

interface Step {
  number: number;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

const steps: Step[] = [
  {
    number: 1,
    icon: "/icons/chart.svg",
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
    icon: "/icons/gear.svg",
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
    icon: "/icons/rocket.svg",
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
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          The 3-Step Business Freedom Framework
        </h2>
        <p className="text-teal-600 font-medium mb-12">
          The exact system I used to go from 70-hour weeks to 30-hour weeks
          while doubling revenue
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative border rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
              style={{
                borderColor:
                  step.number === 2 ? "#000" : "rgba(0, 128, 128, 0.5)",
              }}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <Image
                src={step.icon}
                alt={step.title}
                width={50}
                height={50}
                className="mb-4"
              />

              {/* Title & Subtitle */}
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-teal-600 font-medium mb-4">{step.subtitle}</p>

              {/* Description */}
              <p className="text-gray-600 mb-4">{step.description}</p>

              {/* Points */}
              <div className="bg-gray-50 rounded-md p-4 text-left w-full max-w-xs mx-auto">
                {step.points.map((point, i) => (
                  <p key={i} className="text-gray-700 text-sm">
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
