
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Ghost,
  Target,
  Anchor,
  ZapOff,
  CheckCircle2,
  Fingerprint,
  Database,
} from "lucide-react";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const philosophyCards = [
    {
      title: "The Problem: The Filtered Self",
      content:
        "People often hesitate to share honest feedback. This gap can make communication less effective and prevent meaningful improvement.",
      icon: <ZapOff size={28} />,
    },
    {
      title: "The Solution: Pure Feedback",
      content:
        "Anonymous feedback can help people share their perspectives more comfortably and encourage constructive conversations.",
      icon: <CheckCircle2 size={28} />,
    },
    {
      title: "The Method: Privacy by Design",
      content:
        "Privacy should be considered throughout the product design process. Appropriate access controls and secure data handling help protect users.",
      icon: <Fingerprint size={28} />,
    },
  ];

  const comparisonRows = [
    ["Identity Privacy", "Profile-based", "Browser-level", "Designed for anonymity"],
    ["Data Tracking", "Platform-dependent", "Browser-dependent", "Privacy-focused"],
    ["Message Encryption", "Varies by platform", "Varies by platform", "Depends on implementation"],
    ["Ad Targeting", "May be present", "May be present", "Product-dependent"],
    ["Anonymity", "Account-dependent", "Limited", "Designed for anonymous feedback"],
  ];

  const technicalFeatures = [
    {
      title: "01. Secure Data Handling",
      description:
        "Protect sensitive information through appropriate access controls, secure storage, and careful handling of user data.",
    },
    {
      title: "02. Session Protection",
      description:
        "Use secure session management, appropriate token expiry, and server-side authorization to reduce account risks.",
    },
    {
      title: "03. Responsive Interface",
      description:
        "Build an adaptable interface that presents relevant features clearly across desktop, tablet, and mobile devices.",
    },
    {
      title: "04. Reliable Infrastructure",
      description:
        "Design the backend and database around reliable access, sensible permissions, and maintainable application architecture.",
    },
  ];

  const stats = [
    { value: "Privacy", label: "By Design" },
    { value: "Secure", label: "Data Handling" },
    { value: "Simple", label: "User Experience" },
    { value: "Always", label: "User Focused" },
  ];

  const faqs = [
    {
      q: "Can my employer find out who sent a message?",
      a: "Anonymity depends on how the application is built and deployed. Avoid sharing identifying details in messages, and check the platform's actual privacy policy.",
    },
    {
      q: "How do you handle abusive content?",
      a: "A responsible feedback platform can use reporting, moderation, rate limits, and appropriate safeguards to help prevent misuse.",
    },
    {
      q: "Is the platform open source?",
      a: "Check the project's repository and license to confirm which components are open source.",
    },
    {
      q: "How can a privacy-focused platform earn money?",
      a: "Possible models include optional premium features, subscriptions, and business plans without relying on selling personal information.",
    },
  ];

  return (
    <main
      ref={containerRef}
      className="min-h-screen overflow-x-clip bg-[#050505] font-sans text-slate-300 selection:bg-indigo-500/30"
    >
      {/* SECTION 1: HERO */}
      <section className="relative flex min-h-[90svh] flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:min-h-screen">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/15 via-transparent to-transparent opacity-80" />

        <motion.div
          style={{ y: y1 }}
          className="pointer-events-none absolute right-[8%] top-20 hidden opacity-20 lg:block"
        >
          <Ghost
            size={300}
            strokeWidth={0.5}
            className="text-indigo-500"
          />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1 }}
            className="mb-6 block text-xs font-mono uppercase text-indigo-400 sm:text-sm"
          >
            Encryption Meets Empathy
          </motion.span>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl font-black leading-[0.95] tracking-tighter text-white sm:text-8xl md:text-9xl lg:text-[12rem]"
          >
            PURE
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-600 to-purple-500 bg-clip-text text-transparent">
              VOICE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl text-base font-light leading-relaxed text-slate-400 sm:text-xl md:text-2xl"
          >
            We didn&apos;t just build a messaging app. We built a space for
            honest conversations, anonymous feedback, and meaningful growth.
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
        >
          <div className="h-12 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-transparent" />
        </motion.div>
      </section>

      {/* SECTION 2: PHILOSOPHY */}
      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-indigo-400">
            Our Philosophy
          </p>

          <h2 className="mb-8 text-4xl font-bold text-white sm:text-5xl">
            The Psychology
            <br />
            of the Unseen.
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-slate-400 sm:text-xl sm:leading-loose">
            When people worry about judgment, they may hold back. Thoughtfully
            designed anonymous feedback can create more room for honest
            perspectives and constructive conversations.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="rounded-lg bg-indigo-500/20 p-3">
                <Target className="text-indigo-400" />
              </div>
              <div>
                <h4 className="font-bold text-white">Focus on Content</h4>
                <p className="text-sm text-slate-400">
                  Understand ideas before judging identities.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="rounded-lg bg-purple-500/20 p-3">
                <Anchor className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-bold text-white">Safety by Design</h4>
                <p className="text-sm text-slate-400">
                  Encourage respectful and constructive feedback.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {philosophyCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 6 }}
              className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-black p-6 shadow-2xl sm:rounded-3xl sm:p-10"
            >
              <div className="mb-6 text-indigo-400">{card.icon}</div>
              <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
                {card.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
                {card.content}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SECTION 3: COMPARISON */}
      <section className="bg-indigo-600/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.3em] text-indigo-400">
            A Different Approach
          </p>

          <h2 className="mb-12 text-center text-3xl font-bold text-white sm:mb-16 sm:text-4xl">
            How We Compare.
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-800 bg-white/[0.03] text-xs uppercase tracking-wider text-slate-500">
                  <th className="p-4 sm:p-6">Feature</th>
                  <th className="p-4 sm:p-6">Standard Social</th>
                  <th className="p-4 sm:p-6">Incognito Mode</th>
                  <th className="p-4 text-indigo-400 sm:p-6">Our Approach</th>
                </tr>
              </thead>

              <tbody className="text-sm text-slate-300 sm:text-base">
                {comparisonRows.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-b border-slate-900 transition-colors hover:bg-white/5"
                  >
                    <td className="p-4 font-medium text-white sm:p-6">
                      {row[0]}
                    </td>
                    <td className="p-4 sm:p-6">{row[1]}</td>
                    <td className="p-4 sm:p-6">{row[2]}</td>
                    <td className="p-4 font-semibold text-indigo-400 sm:p-6">
                      {row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Comparisons are illustrative. Actual privacy and security depend
            on each product&apos;s implementation and policies.
          </p>
        </div>
      </section>

      {/* SECTION 4: TECHNICAL DEEP DIVE */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <motion.div
          style={{ y: y2 }}
          className="pointer-events-none absolute -right-20 top-0 opacity-[0.06]"
        >
          <Database size={400} className="sm:h-[600px] sm:w-[600px]" />
        </motion.div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-indigo-400">
              Under the Hood
            </p>

            <h2 className="mb-10 text-4xl font-black tracking-tight text-white sm:text-6xl">
              THE TECH
              <br />
              BEHIND THE MASK.
            </h2>

            <div className="grid gap-8 sm:grid-cols-2">
              {technicalFeatures.map((feature) => (
                <div key={feature.title} className="space-y-4">
                  <h4 className="text-lg font-bold text-indigo-400 sm:text-xl">
                    {feature.title}
                  </h4>
                  <p className="leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <div>
              <div className="text-4xl font-bold text-white sm:text-6xl">
                Privacy
              </div>
              <div className="mt-3 text-xs uppercase tracking-widest text-slate-400">
                Is a design priority
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-sm italic leading-relaxed text-slate-300">
                &quot;Security is not just a feature. It is a responsibility
                built into every part of the experience.&quot;
              </p>
              <p className="mt-4 font-bold text-white">
                — The Pure Voice Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: STATS */}
      <section className="border-y border-slate-900 bg-black py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="break-words text-3xl font-black text-white sm:text-5xl lg:text-6xl">
                {stat.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-32">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-indigo-400">
          Need to Know
        </p>

        <h2 className="mb-10 text-3xl font-bold text-white sm:mb-16 sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-base font-bold text-white transition-colors hover:bg-indigo-600/20 sm:p-6 sm:text-xl">
                <span>{faq.q}</span>
                <span className="shrink-0 text-2xl font-light transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="bg-slate-900 p-5 leading-relaxed text-slate-400 sm:p-8">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 text-center sm:py-32 md:py-40">
        <div className="pointer-events-none absolute inset-0 rounded-full bg-indigo-600/10 blur-[100px] sm:blur-[150px]" />

        <div className="relative z-10 px-4 sm:px-6">
          <h2 className="text-5xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl">
            SAY THE
            <br />
            <span className="text-indigo-500">UNSAYABLE.</span>
          </h2>

          <motion.a
            href="/sign-up"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex max-w-full items-center justify-center rounded-full bg-indigo-600 px-7 py-4 text-center text-sm font-black text-white shadow-[0_0_40px_rgba(79,70,229,0.3)] transition-colors hover:bg-indigo-500 sm:px-12 sm:py-6 sm:text-base"
          >
            CREATE YOUR SECRET KEY
          </motion.a>

          <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            Your Voice. Your Space. Your Choice.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
