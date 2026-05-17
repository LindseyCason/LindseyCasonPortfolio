import React, { useState } from "react";

export const About = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect to Formspree, EmailJS, or your preferred service here
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

        {/* ── Left: narrative ── */}
        <div>
          <p className="font-sans text-brass text-xs tracking-[0.25em] uppercase mb-4">
            About &amp; Philosophy
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-parchment leading-tight mb-10">
            Engineering with Intent.
          </h2>
          <div className="space-y-6 font-sans text-cashmere text-base leading-relaxed max-w-prose">
            <p>
              I'm Lindsey - a Full-Stack Software Engineer
              based in New Orleans. My work lives at the intersection of creative
              problem-solving and rigorous engineering discipline. I believe truly
              great software isn't just functional, it's deliberate, resilient,
              and built with the end user's experience as the focal point.
            </p>
            <p>
              My philosophy is rooted in continuous, intentional improvement.
              Whether I'm building a new feature, reducing CI pipeline
              flakiness, or untangling a legacy codebase, the approach is the
              same: slow down to go fast, understand the system deeply, and build
              things that last. Every line of code is an opportunity to leave the
              codebase better than you found it.
            </p>
          </div>
        </div>

        {/* ── Right: contact form ── */}
        {/* Hidden anchor so the CONTACT nav link scrolls here */}
        <div>
          <div id="contact" className="scroll-mt-24" aria-hidden="true" />
          <p className="font-sans text-brass text-xs tracking-[0.25em] uppercase mb-4">
            Get In Touch
          </p>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-parchment mb-10">
            Let's build something together.
          </h3>

          {submitted ? (
            <p className="font-sans text-cashmere text-base leading-relaxed">
              Thank you for reaching out — I'll be in touch shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Name & Email */}
              {[
                { name: "name",  label: "Name",  type: "text",  placeholder: "Your name"          },
                { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label
                    htmlFor={name}
                    className="block font-sans text-xs text-cashmere tracking-[0.2em] uppercase mb-2"
                  >
                    {label}
                  </label>
                  <input
                    id={name}
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    required
                    placeholder={placeholder}
                    className="w-full bg-transparent border-b border-espresso-border py-3 font-sans text-sm text-parchment placeholder-cashmere/30 caret-brass focus:outline-none focus:border-brass transition-all duration-400"
                  />
                </div>
              ))}

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-xs text-cashmere tracking-[0.2em] uppercase mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project or idea"
                  className="w-full bg-transparent border-b border-espresso-border py-3 font-sans text-sm text-parchment placeholder-cashmere/30 caret-brass focus:outline-none focus:border-brass transition-all duration-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="font-sans text-sm tracking-widest text-velvet-espresso bg-brass px-8 py-4 font-medium hover:bg-opacity-85 transition-all duration-400"
              >
                Send Message &rarr;
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
