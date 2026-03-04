import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle, ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { useModal } from "@/context/ModalContext";

const industriesData = [
  {
    id: "local-service-contractors",
    title: "Local Service Contractors",
    sub: "HVAC, Roofing, Plumbing, Solar",
    image: "/industry-1.png",
    description:
      "Your phone rings at 2 PM — you're on a roof. By the time you call back, they've already hired someone else. MinAI makes sure that never happens again.",
    features: [
      "AI answers calls & texts instantly so you never lose a lead on the job site",
      "Automated follow-up sequences that nurture leads until they book",
      "Missed Call Text-Back sends an instant reply while you're working",
      "Automated Google Review requests after every completed job",
      "One dashboard to manage all leads, bookings, and payments",
    ],
    stat: { value: "3x", label: "More booked jobs within 60 days" },
  },
  {
    id: "real-estate-developers",
    title: "Real Estate Developers",
    sub: "Condos, Subdivisions, Commercial",
    image: "/industry-2.png",
    description:
      "Selling out a new phase shouldn't take months of chasing cold leads. MinAI builds a system that pre-qualifies buyers and fills your pipeline automatically.",
    features: [
      "High-converting landing pages for each project phase",
      "AI chatbot that pre-qualifies buyers 24/7 and books showings",
      "Automated drip campaigns to nurture interested prospects",
      "Database reactivation to wake up past inquiries for new phases",
      "Real-time reporting on lead sources and conversion rates",
    ],
    stat: { value: "50%", label: "Faster sell-out on new phases" },
  },
  {
    id: "agencies-brokerages",
    title: "Agencies & Brokerages",
    sub: "Real Estate, Mortgage, Insurance",
    image: "/industry-3.png",
    description:
      "Your agents are busy closing deals, not following up on every inquiry. MinAI handles the grunt work so your team can focus on what they do best — selling.",
    features: [
      "Unified inbox for all channels — SMS, email, Facebook, Instagram",
      "Automated lead distribution and round-robin assignment",
      "AI-powered speed-to-lead — respond in seconds, not hours",
      "Reputation management with automated review collection",
      "Social media auto-posting to keep your brand visible",
    ],
    stat: { value: "40%", label: "Increase in agent productivity" },
  },
  {
    id: "personal-injury-law-firms",
    title: "Personal Injury Law Firms",
    sub: "MVA, Slip & Fall, Workers Comp",
    image: "/industry-4.png",
    description:
      "Every missed call is a potential case walking out the door. MinAI ensures every inquiry is captured, qualified, and followed up — even at 3 AM.",
    features: [
      "24/7 AI intake that captures case details and qualifies leads",
      "Instant text-back on missed calls with pre-screening questions",
      "Automated follow-up sequences for prospects who don't convert immediately",
      "HIPAA-aware communication workflows",
      "Detailed case source tracking and ROI reporting",
    ],
    stat: { value: "2x", label: "More qualified case intakes per month" },
  },
];

function IndustryAccordion({
  industry,
  isOpen,
  onToggle,
}: {
  industry: (typeof industriesData)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { openDemoModal } = useModal();

  return (
    <div
      id={industry.id}
      className={`rounded-3xl border transition-all duration-300 ${
        isOpen
          ? "border-blue-200 shadow-xl shadow-blue-600/5 bg-white"
          : "border-slate-100 bg-white hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 md:p-8 flex items-center gap-6 text-left"
      >
        <div className="h-20 w-20 shrink-0 flex items-center justify-center">
          <img
            src={industry.image}
            alt={industry.title}
            className="max-h-20 w-auto object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            {industry.title}
          </h3>
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mt-1">
            {industry.sub}
          </p>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-slate-400 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 pt-0">
              <div className="border-t border-slate-100 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {industry.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-slate-900 font-medium"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openDemoModal();
                      }}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 flex items-center gap-2 group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center p-8 rounded-2xl bg-blue-50 border border-blue-100 w-full">
                      <div className="text-5xl font-extrabold text-blue-700 mb-2">
                        {industry.stat.value}
                      </div>
                      <div className="text-sm font-bold text-slate-600">
                        {industry.stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Industries() {
  const { openDemoModal } = useModal();
  const [openId, setOpenId] = useState<string | null>(null);

  // Auto-open section from URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && industriesData.some((ind) => ind.id === hash)) {
      setOpenId(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <div className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <AnimatedReveal>
          <h1 className="text-4xl md:text-7xl font-display font-extrabold mb-4 text-slate-900 leading-tight">
            Industries <span className="text-blue-700">We Serve.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            We build high-performance growth systems tailored to your industry.
            Click on your industry to see how MinAI works for you.
          </p>
        </AnimatedReveal>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="space-y-4">
          {industriesData.map((industry) => (
            <AnimatedReveal key={industry.id} delay={0.05}>
              <IndustryAccordion
                industry={industry}
                isOpen={openId === industry.id}
                onToggle={() =>
                  setOpenId(openId === industry.id ? null : industry.id)
                }
              />
            </AnimatedReveal>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Don't see your industry?
            </h2>
            <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">
              Our system works for any business that needs leads, follow-ups, and
              a reputation that sells. Book a demo and we'll show you exactly how
              it applies to your business.
            </p>
            <button
              onClick={openDemoModal}
              className="px-10 py-4 rounded-2xl font-bold bg-blue-700 text-white hover:scale-105 transition-transform shadow-xl shadow-blue-600/20"
            >
              Book a Demo
            </button>
          </AnimatedReveal>
        </div>
      </div>
    </div>
  );
}
