import React from "react";
import { useRoute, Link } from "wouter";
import { CheckCircle, ArrowRight, ArrowLeft, Zap, Shield, BarChart, Clock } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { useModal } from "@/context/ModalContext";

const industriesData = [
  {
    slug: "local-service-contractors",
    title: "Local Service Contractors",
    sub: "HVAC, Roofing, Plumbing, Solar",
    image: "/industry-1.png",
    headline: "Stop Losing Jobs While You're On The Job.",
    description:
      "Your phone rings at 2 PM — you're on a roof. By the time you call back, they've already hired someone else. MinAI makes sure that never happens again.",
    painPoints: [
      "Missing calls while on job sites",
      "Losing leads to competitors who respond faster",
      "Juggling 5+ software tools that don't talk to each other",
      "No time to chase reviews or follow up with old customers",
    ],
    features: [
      {
        title: "AI Call & Text Response",
        description: "Never miss a lead again. Our AI answers calls and texts instantly 24/7, qualifying prospects while you're on the job site.",
      },
      {
        title: "Automated Follow-Up",
        description: "Automated SMS & email sequences nurture every lead until they book — no manual chasing required.",
      },
      {
        title: "Missed Call Text-Back",
        description: "Every missed call gets an instant text reply within seconds, keeping the conversation alive.",
      },
      {
        title: "Review Automation",
        description: "Automatically request Google reviews after every completed job. Build a 5-star reputation on autopilot.",
      },
    ],
    stats: [
      { value: "3x", label: "More booked jobs within 60 days" },
      { value: "< 5s", label: "Average lead response time" },
      { value: "85%", label: "Fewer missed opportunities" },
    ],
    testimonial: {
      quote: "Revenue up 30% in 30 days. My phone actually rings now and I never miss a lead.",
      author: "Mike R.",
      role: "Roofing Contractor",
    },
  },
  {
    slug: "real-estate-developers",
    title: "Real Estate Developers",
    sub: "Condos, Subdivisions, Commercial",
    image: "/industry-2.png",
    headline: "Sell Out Every Phase. Faster.",
    description:
      "Selling out a new phase shouldn't take months of chasing cold leads. MinAI builds a system that pre-qualifies buyers and fills your pipeline automatically.",
    painPoints: [
      "Slow sell-through on new project phases",
      "Leads going cold before your sales team can follow up",
      "No visibility into which marketing channels actually convert",
      "Past buyer interest data sitting unused in spreadsheets",
    ],
    features: [
      {
        title: "High-Converting Landing Pages",
        description: "Purpose-built landing pages for each project phase, designed to capture and convert buyer interest.",
      },
      {
        title: "AI Pre-Qualification Bot",
        description: "24/7 chatbot that pre-qualifies buyers, answers common questions, and books showings automatically.",
      },
      {
        title: "Automated Drip Campaigns",
        description: "Nurture interested prospects with targeted email & SMS sequences tailored to each project phase.",
      },
      {
        title: "Database Reactivation",
        description: "Wake up past inquiries when you launch new phases. Turn old leads into new buyers.",
      },
    ],
    stats: [
      { value: "50%", label: "Faster sell-out on new phases" },
      { value: "2x", label: "More qualified showings booked" },
      { value: "35%", label: "Reduction in marketing spend waste" },
    ],
    testimonial: {
      quote: "Sold out Phase 2 in half the time. The AI pre-qualification alone saved us hundreds of hours.",
      author: "Sarah L.",
      role: "Real Estate Developer",
    },
  },
  {
    slug: "agencies-brokerages",
    title: "Agencies & Brokerages",
    sub: "Real Estate, Mortgage, Insurance",
    image: "/industry-3.png",
    headline: "Your Agents Close. We Handle The Rest.",
    description:
      "Your agents are busy closing deals, not following up on every inquiry. MinAI handles the grunt work so your team can focus on what they do best — selling.",
    painPoints: [
      "Leads slipping through the cracks across multiple channels",
      "Agents spending more time on admin than selling",
      "Inconsistent follow-up across the team",
      "No centralized system for reputation management",
    ],
    features: [
      {
        title: "Unified Inbox",
        description: "SMS, email, Facebook, Instagram — all conversations in one place. No more switching between apps.",
      },
      {
        title: "Smart Lead Distribution",
        description: "Automated round-robin assignment ensures fair distribution and instant follow-up on every inquiry.",
      },
      {
        title: "Speed-to-Lead AI",
        description: "Respond to new leads in seconds, not hours. AI handles initial qualification so agents get warm handoffs.",
      },
      {
        title: "Reputation Management",
        description: "Automated review collection and social media posting to keep your brand visible and trusted.",
      },
    ],
    stats: [
      { value: "40%", label: "Increase in agent productivity" },
      { value: "10x", label: "Faster lead response time" },
      { value: "60%", label: "More reviews collected monthly" },
    ],
    testimonial: {
      quote: "Our agents spend zero time on follow-up now. They just close deals.",
      author: "David K.",
      role: "Brokerage Owner",
    },
  },
  {
    slug: "personal-injury-law-firms",
    title: "Personal Injury Law Firms",
    sub: "MVA, Slip & Fall, Workers Comp",
    image: "/industry-4.png",
    headline: "Every Missed Call Is A Case Walking Out The Door.",
    description:
      "Every missed call is a potential case walking out the door. MinAI ensures every inquiry is captured, qualified, and followed up — even at 3 AM.",
    painPoints: [
      "Missed calls after hours losing high-value cases",
      "Intake staff overwhelmed with unqualified leads",
      "Prospects shopping around because follow-up is too slow",
      "No clear ROI tracking on marketing spend",
    ],
    features: [
      {
        title: "24/7 AI Intake",
        description: "Captures case details and qualifies leads around the clock — even weekends and holidays.",
      },
      {
        title: "Instant Text-Back",
        description: "Missed calls get an instant text reply with pre-screening questions, keeping prospects engaged.",
      },
      {
        title: "Automated Follow-Up",
        description: "Persistent follow-up sequences for prospects who don't convert immediately. We don't let cases slip away.",
      },
      {
        title: "Case Source Tracking",
        description: "Detailed ROI reporting on every marketing channel. Know exactly where your best cases come from.",
      },
    ],
    stats: [
      { value: "2x", label: "More qualified case intakes per month" },
      { value: "24/7", label: "Lead capture & qualification" },
      { value: "90%", label: "Reduction in missed after-hours leads" },
    ],
    testimonial: {
      quote: "We went from missing 40% of after-hours calls to capturing every single one.",
      author: "Jennifer M.",
      role: "Managing Partner, PI Firm",
    },
  },
];

