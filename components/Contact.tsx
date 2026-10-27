"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  Linkedin,
  Github,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { contact, personal, socials } = siteContent;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "026ca16e-8058-40ff-81e5-9e98a254a2de",
          subject: `New Portfolio Message from ${data.name}`,
          from_name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Trigger confetti celebration
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#06b6d4", "#3b82f6", "#10b981", "#38bdf8"],
        });
        setStatus("success");
        reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please reach out directly via email!");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white">
            {contact.heading}{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                {contact.headingHighlight}
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white/85 dark:bg-slate-800/85 backdrop-blur-md border border-cyan-100/70 dark:border-slate-700 shadow-soft dark:shadow-soft-dark space-y-6">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>

              {/* Email Item */}
              <a
                href={`mailto:${socials.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-cyan-50/60 dark:bg-slate-900/60 border border-cyan-100 dark:border-slate-800 hover:border-cyan-400 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block">
                    Direct Email
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                    {socials.email}
                  </span>
                </div>
              </a>

              {/* Location Item */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 text-blue-500 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block">
                    Location
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {personal.location}
                  </span>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Profiles & Socials
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:border-blue-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:border-slate-400 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-800 dark:text-white" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-cyan-100/80 dark:border-slate-700 shadow-soft dark:shadow-soft-dark">
              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border ${
                      errors.name
                        ? "border-rose-400 focus:ring-rose-400"
                        : "border-slate-200 dark:border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/20"
                    } outline-none focus:ring-2 transition-all text-slate-900 dark:text-white`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alex@example.com"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border ${
                      errors.email
                        ? "border-rose-400 focus:ring-rose-400"
                        : "border-slate-200 dark:border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/20"
                    } outline-none focus:ring-2 transition-all text-slate-900 dark:text-white`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Hi Kashish, I'd like to talk about an internship opportunity..."
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border ${
                      errors.message
                        ? "border-rose-400 focus:ring-rose-400"
                        : "border-slate-200 dark:border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/20"
                    } outline-none focus:ring-2 transition-all text-slate-900 dark:text-white resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Success Message Banner */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 flex items-center gap-3 text-sm font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>
                      Thank you! Your message has been sent successfully. I will get back to you shortly.
                    </span>
                  </motion.div>
                )}

                {/* Error Message Banner */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 flex items-center gap-3 text-sm font-medium"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{contact.buttonText}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
