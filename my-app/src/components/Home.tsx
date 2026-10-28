"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ShieldCheck,
  Zap,
  Lock,
  ArrowRight,
  Sparkles,
  Sun,
  Moon,
  Star,
  ChevronDown,
  MessageSquare,
  Users,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type FAQ = {
  q: string;
  a: string;
};

const stats = [
  { val: "12M+", label: "Messages Sent" },
  { val: "500K+", label: "Daily Users" },
  { val: "Privacy", label: "A Core Priority" },
  { val: "User First", label: "Design Philosophy" },
];

const features = [
  {
    title: "Ghost Mode",
    desc: "Share your feedback link and let people send messages without displaying their identity in the message.",
    icon: <Lock className="h-10 w-10" />,
  },
  {
    title: "Fast Delivery",
    desc: "A streamlined messaging experience designed to help feedback reach your inbox quickly.",
    icon: <Zap className="h-10 w-10" />,
  },
  {
    title: "Safer Conversations",
    desc: "Build a more respectful feedback experience with appropriate moderation and abuse-prevention controls.",
    icon: <ShieldCheck className="h-10 w-10" />,
  },
];

const testimonials = [
  {
    user: "Aman Gupta",
    role: "Creator",
    text: "Anonymous feedback gives me another way to understand what my audience thinks.",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    user: "Priya Singh",
    role: "Student",
    text: "The clean interface makes sharing my feedback link simple and convenient.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    user: "Rohan X.",
    role: "Developer",
    text: "I like having a dedicated place to collect feedback and manage messages.",
    gradient: "from-green-400 to-cyan-500",
  },
];

const faqs: FAQ[] = [
  {
    q: "Is my identity really hidden?",
    a: "The app is designed for anonymous feedback, but actual anonymity depends on its implementation, server logs, and privacy policy. Avoid including identifying information in your messages.",
  },
  {
    q: "Can I block specific people?",
    a: "Available controls depend on the features implemented in your account. Moderation, reporting, and rate limiting can help manage unwanted messages.",
  },
  {
    q: "How do I add the link to my bio?",
    a: "Open your dashboard, copy your unique feedback link, then paste it into the website or bio field on your social media profile.",
  },
  {
    q: "Is MysticMsg free?",
    a: "You can start using the available features according to the application's current plan and usage limits.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.7,
    ease: "easeOut" as const,
  },
};