export { industriesData };

export default function IndustryDetail() {
  const [, params] = useRoute("/industries/:slug");
  const { openDemoModal } = useModal();

  const industry = industriesData.find((ind) => ind.slug === params?.slug);

  if (!industry) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-display font-bold mb-4 text-foreground">Industry Not Found</h1>
        <Link href="/industries" className="text-primary hover:underline font-bold">
          Back to Industries
        </Link>
      </div>
    );
  }

  const featureIcons = [Zap, Shield, Clock, BarChart];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedReveal>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
                {industry.sub}
              </p>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                {industry.headline}
              </h1>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                {industry.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openDemoModal}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/products"
                  className="px-8 py-4 bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  View The System
                </Link>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.2} direction="left">
              <div className="flex items-center justify-center">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="max-h-80 w-auto object-contain"
                />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {industry.stats.map((stat, i) => (
              <AnimatedReveal key={i} delay={i * 0.1}>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold font-display text-slate-900 mb-4">
                Sound Familiar?
              </h2>
              <p className="text-xl text-slate-600 font-medium">
                These problems cost you money every single day.
              </p>
            </div>
          </AnimatedReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {industry.painPoints.map((point, i) => (
              <AnimatedReveal key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-500 font-bold text-sm">✕</span>
                  </div>
                  <p className="text-slate-900 font-bold">{point}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold font-display text-slate-900 mb-4">
                Here's How MinAI Fixes It.
              </h2>
              <p className="text-xl text-slate-600 font-medium">
                A complete system built specifically for {industry.title.toLowerCase()}.
              </p>
            </div>
          </AnimatedReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industry.features.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <AnimatedReveal key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedReveal>
            <div className="flex justify-center gap-1 text-yellow-500 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-snug">
              "{industry.testimonial.quote}"
            </p>
            <div>
              <div className="font-bold text-slate-900 text-lg">{industry.testimonial.author}</div>
              <div className="text-slate-500 font-medium">{industry.testimonial.role}</div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#1a44ad] overflow-hidden relative">
        <div className="absolute inset-0 bg-blue-600/20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold font-display mb-6 text-white tracking-tight">
            Ready to grow your {industry.title.toLowerCase().replace(/\s*&\s*/, " & ")} business?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-medium">
            Book a 20-minute demo. We'll show you exactly how the system works for your industry.
          </p>
          <button
            onClick={openDemoModal}
            className="px-8 py-4 bg-white text-[#1a44ad] hover:bg-slate-50 rounded-xl font-bold text-lg transition-all shadow-xl shadow-black/10"
          >
            Book a Demo
          </button>
        </div>
      </section>

      {/* Back Link */}
      <div className="py-8 text-center bg-white border-t border-slate-100">
        <Link
          href="/industries"
          className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-blue-700 transition-colors group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to All Industries
        </Link>
      </div>
    </div>
  );
}
