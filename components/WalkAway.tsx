// app/components/WalkAwaySection.tsx
"use client";

import { FC } from "react";
import { BarChart3, Target, BarChart } from "lucide-react";

interface CardItem {
  id: number;
  title: string;
  description: string;
  icon: any;
}

const WalkAwaySection: FC = () => {
  const cards: CardItem[] = [
    {
      id: 1,
      title: "Growth Assessment",
      description:
        "Uncover the hidden growth opportunities in your business and scale faster with proven strategies",
      icon: <BarChart3 className="w-12 h-12 text-teal-300" />,
    },
    {
      id: 2,
      title: "90-Day Growth Roadmap",
      description:
        "Your personalized action plan to double revenue like Scott did – with specific milestones and deadlines",
      icon: <Target className="w-12 h-12 text-pink-400" />,
    },
    {
      id: 3,
      title: "Key Metrics Framework",
      description:
        "Know exactly which 5 numbers to track daily for consistent, predictable business growth",
      icon: <BarChart className="w-12 h-12 text-indigo-300" />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-teal-900 via-teal-800 to-teal-700 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-10">
          Here&apos;s Exactly What You&apos;ll Walk Away With
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="p-6 border border-white/30 rounded-xl bg-white/5"
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-200 text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Bonus */}
        <div className="mt-8 bg-yellow-400 text-black font-bold text-center py-4 rounded-xl">
          BONUS: $1,200 Worth of Business Systems Course Included FREE
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-200 mt-6 text-sm">
          All of this in just 30 minutes – No fluff, only actionable insights
        </p>
      </div>
    </section>
  );
};

export default WalkAwaySection;
