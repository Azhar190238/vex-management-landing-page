import Image from "next/image";

export default function CoachSection() {
  return (
    <section className="relative bg-[#0c0f0f] overflow-hidden py-16 px-4 md:px-8">
      {/* Diagonal background pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,#111_25%,#0c0f0f_25%)] bg-[length:40px_40px] opacity-20"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            The Coach Who Built His Freedom First
          </h2>
          <p className="text-teal-400 font-medium text-lg">
            Now I help business owners do the same
          </p>
          <p className="text-gray-300 leading-relaxed">
            When my wife battled cancer and I lost my best friend, I realized I
            was living someone else's dream. I left my corporate job and built a
            business that gives me freedom to be present for what matters most.
          </p>

          {/* Bullet box */}
          <div className="bg-[#0f1f1f] border border-teal-700 rounded-lg p-5 space-y-1 text-sm text-gray-200">
            <p>▪ Trained by Billionaire Business Oracle Gary Keller</p>
            <p>▪ Completed 8,000+ individual coaching sessions</p>
            <p>▪ Specializes in systems and data, not cheerleading</p>
            <p>▪ Helps businesses become sellable assets</p>
          </div>

          {/* Quote */}
          <div className="bg-teal-500 text-white rounded-lg p-4 text-center font-semibold">
            "Your business should fund your life, not consume it."
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="relative w-60 h-60 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about.jpeg" // Replace with your image
              alt="Derrik Schweppe"
              fill
              className="object-cover"
            />
          </div>

          {/* Name & Role */}
          <h3 className="mt-6 text-2xl font-bold text-white">
            Derrik Schweppe
          </h3>
          <p className="text-teal-400 font-medium">
            Business Coach & Systems Expert
          </p>

          {/* Stats */}
          <div className="flex gap-4 mt-6">
            <div className="bg-gray-900 text-white px-5 py-3 rounded-lg shadow-md">
              <p className="text-teal-400 text-lg font-bold">7+</p>
              <p className="text-xs text-gray-400">Years Experience</p>
            </div>
            <div className="bg-teal-500 text-white px-5 py-3 rounded-lg shadow-md">
              <p className="text-lg font-bold">500+</p>
              <p className="text-xs">Clients Helped</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
