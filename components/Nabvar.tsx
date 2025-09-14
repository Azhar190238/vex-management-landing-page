"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  logoSrc?: string;
  logoAlt?: string;
}

export default function Navbar({
  logoSrc = "/logo.png",
  logoAlt = "vex Logo",
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#0D3938] shadow-sm">
      <nav className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-200 h-20 ">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={200}
                  height={80}
                  priority
                  className="object-contain"
                />
              </div>
              
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* Desktop button */}
            <div className="">
              <Link
                href="/booking"
                className="inline-flex items-center px-6 py-4 rounded-md text-lg font-medium bg-[#FFD703] text-[#0D3938] shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5C2C]"
              >
                Booking Now
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}
