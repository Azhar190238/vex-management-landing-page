// components/Testimonials.tsx
import { Rate } from "antd";
import "antd/dist/reset.css"; // Ant Design styles
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  initial: string;
  review: string;
  result?: string;
  rating?: number; // Optional rating for each testimonial
}

const testimonials: Testimonial[] = [
  {
    name: "Scott Robison",
    role: "Business Owner",
    initial: "S",
    review:
      "I have been working with Derrik for a few years, and it's been an absolute game changer for my business. I had been in business for 10+ yrs before working with Hone Coach. I felt like I had hit a wall and couldn't grow anymore. Derrik taught me the importance of 'knowing my numbers'.",
    result: "Business Doubled in Size",
    rating: 5,
  },
  {
    name: "Jamie",
    role: "Business Consultant",
    initial: "J",
    review:
      "I've spoken with several consultants, business owners and professionals and Derrik and Hone Coach has been by far the most helpful. He is very open and honest and as detailed or high level as needed with every question and concern. He's saved me time and money and foresaw potential issues that others didn't even think of.",
    rating: 5,
  },
  {
    name: "Ogden Made",
    role: "Small Business Owner",
    initial: "O",
    review:
      "I've just started with Hone Coach and I'm really excited about it. They have me moving in a thoughtful direction. They're helping me understand things about my business I haven't paid attention to and it's going to help make smarter moves this year. The biggest advantage I've seen so far is the guidance to improve in way more phases then just selling more.",
    rating: 4.5,
  },
  {
    name: "Turf Elevated",
    role: "Team Leader",
    initial: "T",
    review:
      "Derrik has been a joy to work with. He cares and isn't just checking the boxes like most coaches. He works to understand what our business is and does for our customers. With that information, he's been helping us improve many aspects of our business to improve more than just our revenue. He's helping us create a better experience for our customers and team!",
    rating: 5,
  },
  {
    name: "Mark Schweppe",
    role: "Associates Team Leader",
    initial: "M",
    review:
      "Derrik was fun and knowledgeable and added depth to our monthly associates meeting! He walked our team through an excellent step by step process on utilizing existing sales stats and data to set appropriate goals based on an economic model, which was not only easily understood but also simple to integrate.",
    rating: 5,
  },
  {
    name: "Frank S",
    role: "Multi-Organization Leader",
    initial: "F",
    review:
      "Derrik's coaching exemplified the core competencies of an effective Business Coach, providing me with a strong foundation that has enhanced my effectiveness across all organizations I've been a part of, including my current role.",
    rating: 4.5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Trustpilot Header */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-[#00b67a] font-semibold flex items-center gap-2">
            Trustpilot
            <Rate
              allowHalf
              disabled
              defaultValue={4.6}
              style={{ color: "#00b67a" }} // Green stars
            />
            <span className="text-black font-medium">4.6 / 5</span>
          </span>
          <p className="text-gray-500 text-sm">Based on 17 verified reviews</p>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-2">Real Results From Real Clients</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Authentic testimonials from business owners who transformed their companies with Hone Coach.
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border-2 border-gray-200 hover:border-[#00b67a] rounded-2xl shadow-md p-6 text-left flex flex-col justify-between
                         transform transition-transform duration-300 hover:scale-105"
            >
              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <Rate
                  allowHalf
                  disabled
                  defaultValue={t.rating}
                  style={{ color: "#16a34a" }} // Green stars
                />
                <span className="bg-[#00b67a] text-white text-xs font-semibold px-2 py-1 rounded">
                  Trustpilot
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 italic mb-4">"{t.review}"</p>

              {/* Optional Business Result */}
              {t.result && (
                <div className="border-l-4 border-l-[#00b67a] bg-gray-200 rounded-md p-3 mb-4">
                  <p className="text-sm text-gray-600 font-medium">
                    Business Growth Result:
                  </p>
                  <p className="text-[#00b67a] font-semibold">{t.result}</p>
                </div>
              )}

              {/* Author */}
              <hr />
              <div className="flex mt-4 items-center gap-3">
                <div className="w-10 h-10 bg-[#00b67a] text-white flex items-center justify-center rounded-full font-bold">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                  <p className="text-xs text-gray-400">✔ Verified Trustpilot Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
