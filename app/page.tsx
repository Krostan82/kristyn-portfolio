"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Sliders,
  Award,
  Globe,
  Mail,
  Linkedin,
  MapPin,
  ChevronRight,
  Layers,
  GraduationCap,
  Copy,
  Check,
  Menu,
  X,
  ExternalLink,
  Zap,
  TrendingUp,
  Cpu,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "pgl" | "seko" | "expeditors">("all");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("krostan68@yahoo.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    setFormSubmitted(true);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:krostan68@yahoo.com?subject=${subject}&body=${body}`;

    setTimeout(() => setFormSubmitted(false), 6000);
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
      location: "United States",
      bullets: [
        "Built and managed the Client Specialist Executives (Inside Sales) team, driving lead generation and ad-hoc quoting for domestic and international branch clients.",
        "Launched and managed SEKO's BDR (Business Development Representative) program from scratch — including scripts, email templates, KPI framework, CRM adoption, and conversion tracking.",
        "Designed sales performance dashboards and reporting, increasing sales performance visibility by 100% across executives, strategic partners, and equity partners.",
        "Drove CRM adoption from low engagement to 60%+ usage by partnering with the vendor on tool redesign, navigation, and reporting improvements.",
        "Built and delivered SEKO's sales training program for new hires covering Freight Forwarding 101, account profiling, pre-call planning, and software training.",
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
      location: "Midwest Region",
      bullets: [
        "Mapped client processes and positioned technology solutions to drive measurable efficiency and productivity gains across the Midwest region.",
        "Supported new logo acquisition and existing account growth while coaching sales and account managers on tech solution selling."
      ]
    },
    {
      company: "Expeditors International",
      category: "expeditors",
      role: "Global Business Process Improvement Manager",
      period: "Jan 2012 – Dec 2014",
      location: "Global Scope",
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
      location: "Midwest Region",
      bullets: [
        "Documented internal and external processes across multiple business units, driving consistent execution at desk level.",
        "Facilitated collaborative workshops across product and service teams to identify pain points, run root cause analysis, and implement productivity improvements.",
        "Trained branch and regional employees on Lean and Six Sigma methodologies."
      ]
    },
    {
      company: "Expeditors International",
      category: "expeditors",
      role: "Account Management & Early Leadership Roles",
      period: "Jan 1993 – Dec 2005",
      location: "Midwest & Global Scope",
      bullets: [
        "Global Account Manager (2004–2005): Owned designated global account relationship, expanding revenue from $150K/month to $500K/month.",
        "Regional Cargo Insurance Manager (2002–2003): Established regional sales targets, claims management, underwriting, and Incoterms training.",
        "Export Initiative Program Lead (1999–2001): Designed and executed strategy to grow underdeveloped air and ocean export lanes from the US.",
        "Accounts Receivable Lead (1993–1995): Drove weekly collections, managed credit application security, and led early accounting process improvements."
      ]
    },
    {
      company: "Hamilton Partners",
      category: "other",
      role: "General Manager",
      period: "Jan 1996 – Dec 1998",
      location: "Illinois",
      bullets: [
        "Owned full P&L responsibility for the fitness center, including staff, clients, sales performance, programming, and profitability."
      ]
    }
  ];

  const filteredExperience = experienceData.filter(
    (exp) => activeFilter === "all" || exp.category === activeFilter
  );

  const featuredProjects = [
    {
      title: "Microsoft Dynamics 365 Data Architecture & Cleanup",
      company: "PGL",
      tag: "CRM Architecture",
      description: "Rebuilt the Dynamics 365 environment from the ground up. Cleansed, segmented, and matched 39,000+ prospect records into structured sales pipelines."
    },
    {
      title: "SEKO BDR Program & Inside Sales Launch",
      company: "SEKO Logistics",
      tag: "Sales Enablement",
      description: "Designed and launched the Business Development Representative (BDR) program from scratch — establishing call scripts, KPI tracking, email templates, and driving CRM adoption to 60%+."
    },
    {
      title: "EDI Billing Cycle Time Reduction (50%)",
      company: "Expeditors",
      tag: "Process Transformation",
      description: "Architected a end-to-end EDI billing workflow from request through deployment, cutting average project delivery timeline by 50% across global accounts."
    },
    {
      title: "Global Invoicing Quality Initiative (88.8%)",
      company: "Expeditors",
      tag: "Quality Engineering",
      description: "Served as core team member on a global billing initiative targeting 100% invoicing accuracy, achieving an 88.8% benchmark globally."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 text-slate-950 font-bold flex items-center justify-center text-sm shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              KR
            </div>
            <div>
              <div className="font-semibold text-slate-100 text-base leading-tight group-hover:text-emerald-400 transition-colors">
                Kristyn Rostan
              </div>
              <div className="text-xs text-slate-400">Commercial Operations Leader</div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#competencies" className="hover:text-emerald-400 transition-colors">Core Focus</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Key Initiatives</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Tech Stack</a>
            <a href="#credentials" className="hover:text-emerald-400 transition-colors">Credentials</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 flex flex-col gap-4 text-slate-300">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">About</a>
            <a href="#competencies" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">Core Focus</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">Key Initiatives</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">Tech Stack</a>
            <a href="#credentials" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">Credentials</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-emerald-400 font-semibold">Contact</a>
          </div>
        )}
      </header>

      <main className="pt-24">
        {/* Intro / Hero Section */}
        <section id="hero" className="relative py-20 lg:py-28 overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Global Logistics &amp; Supply Chain Transformation Leader
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-100 tracking-tight leading-[1.15] max-w-5xl mb-6">
              I rebuild broken commercial environments &amp; turn complex operations into <span className="gradient-text">systems that scale</span>.
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
              20+ years driving commercial strategy, sales enablement, CRM optimization, and operational efficiency across global logistics leaders — including PGL, SEKO Logistics, and Expeditors.
            </p>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-3 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-sm text-slate-200">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <span>Dynamics 365 &amp; Salesforce Admin</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-sm text-slate-200">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Lean Enterprise Trained</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-sm text-slate-200">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>5x Janek Sales Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-sm text-slate-200">
                <Globe className="w-4 h-4 text-sky-400" />
                <span>3PL &amp; Freight Forwarding</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold text-sm hover:opacity-95 shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
              >
                Explore Experience
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/kristyn-r-0410915/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">About Kristyn</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 mt-2">
                Bridging High-Level Commercial Strategy &amp; Operational Execution
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="glass-card rounded-2xl p-8 border-l-4 border-l-emerald-500">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-4">The Transformation Philosophy</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-4">
                  I specialize in fixing commercial environments with missing logic: CRMs without structure, sales teams lacking enablement tools, marketing functions in transition, and post-acquisition organizations operating as disconnected silos.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  My approach diagnoses what is actually wrong, designs system-wide fixes, and executes cross-functionally to make changes permanent.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-100 mb-4">Proven Industry Track Record</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-6">
                  Built across three of the most respected names in global logistics and supply chain:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>PGL (Director of Commercial Strategy &amp; Ops):</strong> Rebuilt Dynamics 365 environment, stood up sales enablement &amp; client success, managed interim marketing.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>SEKO Logistics (Global Commercial Ops Director):</strong> Scaled BDR programs, led M&amp;A commercial integration, and owned global sales expense ROI.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>17+ Years at Expeditors:</strong> Rose from Accounts Receivable to Global Process Improvement Manager, driving account expansions from $150K to $500K/mo and cutting EDI billing timelines by 50%.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Metrics Banner */}
            <div className="glass-card rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
              <div className="pt-4 md:pt-0">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">20+</div>
                <div className="text-xs text-slate-400">Years Leadership</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">39K+</div>
                <div className="text-xs text-slate-400">CRM Prospect Records Restructured</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">60%+</div>
                <div className="text-xs text-slate-400">CRM Engagement Uplift</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">50%</div>
                <div className="text-xs text-slate-400">Cycle Time Cut in EDI Billing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Competencies / Capabilities */}
        <section id="competencies" className="py-20 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 mt-2">
                Areas of Strategic &amp; Operational Focus
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Commercial Ops Transformation</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Restructuring commercial strategy, integrating acquired businesses, and aligning sales, marketing, and client success for long-term growth.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">CRM Strategy &amp; Admin</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Admin-level mastery on Microsoft Dynamics 365 and Salesforce. Data model architecture, pipeline maturity tracking, and prospect matching.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Process Improvement &amp; SOPs</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Lean Enterprise and Six Sigma methodologies. Whiteboard mapping, root cause problem solving, and standard operating procedure design.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Sales Enablement &amp; Onboarding</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Building inside sales &amp; BDR teams from scratch. Designing Freight Forwarding 101 curricula, scripts, email templates, and training programs.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Client Success &amp; Accounts</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Executive QBR facilitation, strategic partner transition, claims management, and value-added account expansion ($150K to $500K/mo growth).
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Revenue Analytics &amp; Forecasting</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Power BI reporting, KPI tracking (NPS, churn, EBIT risk), margin guidance, and global sales expense ROI (ROSE) optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-20 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Career Journey</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 mt-2">
                Leadership Experience Timeline
              </h2>
            </div>

            {/* Experience Company Filters */}
            <div className="flex flex-wrap gap-2 mb-12">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === "all"
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                All Roles
              </button>
              <button
                onClick={() => setActiveFilter("pgl")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === "pgl"
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                PGL
              </button>
              <button
                onClick={() => setActiveFilter("seko")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === "seko"
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                SEKO Logistics
              </button>
              <button
                onClick={() => setActiveFilter("expeditors")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === "expeditors"
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                Expeditors
              </button>
            </div>

            {/* Timeline Items */}
            <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
              {filteredExperience.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-10 group">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors" />
                  
                  <div className="glass-card rounded-2xl p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                          {exp.company}
                        </span>
                        <h3 className="text-xl font-semibold text-slate-100 mt-1">{exp.role}</h3>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-slate-300 text-sm">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="text-emerald-400 font-bold">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects & Initiatives */}
        <section id="projects" className="py-20 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Featured Work</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 mt-2">
                Key Transformation Initiatives
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((proj, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                        {proj.company}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] text-slate-300 font-medium">
                        {proj.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">{proj.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Verified Linkedin History</span>
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack & Software */}
        <section id="skills" className="py-20 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Tech &amp; Systems</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 mt-2">
                Technology Stack &amp; Logistics Software
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6 border-l-2 border-l-emerald-400">
                <Cpu className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold text-slate-100 mb-1">Microsoft Dynamics 365</h3>
                <span className="text-xs text-emerald-400 font-semibold uppercase">Admin-Level Expertise</span>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  Architecture, custom data modeling, lead segmentation, and 39,000+ prospect record cleanup.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border-l-2 border-l-cyan-400">
                <Layers className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-slate-100 mb-1">Salesforce CRM</h3>
                <span className="text-xs text-cyan-400 font-semibold uppercase">Admin-Level Expertise</span>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  Sales pipeline maturity, KPI tracking, adoption strategy, and custom executive dashboard design.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border-l-2 border-l-sky-400">
                <BarChart3 className="w-8 h-8 text-sky-400 mb-4" />
                <h3 className="text-lg font-semibold text-slate-100 mb-1">Power BI &amp; Analytics</h3>
                <span className="text-xs text-sky-400 font-semibold uppercase">Advanced Fluency</span>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  Real-time revenue management, EBIT risk analysis, and executive C-Suite reporting.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <Globe className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold text-slate-100 mb-1">CargoWise / Logixboard / NEO</h3>
                <span className="text-xs text-slate-400 font-semibold uppercase">Operating Fluency</span>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  Full logistics technology stack mapping and digital customer portal integration.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <Briefcase className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-slate-100 mb-1">Magaya &amp; WebCargo</h3>
                <span className="text-xs text-slate-400 font-semibold uppercase">Operational Quoting</span>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  International quote management, margin guidance, and win/loss analytics.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <Zap className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold text-slate-100 mb-1">EDI &amp; System Integration</h3>
                <span className="text-xs text-slate-400 font-semibold uppercase">Process Architecture</span>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  EDI billing workflow design, document imaging integration, and automated data transfer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Education */}
        <section id="credentials" className="py-20 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Qualifications</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 mt-2">
                Education &amp; Professional Certifications
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card rounded-2xl p-6 md:col-span-2 border-l-4 border-l-emerald-400">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-emerald-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">Janek Performance Group</h3>
                    <div className="text-xs text-slate-400">Certified Across 5 Core Sales Methodologies</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                    Critical Selling (Train-the-Trainer)
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                    Critical Negotiation
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                    Critical Account Planning
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                    Selling to the C-Suite
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                    Strategic Storytelling
                  </span>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">Colorado State University</h3>
                    <div className="text-xs text-slate-400">Higher Education</div>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Academic foundation supporting business process improvement, leadership, and operational management.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sliders className="w-8 h-8 text-emerald-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">Lean &amp; Six Sigma</h3>
                    <div className="text-xs text-slate-400">Process Engineering</div>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Lean Enterprise–trained in root cause analysis, value stream mapping, and continuous improvement.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-sky-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">SEKO Logistics Service Excellence Award</h3>
                    <div className="text-xs text-slate-400">Recipient (2018)</div>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Recognized for outstanding field sales leadership, BDR program development, and operational contribution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <div className="max-w-3xl mb-12">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Get In Touch</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 mt-2">
                  Ready to Transform Your Commercial Operations?
                </h2>
                <p className="text-slate-400 text-base mt-4 leading-relaxed">
                  Exploring senior commercial operations and transformation roles in logistics, supply chain, and adjacent tech/consulting practices. Open to Chicago-based, remote, and selective relocation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Cards */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase">Direct Email</div>
                        <a href="mailto:krostan68@yahoo.com" className="text-slate-100 font-semibold text-sm hover:text-emerald-400">
                          krostan68@yahoo.com
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase">LinkedIn Profile</div>
                        <a
                          href="https://www.linkedin.com/in/kristyn-r-0410915/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-100 font-semibold text-sm hover:text-cyan-400 inline-flex items-center gap-1"
                        >
                          linkedin.com/in/kristyn-r-0410915
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase">Location &amp; Work Preference</div>
                      <div className="text-slate-100 font-medium text-sm">
                        Greater Chicago Area | Remote | Selective Relocation
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Simulation */}
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-400 mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-400 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Hi Kristyn, I would love to connect regarding an opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold text-sm hover:opacity-95 shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    Send Message
                  </button>

                  {formSubmitted && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Thank you! Your email client has been opened with your message.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold text-slate-300">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
              KR
            </div>
            <span>Kristyn Rostan</span>
          </div>
          <div>&copy; {new Date().getFullYear()} Kristyn Rostan. All rights reserved.</div>
          <a href="#hero" className="hover:text-emerald-400 transition-colors">Back to Top ↑</a>
        </div>
      </footer>
    </div>
  );
}