export default function FullHomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering theme-dependent content before hydration.
  if (!mounted) {
    return (
      <main className="min-h-screen bg-[#030712]">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="mx-auto h-10 max-w-2xl animate-pulse rounded-xl bg-white/5" />
          <div className="mx-auto mt-6 h-24 max-w-3xl animate-pulse rounded-xl bg-white/5" />
        </div>
      </main>
    );
  }

  const isDark = theme === "dark";

  const surface = isDark
    ? "border-white/10 bg-white/[0.03]"
    : "border-slate-200 bg-white";

  const mutedText = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <main
      className={`relative min-h-screen overflow-x-clip font-sans transition-colors duration-500 ${
        isDark
          ? "bg-[#030712] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* Theme toggle */}
      <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
        <Button
          variant="outline"
          size="icon"
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          className={`h-12 w-12 rounded-full border-white/20 shadow-2xl backdrop-blur-xl transition-transform hover:scale-110 sm:h-14 sm:w-14 ${
            isDark ? "bg-slate-900/80" : "bg-white/90"
          }`}
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-400" />
          ) : (
            <Moon className="h-6 w-6 text-blue-600" />
          )}
        </Button>
      </div>

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute top-0 h-[800px] w-full ${
            isDark
              ? "bg-gradient-to-b from-blue-600/15 via-indigo-500/5 to-transparent"
              : "bg-gradient-to-b from-blue-100 to-transparent"
          }`}
        />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              isDark ? "#80808012" : "#00000008"
            } 1px, transparent 1px), linear-gradient(to bottom, ${
              isDark ? "#80808012" : "#00000008"
            } 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div
          className={`absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full blur-[120px] sm:h-[500px] sm:w-[500px] ${
            isDark ? "bg-blue-600/10" : "bg-blue-400/15"
          }`}
        />
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[85svh] items-center justify-center px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:min-h-screen">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`mx-auto mb-8 inline-flex max-w-full items-center gap-2 rounded-full border px-4 py-2 shadow-sm sm:mb-10 sm:px-6 ${
              isDark
                ? "border-white/10 bg-white/5 text-blue-400"
                : "border-blue-100 bg-blue-50 text-blue-600"
            }`}
          >
            <Sparkles className="h-4 w-4 shrink-0 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider sm:text-sm sm:tracking-[0.2em]">
              MysticMsg · Anonymous Feedback
            </span>
          </motion.div>

          <motion.h1
            {...fadeInUp}
            className="mx-auto mb-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Honest Talk.
            <br />
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? "from-white via-blue-400 to-indigo-500"
                  : "from-blue-600 via-indigo-600 to-purple-600"
              }`}
            >
              Zero Labels.
            </span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            className={`mx-auto mb-10 max-w-2xl text-base font-medium leading-relaxed opacity-75 sm:mb-12 sm:text-xl md:text-2xl ${mutedText}`}
          >
            Share your secret link, receive anonymous messages, and discover
            new perspectives through honest feedback.
          </motion.p>

          <motion.div
            {...fadeInUp}
            className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6"
          >
            <Link href="/dashbord" className="w-full sm:w-auto">
              <Button
                size="lg"
                className={`h-14 w-full rounded-2xl px-7 text-base font-black shadow-2xl transition-all sm:h-20 sm:w-auto sm:rounded-[2rem] sm:px-12 sm:text-xl ${
                  isDark
                    ? "bg-white text-black hover:-translate-y-1 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:-translate-y-1 hover:bg-blue-700"
                }`}
              >
                Open Dashboard
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>

            <Link href="/dkh" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className={`h-14 w-full rounded-2xl border px-6 text-base font-bold sm:h-20 sm:w-auto sm:rounded-[2rem] sm:px-8 ${
                  isDark
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-slate-200 bg-white hover:bg-slate-50"
                }`}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Demo Videos
              </Button>
            </Link>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 sm:gap-5 sm:text-sm">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-indigo-400" />
              Feedback-focused
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-indigo-400" />
              Made for conversations
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-20">
        <motion.div
          {...fadeInUp}
          className={`grid grid-cols-2 gap-6 rounded-3xl border p-6 sm:gap-8 sm:rounded-[3rem] sm:p-12 md:grid-cols-4 ${surface}`}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0 text-center">
              <h4 className="mb-2 break-words text-2xl font-black sm:text-4xl md:text-5xl">
                {stat.val}
              </h4>
              <p className="text-[9px] font-black uppercase tracking-widest opacity-50 sm:text-xs sm:tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20 sm:px-6 sm:py-32">
        <motion.div {...fadeInUp} className="mb-12 space-y-4 text-center sm:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500">
            What Makes Us Different
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Feedback, Reimagined.
          </h2>

          <p className={`mx-auto max-w-2xl text-base sm:text-lg ${mutedText}`}>
            A simple way to collect messages, explore feedback, and make
            conversations more approachable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl border p-7 transition-colors duration-300 sm:rounded-[2.5rem] sm:p-10 ${
                isDark
                  ? "bg-white/[0.02] hover:bg-white/[0.05]"
                  : "bg-white shadow-xl shadow-slate-200/40 hover:border-blue-200"
              } ${surface}`}
            >
              <div
                className={`mb-7 w-fit rounded-2xl p-4 sm:mb-8 sm:rounded-3xl sm:p-5 ${
                  isDark
                    ? "bg-blue-500/10 text-blue-400"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-200"
                }`}
              >
                {feature.icon}
              </div>

              <h3 className="mb-4 text-xl font-black tracking-tight sm:text-2xl">
                {feature.title}
              </h3>

              <p className={`text-sm leading-relaxed sm:text-base ${mutedText}`}>
                {feature.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        className={`py-20 sm:py-32 ${
          isDark ? "bg-blue-600/[0.03]" : "bg-slate-50"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-16 md:flex-row md:items-end">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-blue-500">
                Community
              </p>
              <h2 className="max-w-xl text-3xl font-black tracking-tight sm:text-5xl">
                A New Way to Share Feedback.
              </h2>
            </div>

            <div
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
                isDark
                  ? "bg-white/5 text-slate-300"
                  : "bg-white text-slate-700 shadow-sm"
              }`}
            >
              <Star className="h-5 w-5 text-yellow-400" />
              Community feedback
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:gap-8">
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.user}
                {...fadeInUp}
                className={`rounded-3xl border p-6 sm:rounded-[2.5rem] sm:p-8 ${surface}`}
              >
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className={`mb-8 text-base italic leading-relaxed ${mutedText}`}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className={`h-12 w-12 shrink-0 rounded-full bg-gradient-to-br ${testimonial.gradient}`}
                  />

                  <div>
                    <h5 className="font-black">{testimonial.user}</h5>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-32">
        <motion.div {...fadeInUp} className="mb-10 text-center sm:mb-16">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-blue-500">
            Got Questions?
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35 }}
                className={`overflow-hidden rounded-2xl border transition-colors sm:rounded-3xl ${
                  isDark
                    ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                    : "border-slate-200 bg-white hover:border-blue-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFAQ(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-7"
                >
                  <span className="text-base font-bold sm:text-lg">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 opacity-60 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className={`px-5 pb-6 text-sm leading-relaxed sm:px-7 sm:text-base ${mutedText}`}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative overflow-hidden rounded-3xl p-7 text-center sm:rounded-[3rem] sm:p-12 md:rounded-[4rem] md:p-24 ${
            isDark
              ? "bg-blue-600 text-white"
              : "bg-slate-900 text-white"
          }`}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-[100px] sm:h-96 sm:w-96" />

          <div className="relative z-10">
            <Sparkles className="mx-auto mb-6 h-10 w-10 text-blue-200" />

            <h2 className="mb-6 text-3xl font-black leading-tight sm:mb-10 sm:text-5xl md:text-7xl">
              Ready to Dive In?
              <br />
              It&apos;s Simple to Start.
            </h2>

            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/75 sm:mb-10 sm:text-lg">
              Create your profile, share your feedback link, and start
              collecting messages.
            </p>

            <Link href="/sign-up">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 max-w-full rounded-full px-6 text-sm font-black shadow-2xl transition-transform hover:scale-105 sm:h-16 sm:px-10 sm:text-lg"
              >
                Create Your Profile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <p className="mt-6 text-xs font-medium text-white/60 sm:text-sm">
              Your Voice. Your Space. Your Choice.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 px-4 py-8 text-center sm:px-6">
        <p className="text-xs text-slate-500 sm:text-sm">
          © {new Date().getFullYear()} MysticMsg. Built for better conversations.
        </p>
      </footer>
    </main>
  );
}
