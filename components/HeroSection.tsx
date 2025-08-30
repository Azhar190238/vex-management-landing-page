import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-teal-800 to-teal-600 text-white py-16 px-4 md:px-8 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image
            src="/logo.webp" // replace with your logo
            alt="Hone Coach"
            width={50}
            height={50}
          />
          <span className="text-3xl font-bold">HONE COACH</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          STOP WORKING 60+ HOURS A WEEK JUST TO <br className="hidden md:block" /> STAY AFLOAT
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg italic text-teal-100 max-w-2xl mx-auto">
          Discover the 3 Hidden Numbers Every Business Owner Must Know to Turn Their Company Into a Predictable Profit Machine
        </p>

        {/* Divider */}
        <div className="w-32 h-[2px] bg-white/70 mx-auto mt-6 mb-10"></div>

        {/* Video Embed */}
        <div className="relative aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl border border-white/20">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Hone Coach Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
