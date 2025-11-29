"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // For now, just simulate form submission
    // TODO: Integrate with Resend or other email service
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-heading uppercase tracking-wider text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 focus:border-olympus-gold focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-heading uppercase tracking-wider text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 focus:border-olympus-gold focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-heading uppercase tracking-wider text-gray-700 mb-2">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 focus:border-olympus-gold focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-heading uppercase tracking-wider text-gray-700 mb-2">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 focus:border-olympus-gold focus:outline-none transition-colors"
        >
          <option value="">Select a service...</option>
          <option value="brick-stone">Brick & Stone Masonry</option>
          <option value="retaining-walls">Retaining Walls & Patios</option>
          <option value="chimneys">Chimneys & Fireplaces</option>
          <option value="winter">Winter Masonry</option>
          <option value="concrete">Concrete Work</option>
          <option value="restoration">Restoration & Repair</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-heading uppercase tracking-wider text-gray-700 mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 focus:border-olympus-gold focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>

      {status === "success" && (
        <div className="p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
          <p className="font-body text-sm">Thank you! We'll be in touch soon.</p>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p className="font-body text-sm">Something went wrong. Please try again or call us directly.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-olympus-gold text-olympus-black px-8 py-4 font-heading uppercase tracking-wider text-lg hover:bg-olympus-gold-light transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Request Estimate"}
      </button>

      <p className="text-xs font-body text-gray-500 text-center">
        Or call us directly at <a href="tel:4039195272" className="text-olympus-gold hover:underline">403-919-5272</a>
      </p>
    </form>
  );
}
