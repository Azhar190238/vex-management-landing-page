// components/StrategySession.tsx
import Link from "next/link";
import { cn } from "./lib/utils";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import ApplyButton from "./ApplyButton";
import {
  HardHat,
  Settings,
  BookOpen,
  BarChart3,
  Zap,
  Workflow,
} from "lucide-react";

export default function StrategySession() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient + Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#051616] to-[#156D6A]" />
      <div className="absolute inset-0">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-6"
          )}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-white">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8">
          Why Construction Businesses{" "}
          <span className="text-[#0AAA78]">Choose Vex Management</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto text-center mb-12">
          Most agencies don't understand construction. They know how to run ads
          but not how to target the right buyers or speak your language. <br />
          <span className="text-[#0AAA78] font-semibold">We're different.</span>
        </p>

        {/* 4 Cards - Why Choose Us */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="bg-[#0f4f49] p-6 rounded-xl hover:bg-[#12615b] transition shadow-lg text-center">
            <HardHat className="h-10 w-10 mx-auto text-[#0AAA78] mb-3" />
            <h3 className="text-lg font-semibold mb-2">
              5+ Years in Construction
            </h3>
            <p className="text-gray-300 text-sm">
              We've studied and worked in the construction industry. We
              understand how projects are won and how your clients think.
            </p>
          </div>
          <div className="bg-[#0f4f49] p-6 rounded-xl hover:bg-[#12615b] transition shadow-lg text-center">
            <Settings className="h-10 w-10 mx-auto text-[#0AAA78] mb-3" />
            <h3 className="text-lg font-semibold mb-2">
              Industry-Specific Systems
            </h3>
            <p className="text-gray-300 text-sm">
              Our systems are templated but tailored to your brand. No generic
              agency approaches that fail in construction.
            </p>
          </div>
          <div className="bg-[#0f4f49] p-6 rounded-xl hover:bg-[#12615b] transition shadow-lg text-center">
            <BookOpen className="h-10 w-10 mx-auto text-[#0AAA78] mb-3" />
            <h3 className="text-lg font-semibold mb-2">
              We Speak Construction
            </h3>
            <p className="text-gray-300 text-sm">
              No agency jargon. We understand your language, your challenges,
              and your clients' decision-making process.
            </p>
          </div>
          <div className="bg-[#0f4f49] p-6 rounded-xl hover:bg-[#12615b] transition shadow-lg text-center">
            <BarChart3 className="h-10 w-10 mx-auto text-[#0AAA78] mb-3" />
            <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
            <p className="text-gray-300 text-sm">
              We use a proven 3-step process we've implemented for similar
              businesses before. Systems that actually work.
            </p>
          </div>
        </div>

        {/* The Vex Management Difference */}
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-6">
          The <span className="text-[#0AAA78]">Vex Management</span> Difference
        </h3>
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          <div className="bg-[#155452] p-6 rounded-xl hover:bg-[#1a6662] transition text-center">
            <Zap className="h-10 w-10 mx-auto text-[#0AAA78] mb-3" />
            <h4 className="text-lg font-semibold mb-2">
              Industry Knowledge + Marketing Systems
            </h4>
            <p className="text-gray-300 text-sm">
              We merge deep construction insight with proven marketing systems
              so growth sticks.
            </p>
          </div>
          <div className="bg-[#155452] p-6 rounded-xl hover:bg-[#1a6662] transition text-center">
            <Workflow className="h-10 w-10 mx-auto text-[#0AAA78] mb-3" />
            <h4 className="text-lg font-semibold mb-2">Built-In Automations</h4>
            <p className="text-gray-300 text-sm">
              Reduce manual chasing with systems that work 24/7 to nurture and
              convert leads.
            </p>
          </div>
          <div className="bg-[#155452] p-6 rounded-xl hover:bg-[#1a6662] transition text-center">
            <BarChart3 className="h-10 w-10 mx-auto text-[#0AAA78] mb-3" />
            <h4 className="text-lg font-semibold mb-2">Proven Playbooks</h4>
            <p className="text-gray-300 text-sm">
              Cut wasted ad spend with playbooks tested specifically in the
              construction space.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="flex flex-col items-center justify-center">
          <blockquote className="bg-[#12433f] border-l-4 mx-auto border-[#0AAA78] text-center text-xl md:text-2xl font-semibold italic px-6 py-8 rounded-xl max-w-3xl">
            "Make profitable, sustainable growth the default, not the exception
            for construction businesses."
            <footer className="text-gray-400 mt-4">
              — Vex Management Team
            </footer>
          </blockquote>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <ApplyButton />
        </div>
      </div>
    </section>
  );
}
