import React from "react";
import lindseyHeadshot from "../assets/LindseyHeadshot1.png";

export const Hero = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[72px]">

      {/* ── Left column: content ── */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-32">

        {/* Eyebrow */}
        <p
          className="font-sans text-brass text-xs tracking-[0.25em] uppercase mb-6 animate-fade-in-up"
          style={{ animationDelay: "0ms" }}
        >
          Software Engineer
        </p>

        {/* H1 */}
        <h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-parchment mb-6 animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          I love a good puzzle.
        </h1>

        <h2
          className="font-serif text-xl md:text-2xl lg:text-3xl font-light leading-snug text-cashmere mb-6 animate-fade-in-up"
          style={{ animationDelay: "175ms" }}
        >
          Breaking down complex logic, automating the boring stuff, and building high-performance software that just works.
        </h2>

        {/* Subhead */}
        <p
          className="font-sans text-cashmere text-lg leading-relaxed mb-10 max-w-md font-light animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          Software Engineer with a deep background in test engineering and automation. I focus on debugging legacy code and modernizing messy codebases, blending manual engineering with AI to make software faster and more resilient.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-3 bg-brass text-velvet-espresso px-8 py-4 font-sans text-sm tracking-widest font-medium hover:bg-opacity-90 transition-all duration-400 no-underline"
          >
            Explore Projects
            <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </div>

      {/* ── Right column: portrait ── */}
      <div className="hidden lg:flex items-center justify-center bg-roasted-charcoal">
        <div className="relative">
          {/* Decorative offset border — peeks out behind photo for editorial depth */}
          <div
            className="absolute inset-0 border border-espresso-border translate-x-3 translate-y-3"
            aria-hidden="true"
          />
          {/* Photo frame */}
          <div className="relative w-72 h-96 border border-espresso-border overflow-hidden z-10">
            <img
              src={lindseyHeadshot}
              alt="Lindsey Cason"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle warm brass tint — blends portrait into velvet canvas */}
            <div
              className="absolute inset-0 bg-brass/5 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

    </section>
  );
};
