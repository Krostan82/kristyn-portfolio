"use client";

import React, { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import {
  Briefcase,
  Layers,
  Award,
  Globe,
  Mail,
  Linkedin,
  MapPin,
  Calendar,
  CalendarDays,
  GraduationCap,
  Copy,
  Check,
  Menu,
  X,
  ArrowRight,
  TrendingUp,
  Database,
  Brain,
  Bot,
  Workflow,
  Sparkles,
  AlertTriangle,
  Wrench,
  CircleCheck,
  CheckCircle2,
  Search,
  RefreshCw,
  Handshake,
  Eye,
  ListFilter,
  Settings2,
  LayoutDashboard,
  ClipboardList,
  Building2,
  UsersRound,
  Package
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "pgl" | "seko" | "expeditors" | "other">("all");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formFeedback, setFormFeedback] = useState<string>("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "30-minute-conversation" });
        cal("ui", {
          theme: "light",
          styles: {
            branding: {
              brandColor: "#168C8C",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (e) {
        console.error("Cal.com embed error:", e);
      }
    })();
  }, []);

  const handleOpenCal = async () => {
    try {
      const cal = await getCalApi({ namespace: "30-minute-conversation" });
      cal("modal", {
        calLink: "kris-rostan-5pou9u/30-minute-conversation",
        config: {
          layout: "month_view",
          theme: "light",
        },
      });
    } catch (e) {
      window.open("https://cal.com/kris-rostan-5pou9u/30-minute-conversation", "_blank");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("krostan68@yahoo.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formStatus === "submitting") return;

    // Client-side validation
    if (!formData.name.trim()) {
      setFormStatus("error");
      setFormFeedback("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setFormStatus("error");
      setFormFeedback("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      setFormStatus("error");
      setFormFeedback("Please enter your message.");
      return;
    }

    setFormStatus("submitting");
    setFormFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus("success");
        setFormFeedback(data.message || "Thank you. Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
        setFormFeedback(data.error || "Failed to send your message. Please try again or email directly.");
      }
    } catch (err) {
      setFormStatus("error");
      setFormFeedback("An error occurred while sending your message. Please try again or email directly at krostan68@yahoo.com.");
    }
  };

  const experienceData = [
    {
      company: "PGL (Perimeter Global Logistics)",
      category: "pgl",
      role: "Director of Commercial Strategy and Operations",
      period: "Aug 2024 – Apr 2026",
      location: "Franklin Park, IL",
      bullets: [
        "Led commercial strategy and operations across sales, marketing, CRM, and client-facing technology for a global freight forwarder spanning air, ocean, and ground transportation.",
        "Developed and standardized SOPs across commercial functions, improving cross-functional consistency, knowledge transfer, and onboarding velocity.",
        "Owned CRM strategy and operations on Microsoft Dynamics 365, including lead pipeline management, segmentation, and large-scale prospect-to-CRM matching across 39,000+ records.",
        "Stepped into interim marketing strategy leadership during an organizational transition, managing vendor relationships, content operations, and digital tooling evaluation.",
        "Partnered with executive leadership on quarterly business reviews (QBRs), high-stakes client engagements, and sales support across the broader commercial organization."
      ]
    },
    {
      company: "SEKO Logistics",
      category: "seko",
      role: "Global Commercial Ops Director",
      period: "Jan 2023 – Jun 2024",
      location: "Global Scope",
      bullets: [
        "Supported Global and Regional Chief Commercial Officers in driving structure, KPIs, and accountability across local, country-level, and regional sales teams worldwide.",
        "Owned KPI tracking across pipeline, wins, sales performance, growth, marketing ROI, NPS, churn, and retention leveraging Salesforce and Power BI.",
        "Led commercial integration of acquisitions, ensuring acquired businesses were absorbed into the global commercial organization for maximum synergy realization.",
        "Drove revenue management and forecasting through real-time BI analysis, identifying revenue leakage, EBIT risks, and refining global growth forecasts.",
        "Managed the Corporate International quote team, partnering with product leadership on margin guidance and win/loss analysis using Magaya and WebCargo.",
        "Owned ROSE (Return on Sales Expense) globally, partnering with regional CCOs to maximize ROI productivity across the global sales organization."
      ]
    },
    {
      company: "SEKO Logistics",
      category: "seko",
      role: "Commercial Field Sales Director",
      period: "Nov 2016 – Dec 2022",
      location: "",
      bullets: [
        "Built and managed the Client Specialist Executives (Inside Sales) team, driving lead generation and ad-hoc quoting for domestic and international branch clients.",
        "Launched and managed SEKO's BDR program from scratch — including scripts, email templates, KPI framework, CRM adoption, and conversion tracking.",
        "Designed sales performance dashboards and reporting, increasing sales performance visibility by 100% across executives, strategic partners, and equity partners.",
        "Drove CRM adoption from low engagement to 60%+ usage by partnering with the vendor on tool redesign, navigation, and reporting improvements.",
        "Built and delivered SEKO's sales training program for new hires (Freight Forwarding 101, account profiling, pre-call planning, and software training).",
        "Created the Transition & Implementation program for onboarding new accounts and Strategic Partners into the SEKO network.",
        "Account-managed two Strategic Accounts, driving 20% revenue and gross profit growth through process mapping workshops.",
        "Honored with the SEKO Logistics Service Excellence Award (2018)."
      ]
    },
    {
      company: "Expeditors International",
      category: "expeditors",
      role: "Customer Solutions Manager, Midwest Region",
      period: "Jan 2015 – Oct 2016",
      location: "",
      bullets: [
        "Mapped client processes and positioned technology solutions to drive measurable efficiency and productivity gains across the Midwest region.",
        "Supported new logo acquisition and existing account growth while coaching sales and account managers on tech selling."
      ]
    },
    {
      company: "Expeditors International",
      category: "expeditors",
      role: "Global Business Process Improvement Manager",
      period: "Jan 2012 – Dec 2014",
      location: "",
      bullets: [
        "Designed an EDI billing process from request through deployment, reducing average project timeline by 50%.",
        "Core team member on a Global Billing Initiative targeting 100% invoicing quality; reached 88.8% globally by March 2015.",
        "Co-developed EDI training curriculum and delivered global training on Effective Problem Solving (root cause) and Process Mapping."
      ]
    },
    {
      company: "Expeditors International",
      category: "expeditors",
      role: "Midwest Regional Process Improvement Manager",
      period: "Jan 2006 – Dec 2011",
      location: "",
      bullets: [
        "Documented processes across business units to drive consistent execution at desk level.",
        "Facilitated workshops across product and service teams for root cause analysis and productivity improvements.",
        "Trained branch and regional employees on Lean and Six Sigma methodologies."
      ]
    },
    {
      company: "Expeditors International",
      category: "expeditors",
      role: "Account Management & Operational Roles",
      period: "Jan 1993 – Dec 2005",
      location: "",
      bullets: [
        "Global Account Manager (2004–2005): Grew global account revenue from $150K/month to $500K/month through value-added service expansion.",
        "Regional Cargo Insurance Manager (2002–2003): Led regional sales targets, claims management, underwriting, and Incoterms training.",
        "Export Initiative Program Lead (1999–2001): Designed strategy to expand underdeveloped air and ocean export lanes from the US.",
        "Accounts Receivable Lead (1993–1995): Managed customer collections, deposit security, and early accounting process improvements."
      ]
    },
    {
      company: "Hamilton Partners",
      category: "other",
      role: "General Manager",
      period: "Jan 1996 – Dec 1998",
      location: "",
      bullets: [
        "Owned full P&L responsibility for the fitness center, including staff, clients, sales performance, programming, and profitability."
      ]
    }
  ];

  const filteredExperience = activeFilter === "all"
    ? experienceData
    : experienceData.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#172033] font-sans selection:bg-[#168C8C]/20">
      {/* Navigation (72px Compact Executive Bar) */}
      <header className="fixed top-0 left-0 right-0 h-[72px] bg-[#F7F6F2]/95 backdrop-blur-md border-b border-[#E2E4E9] z-50">
        <div className="max-w-[1180px] mx-auto px-6 h-full flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 no-underline">
            <div className="w-[38px] h-[38px] rounded-[6px] overflow-hidden bg-[#FAF9F6] border border-[#E2E4E9] flex-shrink-0 relative">
              <img
                src="/headshot.jpg"
                alt="Kristyn Rostan"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[1rem] text-[#172033] leading-tight">Kristyn Rostan</span>
              <span className="text-[0.725rem] text-[#64748B] font-medium">Commercial Operations &amp; Transformation Leader</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            <a href="#about" className="text-[0.875rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">About</a>
            <a href="#focus" className="text-[0.875rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">Core Focus</a>
            <a href="#how-i-work" className="text-[0.875rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">How I Work</a>
            <a href="#initiatives" className="text-[0.875rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">Key Initiatives</a>
            <a href="#experience" className="text-[0.875rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">Experience</a>
            <a href="#tech-stack" className="text-[0.875rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">Tech Stack</a>
            <a href="#credentials" className="text-[0.875rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">Credentials</a>
            <a
              href="#contact"
              className="bg-[#168C8C] hover:bg-[#0E6666] text-white text-[0.8125rem] font-semibold px-4 py-1.5 rounded-[6px] transition-all hover:-translate-y-0.5"
            >
              Connect
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-[6px] border border-[#E2E4E9] text-[#172033]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E2E4E9] px-6 py-4 flex flex-col gap-2.5 shadow-md">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium text-sm">About</a>
            <a href="#focus" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium text-sm">Core Focus</a>
            <a href="#how-i-work" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium text-sm">How I Work</a>
            <a href="#initiatives" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium text-sm">Key Initiatives</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium text-sm">Experience</a>
            <a href="#tech-stack" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium text-sm">Tech Stack</a>
            <a href="#credentials" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium text-sm">Credentials</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#168C8C] font-semibold text-sm">Connect &rarr;</a>
          </div>
        )}
      </header>

      <main className="pt-[72px]">
        {/* Hero Section (Balanced Scale & Understated Headshot Frame) */}
        <section id="hero" className="py-16 lg:py-20">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.28fr_0.72fr] gap-10 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[0.775rem] font-bold uppercase tracking-[0.1em] text-[#168C8C] mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#168C8C]"></span> Executive Profile
                </div>
                
                <h1 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold leading-[1.24] tracking-[-0.025em] text-[#172033] mb-3.5 max-w-[660px]">
                  I turn complex commercial operations into systems people can actually use, scale, and improve.
                </h1>

                <p className="text-[0.975rem] font-semibold text-[#0E6666] mb-3.5 leading-normal">
                  Commercial Operations | Transformation | Process Design | Customer &amp; Sales Enablement | AI &amp; Automation
                </p>

                <p className="text-[1rem] text-[#3D485C] leading-relaxed mb-7 max-w-[580px]">
                  I diagnose broken or inefficient commercial environments, design practical systems and scalable processes, implement them hands-on, enable team-wide adoption, and transfer ownership for sustainable growth.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#initiatives"
                    className="inline-flex items-center gap-2 bg-[#168C8C] hover:bg-[#0E6666] text-white font-semibold text-[0.925rem] px-5 py-2.5 rounded-[6px] transition-all hover:-translate-y-0.5 shadow-sm"
                  >
                    View My Work <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF9F6] text-[#172033] border border-[#E2E4E9] font-semibold text-[0.925rem] px-5 py-2.5 rounded-[6px] transition-all hover:-translate-y-0.5"
                  >
                    Connect With Me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kristyn-r-0410915/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[42px] h-[42px] rounded-[6px] bg-white hover:bg-[#E9F4F4] text-[#475467] hover:text-[#168C8C] border border-[#E2E4E9] hover:border-[#168C8C] flex items-center justify-center transition-all"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Headshot Card (Understated Executive Frame) */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-[320px] bg-white rounded-xl border border-[#E7E9ED] p-3 shadow-sm hover:shadow-md transition-all">
                  <div className="w-full aspect-[4/4.75] rounded-lg overflow-hidden bg-[#FAF9F6] border border-[#E2E4E9] relative">
                    <img
                      src="/headshot.jpg"
                      alt="Kristyn Rostan"
                      className="w-full h-full object-cover object-[center_15%]"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between px-1">
                    <div className="flex flex-col">
                      <span className="font-bold text-[0.9rem] text-[#172033]">Kristyn Rostan</span>
                      <span className="text-[0.725rem] text-[#64748B]">Greater Chicago Area</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[0.725rem] font-semibold text-[#0E6666] bg-[#E9F4F4] border border-[#168C8C]/20 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#168C8C]"></span> Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary & Metrics */}
        <section id="about" className="py-16 bg-[#F0EFEB] border-y border-[#E2E4E9]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-10 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Executive Summary</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172033] mt-2 mb-2">Bridging High-Level Commercial Strategy &amp; Hands-On Execution</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-7 mb-10">
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm">
                <h3 className="text-lg font-bold text-[#172033] mb-3">The Transformation Philosophy</h3>
                <p className="text-[#3D485C] text-sm leading-relaxed mb-3">
                  I specialize in fixing commercial environments with missing logic: CRMs without structure, sales teams lacking enablement tools, marketing functions in transition, and post-acquisition organizations operating as disconnected silos.
                </p>
                <p className="text-[#3D485C] text-sm leading-relaxed mb-3">
                  My approach diagnoses what is actually wrong, designs system-wide fixes, and executes cross-functionally to make changes permanent.
                </p>
                <p className="text-[#3D485C] text-sm leading-relaxed">
                  I build working systems, enable teams through structured training, and transfer ownership for sustainable operational performance.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm flex flex-col justify-between">
                <h3 className="text-lg font-bold text-[#172033] mb-3">Proven Industry Track Record</h3>
                <div className="space-y-3">
                  <div className="pb-2.5 border-b border-[#E2E4E9]">
                    <span className="font-bold text-xs text-[#172033] block">Director of Commercial Strategy &amp; Ops at PGL:</span>
                    <span className="text-xs text-[#475467] leading-relaxed">Rebuilt Dynamics 365 environment, stood up sales enablement &amp; client success, managed interim marketing.</span>
                  </div>
                  <div className="pb-2.5 border-b border-[#E2E4E9]">
                    <span className="font-bold text-xs text-[#172033] block">Global Commercial Ops Director at SEKO Logistics:</span>
                    <span className="text-xs text-[#475467] leading-relaxed">Scaled BDR programs, led M&amp;A commercial integration, and owned global sales expense ROI.</span>
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#172033] block">17+ Years at Expeditors:</span>
                    <span className="text-xs text-[#475467] leading-relaxed">Rose from Accounts Receivable to Global Process Improvement Manager, driving multi-million dollar account expansions and EDI billing timelines down by 50%.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-2xl border border-[#E7E9ED] shadow-sm divide-y md:divide-y-0 md:divide-x divide-[#E2E4E9]">
              <div className="p-5 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#168C8C] mb-0.5">20+</div>
                <div className="text-xs font-semibold text-[#475467]">Years Leadership</div>
              </div>
              <div className="p-5 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#168C8C] mb-0.5">39K+</div>
                <div className="text-xs font-semibold text-[#475467]">CRM Prospect Records Restructured</div>
              </div>
              <div className="p-5 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#168C8C] mb-0.5">60%+</div>
                <div className="text-xs font-semibold text-[#475467]">CRM Engagement Uplift</div>
              </div>
              <div className="p-5 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#168C8C] mb-0.5">50%</div>
                <div className="text-xs font-semibold text-[#475467]">Cycle Time Reduction in EDI Billing</div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Best (4 Clean Pillars with Lucide Icons) */}
        <section id="focus" className="py-16">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-10 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Core Capabilities</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172033] mt-2 mb-2">What I Do Best</h2>
              <p className="text-[#475467] text-sm">Practical transformation focused on real operational execution, sustainable adoption, and measurable business outcomes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pillar 1: Search */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm hover:shadow-md hover:border-[#168C8C]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center">
                      <Search className="w-5 h-5" />
                    </div>
                    <span className="text-[#64748B] font-bold text-xs">01</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#172033] mb-2">Diagnose What Is Not Working</h3>
                  <p className="text-[#475467] text-xs md:text-sm leading-relaxed mb-5">
                    Deep-dive discovery to pinpoint underlying operational friction, data silos, CRM architecture breakdowns, and cross-functional bottlenecks.
                  </p>
                </div>
                <ul className="space-y-2 pt-3.5 border-t border-[#E2E4E9] text-xs text-[#3D485C]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] flex-shrink-0" /> Desk-level process mapping &amp; root cause problem solving</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] flex-shrink-0" /> CRM data model audit &amp; pipeline maturity assessment</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] flex-shrink-0" /> Identifying margin leakage &amp; quote turnaround bottlenecks</li>
                </ul>
              </div>

              {/* Pillar 2: Layers */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm hover:shadow-md hover:border-[#168C8C]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[#64748B] font-bold text-xs">02</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#172033] mb-2">Design Practical Systems &amp; Processes</h3>
                  <p className="text-[#475467] text-xs md:text-sm leading-relaxed mb-5">
                    Architecting intuitive, scalable standard operating procedures and technical workflows that eliminate complexity and fit seamlessly into daily work.
                  </p>
                </div>
                <ul className="space-y-2 pt-3.5 border-t border-[#E2E4E9] text-xs text-[#3D485C]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] flex-shrink-0" /> Standard Operating Procedure (SOP) design &amp; whiteboard mapping</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] flex-shrink-0" /> Margin guidance, quote desk workflows &amp; onboarding playbooks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] flex-shrink-0" /> Power BI reporting, KPI tracking (NPS, churn, EBIT risk)</li>
                </ul>
              </div>

              {/* Pillar 3: RefreshCw */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm hover:shadow-md hover:border-[#168C8C]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center">
                      <RefreshCw className="w-5 h-5" />
                    </div>
                    <span className="text-[#64748B] font-bold text-xs">03</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#172033] mb-2">Implement &amp; Enable Adoption</h3>
                  <p className="text-[#475467] text-xs md:text-sm leading-relaxed mb-5">
                    Leading hands-on execution and change management to ensure tools and workflows are enthusiastically embraced by sales and operations teams.
                  </p>
                </div>
                <ul className="space-y-2 pt-3.5 border-t border-[#E2E4E9] text-xs text-[#3D485C]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] flex-shrink-0" /> 5x Janek-certified sales training &amp; Freight Forwarding 101 curricula</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] flex-shrink-0" /> Inside sales &amp; BDR program execution with scripts &amp; cadences</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] flex-shrink-0" /> Dynamics 365 &amp; Salesforce administration and tool rollout</li>
                </ul>
              </div>

              {/* Pillar 4: Handshake */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm hover:shadow-md hover:border-[#168C8C]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center">
                      <Handshake className="w-5 h-5" />
                    </div>
                    <span className="text-[#64748B] font-bold text-xs">04</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#172033] mb-2">Transfer Ownership &amp; Improve</h3>
                  <p className="text-[#475467] text-xs md:text-sm leading-relaxed mb-5">
                    Establishing internal governance and champion networks so teams independently run, maintain, and continuously enhance their operations.
                  </p>
                </div>
                <ul className="space-y-2 pt-3.5 border-t border-[#E2E4E9] text-xs text-[#3D485C]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] flex-shrink-0" /> Training internal system owners &amp; regional process champions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] flex-shrink-0" /> Clear governance standards and transition playbooks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#168C8C] flex-shrink-0" /> Continuous improvement loops using Lean &amp; Six Sigma principles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work (Visual Process Pipeline with Lucide Icons) */}
        <section id="how-i-work" className="py-16 bg-[#EEF3F5] border-y border-[#E2E4E9]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-10 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Transformation Methodology</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172033] mt-2 mb-2">How I Work</h2>
              <p className="text-[#475467] text-sm">A disciplined, end-to-end framework designed to build sustainable capabilities without creating permanent administrative bottlenecks.</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E7E9ED] p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-6">
                {[
                  { step: "01", name: "Observe", desc: "Desk-level observation of daily realities", icon: Eye },
                  { step: "02", name: "Diagnose", desc: "Identify root cause issues and process friction", icon: Search },
                  { step: "03", name: "Prioritize", desc: "Focus on high-impact commercial & operational fixes", icon: ListFilter },
                  { step: "04", name: "Build", desc: "Design practical SOPs, tools, and system workflows", icon: Settings2 },
                  { step: "05", name: "Test", desc: "Validate workflows with desk-level teams", icon: CircleCheck },
                  { step: "06", name: "Enable", desc: "Deliver structured training & coaching", icon: GraduationCap },
                  { step: "07", name: "Transfer", desc: "Hand over ownership to empowered internal leads", icon: Handshake }
                ].map((item) => {
                  const StepIcon = item.icon;
                  return (
                    <div key={item.step} className="bg-[#FAF9F6] border border-[#E2E4E9] rounded-lg p-3 text-center hover:bg-[#E9F4F4] hover:border-[#168C8C] transition-all flex flex-col items-center">
                      <div className="w-8 h-8 rounded-md bg-white border border-[#E2E4E9] text-[#168C8C] flex items-center justify-center mb-1.5">
                        <StepIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[0.675rem] font-bold uppercase text-[#168C8C] block mb-0.5">Step {item.step}</span>
                      <span className="font-bold text-xs text-[#172033] block mb-0.5">{item.name}</span>
                      <span className="text-[0.675rem] text-[#64748B] leading-tight block">{item.desc}</span>
                    </div>
                  );
                })}
              </div>

              <div className="bg-[#E9F4F4] border-l-4 border-[#168C8C] p-3.5 rounded-r-lg text-xs md:text-sm text-[#172033] leading-relaxed">
                <strong className="text-[#0E6666]">Sustainable Transformation:</strong> I build and improve systems so teams can independently operate and scale them, deliberately avoiding becoming the permanent administrator or help desk for what I create.
              </div>
            </div>
          </div>
        </section>

        {/* Selected Impact (Case Studies with Lucide Icons) */}
        <section id="initiatives" className="py-16">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-10 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Case Studies</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172033] mt-2 mb-2">Selected Impact &amp; Key Initiatives</h2>
              <p className="text-[#475467] text-sm">Real-world commercial transformation projects highlighting the challenge, tactical intervention, and business outcomes.</p>
            </div>

            <div className="space-y-5">
              {/* Case 1 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-5 border-b border-[#E2E4E9] gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[0.725rem] font-bold uppercase tracking-wider text-[#168C8C] block">Revenue Management &amp; Quoting</span>
                      <h3 className="text-base sm:text-lg font-bold text-[#172033]">Centralized Corporate International Quote Team &amp; Margin Guidance</h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#475467] bg-[#FAF9F6] border border-[#E2E4E9] px-2.5 py-0.5 rounded-full flex items-center gap-1.5 self-start sm:self-auto">
                    <Building2 className="w-3 h-3 text-[#168C8C]" /> SEKO Logistics
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs md:text-sm">
                  <div>
                    <span className="font-bold text-[#9A3412] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3 h-3" /> Problem
                    </span>
                    <p className="text-[#475467] leading-relaxed">Decentralized international quoting lacked standardized margin control, leading to inconsistent pricing, margin leakage, and limited visibility into win/loss performance.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#172033] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <Wrench className="w-3 h-3" /> What I Did
                    </span>
                    <p className="text-[#475467] leading-relaxed">Managed the Corporate International quote team, partnering with product leadership on margin guidance and win/loss analysis using Magaya and WebCargo.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#0E6666] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <CircleCheck className="w-3 h-3" /> Outcome
                    </span>
                    <p className="text-[#475467] leading-relaxed">Established structured quoting governance, protected gross margins, and provided real-time pricing intelligence to commercial leadership.</p>
                    <div className="mt-2 text-xs font-semibold text-[#0E6666] bg-[#E9F4F4] border border-[#168C8C]/20 p-2 rounded">
                      Standardized Margin Guidance &bull; Win/Loss Intelligence
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-5 border-b border-[#E2E4E9] gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center flex-shrink-0">
                      <LayoutDashboard className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[0.725rem] font-bold uppercase tracking-wider text-[#168C8C] block">CRM Strategy &amp; Administration</span>
                      <h3 className="text-base sm:text-lg font-bold text-[#172033]">Microsoft Dynamics 365 Architecture &amp; 39,000+ Record Matching</h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#475467] bg-[#FAF9F6] border border-[#E2E4E9] px-2.5 py-0.5 rounded-full flex items-center gap-1.5 self-start sm:self-auto">
                    <Building2 className="w-3 h-3 text-[#168C8C]" /> PGL (Perimeter Global Logistics)
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs md:text-sm">
                  <div>
                    <span className="font-bold text-[#9A3412] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3 h-3" /> Problem
                    </span>
                    <p className="text-[#475467] leading-relaxed">Over 39,000 unorganized prospect records in Microsoft Dynamics 365 caused data duplication, unclear lead routing, and low commercial visibility across sales pipelines.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#172033] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <Wrench className="w-3 h-3" /> What I Did
                    </span>
                    <p className="text-[#475467] leading-relaxed">Owned CRM strategy and operations on Microsoft Dynamics 365, including lead pipeline management, segmentation, and large-scale prospect-to-CRM matching across 39,000+ records.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#0E6666] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <CircleCheck className="w-3 h-3" /> Outcome
                    </span>
                    <p className="text-[#475467] leading-relaxed">Restructured the CRM environment into a reliable foundation for sales targeting, lead segmentation, and commercial executive reporting.</p>
                    <div className="mt-2 text-xs font-semibold text-[#0E6666] bg-[#E9F4F4] border border-[#168C8C]/20 p-2 rounded">
                      39,000+ Records Cleaned &bull; Restructured Pipeline
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 3 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-5 border-b border-[#E2E4E9] gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center flex-shrink-0">
                      <ClipboardList className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[0.725rem] font-bold uppercase tracking-wider text-[#168C8C] block">M&amp;A Integration &amp; Client Success</span>
                      <h3 className="text-base sm:text-lg font-bold text-[#172033]">Transition &amp; Implementation Program for Strategic Accounts</h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#475467] bg-[#FAF9F6] border border-[#E2E4E9] px-2.5 py-0.5 rounded-full flex items-center gap-1.5 self-start sm:self-auto">
                    <Building2 className="w-3 h-3 text-[#168C8C]" /> SEKO Logistics
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs md:text-sm">
                  <div>
                    <span className="font-bold text-[#9A3412] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3 h-3" /> Problem
                    </span>
                    <p className="text-[#475467] leading-relaxed">Acquired logistics companies and major enterprise client wins needed a formalized framework to prevent churn and integrate smoothly into network operations.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#172033] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <Wrench className="w-3 h-3" /> What I Did
                    </span>
                    <p className="text-[#475467] leading-relaxed">Led commercial integration of acquisitions to maximize synergy realization, and created the Transition &amp; Implementation program for onboarding new accounts and Strategic Partners into the SEKO network.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#0E6666] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <CircleCheck className="w-3 h-3" /> Outcome
                    </span>
                    <p className="text-[#475467] leading-relaxed">Ensured acquired entities were rapidly absorbed into the commercial organization and accelerated successful account go-lives across the network.</p>
                    <div className="mt-2 text-xs font-semibold text-[#0E6666] bg-[#E9F4F4] border border-[#168C8C]/20 p-2 rounded">
                      Commercial M&amp;A Integration &bull; Standardized Onboarding
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 4 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-5 border-b border-[#E2E4E9] gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[0.725rem] font-bold uppercase tracking-wider text-[#168C8C] block">Sales Enablement &amp; Team Building</span>
                      <h3 className="text-base sm:text-lg font-bold text-[#172033]">BDR Program Launch &amp; 60%+ CRM Adoption Transformation</h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#475467] bg-[#FAF9F6] border border-[#E2E4E9] px-2.5 py-0.5 rounded-full flex items-center gap-1.5 self-start sm:self-auto">
                    <Building2 className="w-3 h-3 text-[#168C8C]" /> SEKO Logistics
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs md:text-sm">
                  <div>
                    <span className="font-bold text-[#9A3412] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3 h-3" /> Problem
                    </span>
                    <p className="text-[#475467] leading-relaxed">Lack of structured inside sales lead generation and historically low CRM utilization across regional and branch sales teams.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#172033] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <Wrench className="w-3 h-3" /> What I Did
                    </span>
                    <p className="text-[#475467] leading-relaxed">Launched and managed SEKO's BDR program from scratch (scripts, cadences, KPIs); partnered with vendor on tool redesign to drive adoption; delivered new-hire sales training (Freight Forwarding 101).</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#0E6666] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <CircleCheck className="w-3 h-3" /> Outcome
                    </span>
                    <p className="text-[#475467] leading-relaxed">Increased sales performance visibility by 100%, grew CRM adoption from low engagement to 60%+ usage, and earned the 2018 SEKO Logistics Service Excellence Award.</p>
                    <div className="mt-2 text-xs font-semibold text-[#0E6666] bg-[#E9F4F4] border border-[#168C8C]/20 p-2 rounded">
                      60%+ CRM Adoption &bull; Service Excellence Award Winner (2018)
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 5 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-5 border-b border-[#E2E4E9] gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[0.725rem] font-bold uppercase tracking-wider text-[#168C8C] block">Global Business Process Improvement</span>
                      <h3 className="text-base sm:text-lg font-bold text-[#172033]">Global EDI Billing Process Design &amp; 50% Cycle Time Reduction</h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#475467] bg-[#FAF9F6] border border-[#E2E4E9] px-2.5 py-0.5 rounded-full flex items-center gap-1.5 self-start sm:self-auto">
                    <Building2 className="w-3 h-3 text-[#168C8C]" /> Expeditors International
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs md:text-sm">
                  <div>
                    <span className="font-bold text-[#9A3412] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3 h-3" /> Problem
                    </span>
                    <p className="text-[#475467] leading-relaxed">Complex electronic billing requests took extended deployment timelines and required improved global invoicing accuracy.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#172033] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <Wrench className="w-3 h-3" /> What I Did
                    </span>
                    <p className="text-[#475467] leading-relaxed">Designed an EDI billing process from request through deployment, served on the Global Billing Initiative core team, and delivered global training on Effective Problem Solving and Process Mapping.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#0E6666] uppercase text-[0.7rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <CircleCheck className="w-3 h-3" /> Outcome
                    </span>
                    <p className="text-[#475467] leading-relaxed">Reduced average project timeline by 50% and supported the initiative reaching 88.8% invoicing quality globally by March 2015.</p>
                    <div className="mt-2 text-xs font-semibold text-[#0E6666] bg-[#E9F4F4] border border-[#168C8C]/20 p-2 rounded">
                      50% Timeline Reduction &bull; 88.8% Invoicing Quality Reached
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline Section (Lucide Icons: Building2, Calendar, MapPin, Globe) */}
        <section id="experience" className="py-16 bg-[#F0EFEB] border-y border-[#E2E4E9]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-10 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Career History</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172033] mt-2 mb-2">Leadership Experience</h2>
              <p className="text-[#475467] text-sm">A history of process transformation, commercial growth, and team building across global 3PLs and freight forwarders.</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-7">
              {[
                { id: "all", label: "All Roles" },
                { id: "pgl", label: "PGL" },
                { id: "seko", label: "SEKO Logistics" },
                { id: "expeditors", label: "Expeditors" },
                { id: "other", label: "Hamilton Partners" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeFilter === tab.id
                      ? "bg-[#172033] text-white"
                      : "bg-white text-[#475467] border border-[#E2E4E9] hover:bg-[#FAF9F6]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Experience Cards */}
            <div className="space-y-5">
              {filteredExperience.map((exp, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-3.5 border-b border-[#E2E4E9] gap-2">
                    <div>
                      <span className="font-bold text-base text-[#172033] flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#168C8C]" /> {exp.company}
                      </span>
                      <h3 className="text-xs sm:text-sm font-semibold text-[#168C8C]">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-semibold text-[#475467] bg-[#FAF9F6] border border-[#E2E4E9] px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-[#64748B]" /> {exp.period}
                      </span>
                      {exp.location && (
                        <span className="text-xs text-[#64748B] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#168C8C]" /> {exp.location}
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs md:text-sm text-[#3D485C]">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-[#168C8C] font-bold text-sm leading-none mt-0.5">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applied AI & Automation Section (Lucide Icons: Brain, Bot, Workflow) */}
        <section id="ai-automation" className="py-16">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-10 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Digital Evolution</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172033] mt-2 mb-2">Applied AI &amp; Automation in Operations</h2>
              <p className="text-[#475467] text-sm">Bridging deep operational fundamentals with modern automation to eliminate repetitive friction.</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm mb-5">
              <p className="text-[#172033] text-xs md:text-sm leading-relaxed">
                I am actively building skills in AI, automation, agents, and digital transformation—applying practical AI, workflow automations, and intelligent tools directly to real-world commercial operations to enhance CRM data accuracy, accelerate SOP generation, and eliminate manual bottlenecks while keeping operational strategy and human judgment at the core.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-5 shadow-sm">
                <div className="w-9 h-9 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center mb-3.5">
                  <Brain className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#172033] mb-1.5">Commercial Data Enrichment</h3>
                <p className="text-xs text-[#475467] leading-relaxed">
                  Automating lead scoring, firmographic enrichment, and prospect classification to keep CRM data clean and actionable for sales reps without manual entry fatigue.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-5 shadow-sm">
                <div className="w-9 h-9 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center mb-3.5">
                  <Bot className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#172033] mb-1.5">Intelligent SOP &amp; Playbook Extraction</h3>
                <p className="text-xs text-[#475467] leading-relaxed">
                  Leveraging AI tools to rapidly structure raw process recordings, interview notes, and workflows into crisp, standardized operational documentation.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-5 shadow-sm">
                <div className="w-9 h-9 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center mb-3.5">
                  <Workflow className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#172033] mb-1.5">Workflow &amp; Quote Routing Automation</h3>
                <p className="text-xs text-[#475467] leading-relaxed">
                  Building streamlined routing rules and triage systems that ensure inquiries, bids, and client escalations instantly reach the right desk with all needed context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section (Lucide Icons: Database, TrendingUp, Package, Workflow) */}
        <section id="tech-stack" className="py-16 bg-[#F0EFEB] border-y border-[#E2E4E9]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-10 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Tech Stack &amp; Software</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172033] mt-2 mb-2">Technology Stack &amp; Logistics Tools</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-5 shadow-sm">
                <h3 className="font-bold text-xs text-[#172033] mb-2.5 flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-[#168C8C]" /> Enterprise CRM
                </h3>
                <ul className="space-y-1.5 text-xs text-[#475467]">
                  <li className="flex items-center justify-between">Microsoft Dynamics 365 <span className="bg-[#FAF9F6] border border-[#E2E4E9] px-1 py-0.5 rounded text-[0.65rem] text-[#64748B]">Admin</span></li>
                  <li className="flex items-center justify-between">Salesforce CRM <span className="bg-[#FAF9F6] border border-[#E2E4E9] px-1 py-0.5 rounded text-[0.65rem] text-[#64748B]">Admin</span></li>
                  <li>Architecture &amp; Data Modeling</li>
                  <li>39,000+ Record Cleanup</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-5 shadow-sm">
                <h3 className="font-bold text-xs text-[#172033] mb-2.5 flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-[#168C8C]" /> BI &amp; Analytics
                </h3>
                <ul className="space-y-1.5 text-xs text-[#475467]">
                  <li className="flex items-center justify-between">Microsoft Power BI <span className="bg-[#FAF9F6] border border-[#E2E4E9] px-1 py-0.5 rounded text-[0.65rem] text-[#64748B]">Advanced</span></li>
                  <li>Real-Time Revenue Management</li>
                  <li>EBIT Risk &amp; ROSE Models</li>
                  <li>Executive C-Suite Reporting</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-5 shadow-sm">
                <h3 className="font-bold text-xs text-[#172033] mb-2.5 flex items-center gap-2">
                  <Package className="w-3.5 h-3.5 text-[#168C8C]" /> Logistics &amp; Quoting
                </h3>
                <ul className="space-y-1.5 text-xs text-[#475467]">
                  <li>CargoWise / Logixboard / NEO</li>
                  <li>Magaya &amp; WebCargo</li>
                  <li>International Quote Management</li>
                  <li>Digital Customer Portals</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-5 shadow-sm">
                <h3 className="font-bold text-xs text-[#172033] mb-2.5 flex items-center gap-2">
                  <Workflow className="w-3.5 h-3.5 text-[#168C8C]" /> Process &amp; Integration
                </h3>
                <ul className="space-y-1.5 text-xs text-[#475467]">
                  <li>EDI &amp; System Integration</li>
                  <li>Billing Workflow Design</li>
                  <li>Document Imaging Integration</li>
                  <li>Automated Data Transfer</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Education Section (Lucide Icons: Award, GraduationCap) */}
        <section id="credentials" className="py-16">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-10 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Certifications &amp; Learning</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172033] mt-2 mb-2">Education &amp; Professional Certifications</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5">
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-10 h-10 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#172033]">Janek Performance Group</h3>
                    <span className="text-xs text-[#64748B]">Certified Across 5 Core Sales Methodologies</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  {[
                    "Critical Selling (Train-the-Trainer)",
                    "Critical Negotiation",
                    "Critical Account Planning",
                    "Selling to the C-Suite",
                    "Strategic Storytelling"
                  ].map((cert, idx) => (
                    <span key={idx} className="text-xs font-semibold text-[#172033] bg-[#FAF9F6] border border-[#E2E4E9] px-2.5 py-1 rounded-[5px]">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="bg-white rounded-xl border border-[#E7E9ED] p-4 shadow-sm">
                  <h4 className="font-bold text-xs sm:text-sm text-[#172033] mb-0.5 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#168C8C]" /> Colorado State University
                  </h4>
                  <p className="text-xs text-[#475467] leading-relaxed">Higher education academic foundation supporting business process improvement, leadership, and operational management.</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E7E9ED] p-4 shadow-sm">
                  <h4 className="font-bold text-xs sm:text-sm text-[#172033] mb-0.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#168C8C]" /> Lean &amp; Six Sigma
                  </h4>
                  <p className="text-xs text-[#475467] leading-relaxed">Lean Enterprise–trained in root cause analysis, value stream mapping, and continuous improvement fundamentals.</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E7E9ED] p-4 shadow-sm">
                  <h4 className="font-bold text-xs sm:text-sm text-[#172033] mb-0.5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#168C8C]" /> Service Excellence Award
                  </h4>
                  <p className="text-xs text-[#475467] leading-relaxed">SEKO Logistics (2018) – Recognized for outstanding leadership, field sales support, and organizational contribution.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section (Lucide Icons: Mail, Linkedin, MapPin, Copy, Calendar) */}
        <section id="contact" className="py-16 bg-[#EEF3F5] border-t border-[#E2E4E9]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="bg-white rounded-2xl border border-[#E7E9ED] p-7 md:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Column: Direct Details & Option 2: Schedule a Conversation */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Let's Connect</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#172033] mt-2 mb-2">Ready to Transform Your Commercial Operations?</h2>
                    <p className="text-xs md:text-sm text-[#475467] leading-relaxed mb-5">
                      Exploring senior commercial operations and transformation roles in logistics, supply chain, and adjacent tech/consulting practices. Open to Chicago-based, remote, and selective relocation.
                    </p>

                    <div className="space-y-3.5 my-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center flex-shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[0.675rem] font-bold uppercase tracking-wider text-[#64748B]">Direct Email</div>
                          <div className="flex items-center gap-1.5">
                            <a href="mailto:krostan68@yahoo.com" className="font-semibold text-xs sm:text-sm text-[#172033] hover:text-[#168C8C]">
                              krostan68@yahoo.com
                            </a>
                            <button
                              onClick={handleCopyEmail}
                              className="p-1 rounded text-[#64748B] hover:text-[#168C8C] hover:bg-[#E9F4F4] transition-colors"
                              title="Copy Email"
                            >
                              {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#168C8C]" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center flex-shrink-0">
                          <Linkedin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[0.675rem] font-bold uppercase tracking-wider text-[#64748B]">LinkedIn Profile</div>
                          <a
                            href="https://www.linkedin.com/in/kristyn-r-0410915/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-xs sm:text-sm text-[#172033] hover:text-[#168C8C]"
                          >
                            linkedin.com/in/kristyn-r-0410915
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-[6px] bg-[#E9F4F4] border border-[#168C8C]/20 text-[#168C8C] flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[0.675rem] font-bold uppercase tracking-wider text-[#64748B]">Location / Work Preference</div>
                          <span className="font-medium text-xs text-[#475467]">Greater Chicago Area | Remote | Selective Relocation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Option 2: Schedule a Conversation */}
                  <div className="mt-6 pt-5 border-t border-[#E2E4E9]">
                    <div className="bg-[#FAF9F6] rounded-xl border border-[#E2E4E9] p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#168C8C] mb-1">
                        <CalendarDays className="w-4 h-4 text-[#168C8C]" />
                        <span>Option 2 &bull; Prefer to talk?</span>
                      </div>
                      <h3 className="text-sm font-bold text-[#172033] mb-1">Schedule a Conversation</h3>
                      <p className="text-xs text-[#475467] leading-relaxed mb-3.5">
                        Schedule a brief conversation at a time that works for you.
                      </p>
                      <button
                        type="button"
                        data-cal-namespace="30-minute-conversation"
                        data-cal-link="kris-rostan-5pou9u/30-minute-conversation"
                        data-cal-config='{"layout":"month_view","theme":"light"}'
                        onClick={handleOpenCal}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#168C8C] hover:bg-[#0E6666] text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-[6px] transition-all hover:-translate-y-0.5 shadow-sm"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Schedule a Conversation</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column: Option 1: Send a Message */}
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#E2E4E9]">
                    <div>
                      <span className="text-[0.675rem] font-bold uppercase tracking-wider text-[#168C8C]">Option 1</span>
                      <h3 className="text-sm sm:text-base font-bold text-[#172033]">Send a Message</h3>
                    </div>
                    <span className="text-[0.675rem] text-[#64748B]">All fields required</span>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-3.5" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-[#172033] mb-1">
                        Your Name <span className="text-[#0E6666]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Jane Doe"
                        disabled={formStatus === "submitting"}
                        className="w-full px-3 py-2 rounded-[6px] border border-[#E2E4E9] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#168C8C] text-xs sm:text-sm text-[#172033] disabled:opacity-60"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#172033] mb-1">
                        Your Email <span className="text-[#0E6666]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="jane@company.com"
                        disabled={formStatus === "submitting"}
                        className="w-full px-3 py-2 rounded-[6px] border border-[#E2E4E9] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#168C8C] text-xs sm:text-sm text-[#172033] disabled:opacity-60"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-[#172033] mb-1">
                        Message <span className="text-[#0E6666]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="Hi Kristyn, I would love to connect regarding an opportunity..."
                        disabled={formStatus === "submitting"}
                        className="w-full px-3 py-2 rounded-[6px] border border-[#E2E4E9] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#168C8C] text-xs sm:text-sm text-[#172033] disabled:opacity-60"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full bg-[#168C8C] hover:bg-[#0E6666] text-white font-semibold text-xs sm:text-sm py-3 rounded-[6px] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 shadow-sm"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {formStatus === "success" && (
                      <div className="bg-[#E9F4F4] border border-[#168C8C]/30 text-[#0E6666] text-xs p-3 rounded-[6px] flex items-center gap-2">
                        <CircleCheck className="w-4 h-4 flex-shrink-0" />
                        <span className="font-medium">{formFeedback || "Thank you. Your message has been sent."}</span>
                      </div>
                    )}

                    {formStatus === "error" && (
                      <div className="bg-[#FEF2F2] border border-[#EF4444]/30 text-[#B91C1C] text-xs p-3 rounded-[6px] flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        <span className="font-medium">{formFeedback}</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-[#F7F6F2] border-t border-[#E2E4E9]">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-2.5">
          <div className="flex items-center gap-2 font-bold text-[#172033]">
            <div className="w-6 h-6 rounded-[4px] bg-[#168C8C] text-white flex items-center justify-center text-xs">KR</div>
            <span>Kristyn Rostan</span>
          </div>
          <div>&copy; 2026 Kristyn Rostan. All rights reserved.</div>
          <div><a href="#hero" className="text-[#168C8C] hover:underline flex items-center gap-1">Back to Top &uarr;</a></div>
        </div>
      </footer>
    </div>
  );
}
