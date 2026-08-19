"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Layers,
  Award,
  Globe,
  Mail,
  Linkedin,
  MapPin,
  ChevronRight,
  GraduationCap,
  Copy,
  Check,
  Menu,
  X,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Database,
  Brain,
  FileText,
  Workflow,
  Sparkles,
  AlertTriangle,
  Wrench,
  CheckCircle
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
    
    setTimeout(() => {
      window.location.href = `mailto:krostan68@yahoo.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  const experienceData = [
    {
      company: "PGL (Perimeter Global Logistics)",
      category: "pgl",
      role: "Director of Commercial Strategy and Operations",
      period: "Aug 2024 – Apr 2026",
      location: "Franklin Park, IL",
      bullets: [
        "Spearheaded commercial operations across sales, marketing, CRM systems, and customer-facing technology for a multi-modal global logistics provider.",
        "Standardized commercial SOPs across business units, significantly accelerating knowledge transfer, onboarding velocity, and cross-departmental alignment.",
        "Rebuilt the Microsoft Dynamics 365 environment, leading pipeline governance and matching 39,000+ prospect records to accounts.",
        "Stepped into interim marketing leadership during an executive transition, managing digital tooling audits, content workflows, and vendor performance.",
        "Facilitated high-stakes executive QBRs and designed custom sales support playbooks for enterprise client expansion."
      ]
    },
    {
      company: "SEKO Logistics",
      category: "seko",
      role: "Global Commercial Ops Director",
      period: "Jan 2023 – Jun 2024",
      location: "Global Scope",
      bullets: [
        "Partnered directly with Global and Regional Chief Commercial Officers to establish accountability, KPI structures, and performance cadence worldwide.",
        "Owned real-time sales reporting across pipeline health, win/loss ratios, marketing ROI, NPS, and customer retention utilizing Salesforce and Power BI.",
        "Led the commercial integration of global acquisitions, ensuring acquired sales teams and portfolios were rapidly folded into SEKO operating standards.",
        "Managed the Corporate International quoting team, establishing margin governance and pricing models in Magaya and WebCargo.",
        "Owned global Return on Sales Expense (ROSE) optimization, auditing regional sales investments to maximize commercial productivity."
      ]
    },
    {
      company: "SEKO Logistics",
      category: "seko",
      role: "Commercial Field Sales Director",
      period: "Nov 2016 – Dec 2022",
      location: "Chicago / National",
      bullets: [
        "Built and led the Client Specialist Executives (Inside Sales) team, generating qualified pipeline and quoting support for branches.",
        "Launched SEKO’s national BDR program from the ground up—authoring cadences, call scripts, CRM adoption metrics, and conversion tracking.",
        "Elevated CRM adoption from low engagement to 60%+ by partnering with software vendors to streamline interface usability and reporting.",
        "Designed and delivered new hire onboarding (Freight Forwarding 101, pre-call planning, and account profiling).",
        "Created the Transition & Implementation program for onboarding strategic accounts and enterprise partners.",
        "Directly managed two Strategic Accounts, driving 20% revenue and gross profit growth through collaborative process mapping workshops.",
        "Recipient of the SEKO Logistics Service Excellence Award (2018)."
      ]
    },
    {
      company: "Expeditors International",
      category: "expeditors",
      role: "Customer Solutions Manager, Midwest Region",
      period: "Jan 2015 – Oct 2016",
      location: "Midwest Region",
      bullets: [
        "Conducted in-depth customer supply chain process mapping to position integrated technology solutions, driving tangible client productivity.",
        "Partnered with sales directors on high-value new logo acquisition and coached account managers on value-based consultative selling."
      ]
    },
    {
      company: "Expeditors International",
      category: "expeditors",
      role: "Global Business Process Improvement Manager",
      period: "Jan 2012 – Dec 2014",
      location: "Global Headquarters Scope",
      bullets: [
        "Architected end-to-end EDI billing workflows from customer request through IT deployment, reducing average cycle times by 50%.",
        "Served as core leader on the Global Billing Initiative targeting 100% invoicing quality, elevating global accuracy to 88.8%.",
        "Authored curriculum and delivered global training on Effective Problem Solving (root cause analysis) and Lean Process Mapping."
      ]
    },
    {
      company: "Expeditors International",
      category: "expeditors",
      role: "Midwest Regional Process Improvement Manager",
      period: "Jan 2006 – Dec 2011",
      location: "Midwest Region",
      bullets: [
        "Standardized desktop-level operational procedures across Midwestern branch locations to ensure consistent, compliant service execution.",
        "Facilitated cross-functional workshops to eliminate waste, resolve chronic operational errors, and boost branch productivity."
      ]
    },
    {
      company: "Expeditors International",
      category: "expeditors",
      role: "Early Leadership & Account Management Roles",
      period: "Jan 1993 – Dec 2005",
      location: "Multiple Roles",
      bullets: [
        "Global Account Manager (2004–2005): Grew global account billing from $150K/mo to $500K/mo through value-added supply chain expansion.",
        "Regional Cargo Insurance Manager (2002–2003): Managed regional claims resolution, risk underwriting, and Incoterms compliance training.",
        "Export Initiative Lead (1999–2001): Developed commercial strategies to expand underdeveloped air and ocean trade lanes.",
        "Accounts Receivable Lead (1993–1995): Supervised cash collections, customer credit risk, and early billing automation."
      ]
    }
  ];

  const filteredExperience = activeFilter === "all"
    ? experienceData
    : experienceData.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#172033] font-sans selection:bg-[#168C8C]/20">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 h-[76px] bg-[#F7F6F2]/95 backdrop-blur-md border-b border-[#E2E4E9] z-50">
        <div className="max-w-[1180px] mx-auto px-6 h-full flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3.5 no-underline">
            <div className="w-[42px] h-[42px] rounded-[6px] overflow-hidden bg-[#168C8C] flex items-center justify-center border border-[#E2E4E9] flex-shrink-0">
              <img
                src="/headshot.jpg"
                alt="Kristyn Rostan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-white font-bold text-sm">KR</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[1.05rem] text-[#172033] leading-tight">Kristyn Rostan</span>
              <span className="text-[0.75rem] text-[#64748B] font-medium">Commercial Operations &amp; Transformation Leader</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            <a href="#about" className="text-[0.9rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">About</a>
            <a href="#focus" className="text-[0.9rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">Core Focus</a>
            <a href="#how-i-work" className="text-[0.9rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">How I Work</a>
            <a href="#initiatives" className="text-[0.9rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">Key Initiatives</a>
            <a href="#experience" className="text-[0.9rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">Experience</a>
            <a href="#tech-stack" className="text-[0.9rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">Tech Stack</a>
            <a href="#credentials" className="text-[0.9rem] font-medium text-[#475467] hover:text-[#172033] transition-colors">Credentials</a>
            <a
              href="#contact"
              className="bg-[#168C8C] hover:bg-[#0E6666] text-white text-[0.875rem] font-semibold px-4 py-2 rounded-[6px] transition-all hover:-translate-y-0.5"
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
          <div className="lg:hidden bg-white border-b border-[#E2E4E9] px-6 py-5 flex flex-col gap-3 shadow-lg">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium">About</a>
            <a href="#focus" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium">Core Focus</a>
            <a href="#how-i-work" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium">How I Work</a>
            <a href="#initiatives" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium">Key Initiatives</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium">Experience</a>
            <a href="#tech-stack" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium">Tech Stack</a>
            <a href="#credentials" onClick={() => setMobileMenuOpen(false)} className="text-[#475467] hover:text-[#172033] font-medium">Credentials</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#168C8C] font-semibold">Connect &rarr;</a>
          </div>
        )}
      </header>

      <main className="pt-[76px]">
        {/* Hero Section */}
        <section id="hero" className="py-20 lg:py-24">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-[#168C8C] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#168C8C]"></span> Executive Profile
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.18] tracking-[-0.03em] text-[#172033] mb-4">
                  I turn complex commercial operations into systems people can actually use, scale, and improve.
                </h1>

                <p className="text-[1.05rem] font-semibold text-[#0E6666] mb-4 leading-normal">
                  Commercial Operations | Transformation | Process Design | Customer &amp; Sales Enablement | AI &amp; Automation
                </p>

                <p className="text-[1.0625rem] text-[#3D485C] leading-relaxed mb-8 max-w-[620px]">
                  I diagnose broken or inefficient commercial environments, design practical systems and scalable processes, implement them hands-on, enable team-wide adoption, and transfer ownership for sustainable growth.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href="#initiatives"
                    className="inline-flex items-center gap-2 bg-[#168C8C] hover:bg-[#0E6666] text-white font-semibold text-[0.95rem] px-6 py-3 rounded-[6px] transition-all hover:-translate-y-0.5 shadow-sm"
                  >
                    View My Work <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF9F6] text-[#172033] border border-[#E2E4E9] font-semibold text-[0.95rem] px-6 py-3 rounded-[6px] transition-all hover:-translate-y-0.5"
                  >
                    Connect With Me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kristyn-r-0410915/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[46px] h-[46px] rounded-[6px] bg-white hover:bg-[#E9F4F4] text-[#475467] hover:text-[#168C8C] border border-[#E2E4E9] hover:border-[#168C8C] flex items-center justify-center transition-all"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Headshot Card */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-[360px] bg-white rounded-2xl border border-[#E7E9ED] p-4 shadow-sm hover:shadow-md transition-all">
                  <div className="w-full aspect-[4/4.7] rounded-xl overflow-hidden bg-[#E2E8F0] relative">
                    <img
                      src="/headshot.jpg"
                      alt="Kristyn Rostan"
                      className="w-full h-full object-cover object-[center_15%]"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="mt-3.5 flex items-center justify-between px-1">
                    <div className="flex flex-col">
                      <span className="font-bold text-[0.95rem] text-[#172033]">Kristyn Rostan</span>
                      <span className="text-[0.775rem] text-[#64748B]">Greater Chicago Area</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-[#0E6666] bg-[#E9F4F4] px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#168C8C]"></span> Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary & Metrics */}
        <section id="about" className="py-20 bg-[#F0EFEB] border-y border-[#E2E4E9]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-12 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Executive Summary</span>
              <h2 className="text-3xl font-bold text-[#172033] mt-2 mb-3">Bridging Strategic Vision &amp; Hands-On Operational Rigor</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 mb-12">
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#172033] mb-4">The Transformation Approach</h3>
                <p className="text-[#3D485C] leading-relaxed mb-4">
                  Throughout my career across global logistics and commercial organizations, I have specialized in turning chaotic, disconnected environments into structured, high-performing engines.
                </p>
                <p className="text-[#3D485C] leading-relaxed mb-4">
                  Whether addressing fragmented CRM data models, missing sales enablement tools, or disconnected post-acquisition business units, my focus is always on solving the root operational challenge and establishing clear, repeatable processes.
                </p>
                <p className="text-[#3D485C] leading-relaxed">
                  I don't deliver theoretical slide decks. I build working systems, coach teams through adoption, and hand over sustainable governance.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm flex flex-col justify-between">
                <h3 className="text-xl font-bold text-[#172033] mb-4">Proven Industry Track Record</h3>
                <div className="space-y-4">
                  <div className="pb-3 border-b border-[#E2E4E9]">
                    <span className="font-bold text-sm text-[#172033] block">PGL (Perimeter Global Logistics)</span>
                    <span className="text-xs text-[#475467] leading-relaxed">Director of Commercial Strategy &amp; Ops. Restructured Dynamics 365, matched 39K+ prospect records, and built commercial SOP frameworks.</span>
                  </div>
                  <div className="pb-3 border-b border-[#E2E4E9]">
                    <span className="font-bold text-sm text-[#172033] block">SEKO Logistics</span>
                    <span className="text-xs text-[#475467] leading-relaxed">Global Commercial Ops Director. Scaled BDR programs, led M&amp;A commercial integration, and elevated CRM adoption to 60%+.</span>
                  </div>
                  <div>
                    <span className="font-bold text-sm text-[#172033] block">Expeditors International</span>
                    <span className="text-xs text-[#475467] leading-relaxed">17+ Year Progression to Global Process Improvement Manager. Reduced EDI billing timelines by 50% and expanded key accounts to $500K/mo.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-2xl border border-[#E7E9ED] shadow-sm divide-y md:divide-y-0 md:divide-x divide-[#E2E4E9]">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-[#168C8C] mb-1">20+</div>
                <div className="text-xs font-semibold text-[#475467]">Years Leadership &amp; Transformation</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-[#168C8C] mb-1">39K+</div>
                <div className="text-xs font-semibold text-[#475467]">CRM Prospect Records Restructured</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-[#168C8C] mb-1">60%+</div>
                <div className="text-xs font-semibold text-[#475467]">CRM Adoption &amp; Usage Uplift</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-[#168C8C] mb-1">50%</div>
                <div className="text-xs font-semibold text-[#475467]">Cycle Time Reduction in Global Billing</div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Best (4 Clean Pillars) */}
        <section id="focus" className="py-20">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-12 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Core Capabilities</span>
              <h2 className="text-3xl font-bold text-[#172033] mt-2 mb-3">What I Do Best</h2>
              <p className="text-[#475467]">Practical transformation focused on real operational execution, sustainable adoption, and measurable business outcomes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pillar 1 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm hover:shadow-md hover:border-[#168C8C]/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[#168C8C] font-bold text-lg mb-3 block">01</span>
                  <h3 className="text-xl font-bold text-[#172033] mb-3">Diagnose What Is Not Working</h3>
                  <p className="text-[#475467] text-sm leading-relaxed mb-6">
                    Deep-dive discovery to pinpoint underlying operational friction, data silos, CRM architecture breakdowns, and cross-functional bottlenecks.
                  </p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-[#E2E4E9] text-xs text-[#3D485C]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#168C8C] flex-shrink-0" /> Desk-level process mapping &amp; root-cause problem solving</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#168C8C] flex-shrink-0" /> CRM data model audit &amp; pipeline hygiene assessment</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#168C8C] flex-shrink-0" /> Identifying hidden margin leakage &amp; quoting cycle inefficiencies</li>
                </ul>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm hover:shadow-md hover:border-[#168C8C]/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[#168C8C] font-bold text-lg mb-3 block">02</span>
                  <h3 className="text-xl font-bold text-[#172033] mb-3">Design Practical Systems &amp; Processes</h3>
                  <p className="text-[#475467] text-sm leading-relaxed mb-6">
                    Architecting intuitive, scalable operating procedures and technical workflows that eliminate complexity and fit seamlessly into daily work.
                  </p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-[#E2E4E9] text-xs text-[#3D485C]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#168C8C] flex-shrink-0" /> Standard Operating Procedure (SOP) design &amp; playbooks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#168C8C] flex-shrink-0" /> Pricing, quoting, and client implementation frameworks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#168C8C] flex-shrink-0" /> Clean data governance &amp; executive KPI dashboard modeling</li>
                </ul>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm hover:shadow-md hover:border-[#168C8C]/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[#168C8C] font-bold text-lg mb-3 block">03</span>
                  <h3 className="text-xl font-bold text-[#172033] mb-3">Implement &amp; Enable Adoption</h3>
                  <p className="text-[#475467] text-sm leading-relaxed mb-6">
                    Leading hands-on execution and change management to ensure tools and workflows are enthusiastically embraced by sales and operations teams.
                  </p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-[#E2E4E9] text-xs text-[#3D485C]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#168C8C] flex-shrink-0" /> 5x Janek-certified sales training &amp; onboarding curricula</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#168C8C] flex-shrink-0" /> Inside sales, BDR, and field commercial coaching</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#168C8C] flex-shrink-0" /> Hands-on CRM configuration, workflow testing, and rollout</li>
                </ul>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm hover:shadow-md hover:border-[#168C8C]/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[#168C8C] font-bold text-lg mb-3 block">04</span>
                  <h3 className="text-xl font-bold text-[#172033] mb-3">Transfer Ownership &amp; Improve</h3>
                  <p className="text-[#475467] text-sm leading-relaxed mb-6">
                    Establishing internal governance and champion networks so teams independently run, maintain, and continuously enhance their operations.
                  </p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-[#E2E4E9] text-xs text-[#3D485C]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#168C8C] flex-shrink-0" /> Training internal system owners &amp; process champions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#168C8C] flex-shrink-0" /> Clear governance rules and SLA documentation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#168C8C] flex-shrink-0" /> Continuous feedback loops for ongoing performance gains</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work (Visual Process Pipeline) */}
        <section id="how-i-work" className="py-20 bg-[#EEF3F5] border-y border-[#E2E4E9]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-12 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Transformation Methodology</span>
              <h2 className="text-3xl font-bold text-[#172033] mt-2 mb-3">How I Work</h2>
              <p className="text-[#475467]">A disciplined, end-to-end framework designed to build sustainable capabilities without creating permanent administrative bottlenecks.</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 md:p-10 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
                {[
                  { step: "01", name: "Observe", desc: "Desk-level observation of daily realities" },
                  { step: "02", name: "Diagnose", desc: "Uncover core root causes and data flaws" },
                  { step: "03", name: "Prioritize", desc: "Target high-ROI, low-friction fixes" },
                  { step: "04", name: "Build", desc: "Design practical tools, SOPs, and logic" },
                  { step: "05", name: "Test", desc: "Pilot with front-line teams & iterate" },
                  { step: "06", name: "Enable", desc: "Deliver structured training & coaching" },
                  { step: "07", name: "Transfer", desc: "Hand over governance to internal leads" }
                ].map((item) => (
                  <div key={item.step} className="bg-[#FAF9F6] border border-[#E2E4E9] rounded-xl p-4 text-center hover:bg-[#E9F4F4] hover:border-[#168C8C] transition-all">
                    <span className="text-[0.7rem] font-bold uppercase text-[#168C8C] block mb-1">Step {item.step}</span>
                    <span className="font-bold text-sm text-[#172033] block mb-1">{item.name}</span>
                    <span className="text-[0.725rem] text-[#64748B] leading-tight block">{item.desc}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#E9F4F4] border-l-4 border-[#168C8C] p-4 rounded-r-lg text-xs md:text-sm text-[#172033] leading-relaxed">
                <strong className="text-[#0E6666]">Principle of Sustainable Enablement:</strong> I believe in creating resilient operating systems that teams can independently run, scale, and optimize—deliberately avoiding permanent administrator dependencies or becoming an ongoing help desk.
              </div>
            </div>
          </div>
        </section>

        {/* Selected Impact (Case Studies) */}
        <section id="initiatives" className="py-20">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-12 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Case Studies</span>
              <h2 className="text-3xl font-bold text-[#172033] mt-2 mb-3">Selected Impact &amp; Key Initiatives</h2>
              <p className="text-[#475467]">Real-world commercial transformation projects highlighting the challenge, tactical intervention, and business outcomes.</p>
            </div>

            <div className="space-y-6">
              {/* Case 1 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#E2E4E9] gap-2">
                  <div>
                    <span className="text-[0.75rem] font-bold uppercase tracking-wider text-[#168C8C] block">Revenue Optimization &amp; Governance</span>
                    <h3 className="text-lg font-bold text-[#172033]">Centralized International Pricing &amp; Quoting Capability</h3>
                  </div>
                  <span className="text-xs font-semibold text-[#475467] bg-[#FAF9F6] border border-[#E2E4E9] px-3 py-1 rounded-full self-start sm:self-auto">
                    SEKO Logistics &amp; PGL
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm">
                  <div>
                    <span className="font-bold text-[#9A3412] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" /> Problem
                    </span>
                    <p className="text-[#475467] leading-relaxed">Ad-hoc quoting across decentralized branches caused significant margin erosion, slow turnaround times for bids, and zero visibility into global win/loss trends.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#172033] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5" /> What I Did
                    </span>
                    <p className="text-[#475467] leading-relaxed">Architected a centralized quote desk workflow in Magaya and WebCargo with standardized margin guidance thresholds, response SLAs, and automated tracking.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#0E6666] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" /> Outcome
                    </span>
                    <p className="text-[#475467] leading-relaxed">Eliminated margin leakage, reduced quote turnaround cycle time, and delivered actionable win/loss analytics directly to executive leadership.</p>
                    <div className="mt-2 text-xs font-semibold text-[#0E6666] bg-[#E9F4F4] border border-[#168C8C]/20 p-2 rounded">
                      Consistent Gross Margin Floor &bull; 100% Quote Visibility
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#E2E4E9] gap-2">
                  <div>
                    <span className="text-[0.75rem] font-bold uppercase tracking-wider text-[#168C8C] block">CRM Architecture &amp; Data Hygiene</span>
                    <h3 className="text-lg font-bold text-[#172033]">Commercial Data Restructuring &amp; 39K+ Prospect Match Engine</h3>
                  </div>
                  <span className="text-xs font-semibold text-[#475467] bg-[#FAF9F6] border border-[#E2E4E9] px-3 py-1 rounded-full self-start sm:self-auto">
                    Perimeter Global Logistics (PGL)
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm">
                  <div>
                    <span className="font-bold text-[#9A3412] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" /> Problem
                    </span>
                    <p className="text-[#475467] leading-relaxed">Over 39,000 unorganized prospect records in Microsoft Dynamics 365 led to severe duplicate accounts, lack of pipeline stage clarity, and low sales rep trust.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#172033] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5" /> What I Did
                    </span>
                    <p className="text-[#475467] leading-relaxed">Designed a multi-stage deduplication and account-matching hierarchy. Rebuilt opportunity stages, pipeline governance rules, and executive views.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#0E6666] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" /> Outcome
                    </span>
                    <p className="text-[#475467] leading-relaxed">Delivered a clean, trustworthy single source of truth for commercial leadership and increased active daily sales team CRM engagement.</p>
                    <div className="mt-2 text-xs font-semibold text-[#0E6666] bg-[#E9F4F4] border border-[#168C8C]/20 p-2 rounded">
                      39,000+ Cleaned Records &bull; 60%+ Adoption Surge
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 3 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#E2E4E9] gap-2">
                  <div>
                    <span className="text-[0.75rem] font-bold uppercase tracking-wider text-[#168C8C] block">Client Success &amp; M&amp;A Integration</span>
                    <h3 className="text-lg font-bold text-[#172033]">Client Implementation &amp; Strategic Partner Onboarding Framework</h3>
                  </div>
                  <span className="text-xs font-semibold text-[#475467] bg-[#FAF9F6] border border-[#E2E4E9] px-3 py-1 rounded-full self-start sm:self-auto">
                    SEKO Logistics
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm">
                  <div>
                    <span className="font-bold text-[#9A3412] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" /> Problem
                    </span>
                    <p className="text-[#475467] leading-relaxed">Newly acquired entities and major enterprise client wins suffered from disjointed handoffs between sales, operations, and IT, creating early friction.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#172033] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5" /> What I Did
                    </span>
                    <p className="text-[#475467] leading-relaxed">Created a structured Transition &amp; Implementation methodology with standardized milestone gates, QBR review templates, and cross-functional sign-offs.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#0E6666] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" /> Outcome
                    </span>
                    <p className="text-[#475467] leading-relaxed">Accelerated time-to-first-shipment, prevented early client churn, and enabled seamless commercial assimilation of acquired freight forwarding businesses.</p>
                    <div className="mt-2 text-xs font-semibold text-[#0E6666] bg-[#E9F4F4] border border-[#168C8C]/20 p-2 rounded">
                      Smooth M&amp;A Assimilation &bull; Accelerated First-Dollar Velocity
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 4 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#E2E4E9] gap-2">
                  <div>
                    <span className="text-[0.75rem] font-bold uppercase tracking-wider text-[#168C8C] block">Sales &amp; Operational Enablement</span>
                    <h3 className="text-lg font-bold text-[#172033]">Commercial Enablement Academy &amp; BDR Program Launch</h3>
                  </div>
                  <span className="text-xs font-semibold text-[#475467] bg-[#FAF9F6] border border-[#E2E4E9] px-3 py-1 rounded-full self-start sm:self-auto">
                    SEKO Logistics
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm">
                  <div>
                    <span className="font-bold text-[#9A3412] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" /> Problem
                    </span>
                    <p className="text-[#475467] leading-relaxed">New commercial hires faced steep ramp times due to the absence of formalized logistics sales training, structured prospecting playbooks, and standardized talk tracks.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#172033] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5" /> What I Did
                    </span>
                    <p className="text-[#475467] leading-relaxed">Built and delivered comprehensive Freight Forwarding 101 curricula, pre-call planning frameworks, and outbound BDR playbooks backed by 5x Janek sales certifications.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#0E6666] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" /> Outcome
                    </span>
                    <p className="text-[#475467] leading-relaxed">Cut sales rep ramp time in half, doubled outbound meeting creation, and earned the 2018 SEKO Logistics Service Excellence Award.</p>
                    <div className="mt-2 text-xs font-semibold text-[#0E6666] bg-[#E9F4F4] border border-[#168C8C]/20 p-2 rounded">
                      100% Increase in Pipeline Visibility &bull; Excellence Award Winner
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 5 */}
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#E2E4E9] gap-2">
                  <div>
                    <span className="text-[0.75rem] font-bold uppercase tracking-wider text-[#168C8C] block">Global Process Improvement</span>
                    <h3 className="text-lg font-bold text-[#172033]">Global EDI Billing &amp; Invoicing Cycle Time Reduction</h3>
                  </div>
                  <span className="text-xs font-semibold text-[#475467] bg-[#FAF9F6] border border-[#E2E4E9] px-3 py-1 rounded-full self-start sm:self-auto">
                    Expeditors International
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm">
                  <div>
                    <span className="font-bold text-[#9A3412] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" /> Problem
                    </span>
                    <p className="text-[#475467] leading-relaxed">Custom EDI billing integrations were plagued by protracted setup times, high error rates, and delayed cash collection cycles across regional branches worldwide.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#172033] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5" /> What I Did
                    </span>
                    <p className="text-[#475467] leading-relaxed">Mapped end-to-end billing requirements, established Lean root-cause error checkpoints, and designed an optimized EDI request-to-deployment workflow.</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#0E6666] uppercase text-[0.725rem] tracking-wider block mb-1 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" /> Outcome
                    </span>
                    <p className="text-[#475467] leading-relaxed">Reduced average project implementation timelines by 50% and helped achieve 88.8% global electronic invoicing quality.</p>
                    <div className="mt-2 text-xs font-semibold text-[#0E6666] bg-[#E9F4F4] border border-[#168C8C]/20 p-2 rounded">
                      50% Timeline Reduction &bull; 88.8% Global Invoicing Quality
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section id="experience" className="py-20 bg-[#F0EFEB] border-y border-[#E2E4E9]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-12 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Career History</span>
              <h2 className="text-3xl font-bold text-[#172033] mt-2 mb-3">Leadership Experience</h2>
              <p className="text-[#475467]">A sustained executive trajectory delivering process transformation, revenue governance, and cross-functional leadership.</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { id: "all", label: "All Roles" },
                { id: "pgl", label: "PGL" },
                { id: "seko", label: "SEKO Logistics" },
                { id: "expeditors", label: "Expeditors" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
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
            <div className="space-y-6">
              {filteredExperience.map((exp, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#E2E4E9] gap-2">
                    <div>
                      <span className="font-bold text-base text-[#172033]">{exp.company}</span>
                      <h3 className="text-sm font-semibold text-[#168C8C]">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-[#475467] bg-[#FAF9F6] border border-[#E2E4E9] px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <span className="text-xs text-[#64748B] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-xs md:text-sm text-[#3D485C]">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-[#168C8C] font-bold text-base leading-none mt-0.5">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applied AI & Automation Section (Secondary & Grounded) */}
        <section id="ai-automation" className="py-20">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-12 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Digital Evolution</span>
              <h2 className="text-3xl font-bold text-[#172033] mt-2 mb-3">Applied AI &amp; Automation in Operations</h2>
              <p className="text-[#475467]">Bridging deep operational fundamentals with modern automation to eliminate repetitive friction.</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm mb-6">
              <p className="text-[#172033] text-sm md:text-base leading-relaxed">
                I am not an AI engineer or software developer. Rather, I apply practical AI, workflow automations, and intelligent agentic tools directly to real-world commercial problems—enhancing CRM intelligence, accelerating SOP generation, and eliminating manual operational bottlenecks while keeping human judgment and strategy at the core.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-6 shadow-sm">
                <div className="w-10 h-10 rounded-[6px] bg-[#E9F4F4] text-[#168C8C] flex items-center justify-center mb-4">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#172033] mb-2">Commercial Data Enrichment</h3>
                <p className="text-xs md:text-sm text-[#475467] leading-relaxed">
                  Automating lead scoring, firmographic enrichment, and prospect classification to keep CRM data clean and actionable for sales reps without manual entry fatigue.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-6 shadow-sm">
                <div className="w-10 h-10 rounded-[6px] bg-[#E9F4F4] text-[#168C8C] flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#172033] mb-2">Intelligent SOP &amp; Playbook Extraction</h3>
                <p className="text-xs md:text-sm text-[#475467] leading-relaxed">
                  Leveraging AI language models to rapidly structure raw process recordings, interview notes, and workflows into crisp, standardized operational documentation.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-6 shadow-sm">
                <div className="w-10 h-10 rounded-[6px] bg-[#E9F4F4] text-[#168C8C] flex items-center justify-center mb-4">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#172033] mb-2">Workflow &amp; Quote Routing Automation</h3>
                <p className="text-xs md:text-sm text-[#475467] leading-relaxed">
                  Building streamlined routing rules and triage systems that ensure inquiries, bids, and client escalations instantly reach the right desk with all needed context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section (De-emphasized, Clean) */}
        <section id="tech-stack" className="py-20 bg-[#F0EFEB] border-y border-[#E2E4E9]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-12 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Systems &amp; Tools</span>
              <h2 className="text-3xl font-bold text-[#172033] mt-2 mb-3">Technology &amp; Operating Software</h2>
              <p className="text-[#475467]">Hands-on administrative and operational fluency across industry-standard commercial and logistics platforms.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-6 shadow-sm">
                <h3 className="font-bold text-sm text-[#172033] mb-3 flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#168C8C]" /> Enterprise CRM
                </h3>
                <ul className="space-y-2 text-xs text-[#475467]">
                  <li className="flex items-center justify-between">Microsoft Dynamics 365 <span className="bg-[#FAF9F6] border border-[#E2E4E9] px-1.5 py-0.5 rounded text-[0.65rem] text-[#64748B]">Admin</span></li>
                  <li className="flex items-center justify-between">Salesforce CRM <span className="bg-[#FAF9F6] border border-[#E2E4E9] px-1.5 py-0.5 rounded text-[0.65rem] text-[#64748B]">Admin</span></li>
                  <li>Pipeline Stage Architecture</li>
                  <li>Account Deduplication</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-6 shadow-sm">
                <h3 className="font-bold text-sm text-[#172033] mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#168C8C]" /> BI &amp; Analytics
                </h3>
                <ul className="space-y-2 text-xs text-[#475467]">
                  <li>Microsoft Power BI</li>
                  <li>Sales ROI (ROSE) Models</li>
                  <li>EBIT &amp; Margin Risk Analysis</li>
                  <li>Executive QBR Dashboards</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-6 shadow-sm">
                <h3 className="font-bold text-sm text-[#172033] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#168C8C]" /> Logistics &amp; Quoting
                </h3>
                <ul className="space-y-2 text-xs text-[#475467]">
                  <li>Magaya &amp; WebCargo</li>
                  <li>CargoWise / Logixboard</li>
                  <li>NEO Supply Chain Portal</li>
                  <li>International Quote Desks</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-6 shadow-sm">
                <h3 className="font-bold text-sm text-[#172033] mb-3 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#168C8C]" /> Process &amp; Integration
                </h3>
                <ul className="space-y-2 text-xs text-[#475467]">
                  <li>EDI Billing Workflows</li>
                  <li>Lean Value Stream Mapping</li>
                  <li>Document Imaging Systems</li>
                  <li>Process SOP Architectures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Education Section */}
        <section id="credentials" className="py-20">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-12 max-w-[780px]">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Professional Credentials</span>
              <h2 className="text-3xl font-bold text-[#172033] mt-2 mb-3">Certifications &amp; Education</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
              <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 shadow-sm">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-[6px] bg-[#E9F4F4] text-[#168C8C] flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#172033]">Janek Performance Group</h3>
                    <span className="text-xs text-[#64748B]">5x Certified Sales Methodology Practitioner &amp; Coach</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#475467] leading-relaxed mb-4">
                  Certified across core commercial frameworks to coach, implement, and institutionalize high-performance selling practices:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Critical Selling (Train-the-Trainer)",
                    "Critical Negotiation",
                    "Critical Account Planning",
                    "Selling to the C-Suite",
                    "Strategic Storytelling"
                  ].map((cert, idx) => (
                    <span key={idx} className="text-xs font-semibold text-[#172033] bg-[#FAF9F6] border border-[#E2E4E9] px-3 py-1.5 rounded-[6px]">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-[#E7E9ED] p-5 shadow-sm">
                  <h4 className="font-bold text-sm text-[#172033] mb-1">Colorado State University</h4>
                  <p className="text-xs text-[#475467] leading-relaxed">Higher education academic foundation in business management, leadership, and operational analysis.</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E7E9ED] p-5 shadow-sm">
                  <h4 className="font-bold text-sm text-[#172033] mb-1">Lean Enterprise &amp; Six Sigma</h4>
                  <p className="text-xs text-[#475467] leading-relaxed">Trained in root-cause problem solving, whiteboard mapping, and waste elimination frameworks.</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E7E9ED] p-5 shadow-sm">
                  <h4 className="font-bold text-sm text-[#172033] mb-1">Service Excellence Award</h4>
                  <p className="text-xs text-[#475467] leading-relaxed">Honored by SEKO Logistics (2018) for exceptional leadership, enablement delivery, and commercial support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#EEF3F5] border-t border-[#E2E4E9]">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="bg-white rounded-2xl border border-[#E7E9ED] p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <span className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#168C8C]">Let's Connect</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#172033] mt-2 mb-3">Ready to Transform Your Commercial Operations?</h2>
                  <p className="text-sm text-[#475467] leading-relaxed mb-6">
                    I am exploring senior commercial operations, process design, and transformation leadership roles across logistics, supply chain, and consulting practices.
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-[6px] bg-[#E9F4F4] text-[#168C8C] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[#64748B]">Email Direct</div>
                        <div className="flex items-center gap-2">
                          <a href="mailto:krostan68@yahoo.com" className="font-semibold text-sm text-[#172033] hover:text-[#168C8C]">
                            krostan68@yahoo.com
                          </a>
                          <button
                            onClick={handleCopyEmail}
                            className="p-1 rounded text-[#64748B] hover:text-[#168C8C] hover:bg-[#E9F4F4] transition-colors"
                            title="Copy Email"
                          >
                            {copiedEmail ? <Check className="w-4 h-4 text-[#168C8C]" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-[6px] bg-[#E9F4F4] text-[#168C8C] flex items-center justify-center flex-shrink-0">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[#64748B]">LinkedIn Profile</div>
                        <a
                          href="https://www.linkedin.com/in/kristyn-r-0410915/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-sm text-[#172033] hover:text-[#168C8C]"
                        >
                          linkedin.com/in/kristyn-r-0410915
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-[6px] bg-[#E9F4F4] text-[#168C8C] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[#64748B]">Location &amp; Work Preference</div>
                        <span className="font-medium text-xs text-[#475467]">Greater Chicago Area &bull; Remote &bull; Selective Relocation</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#172033] mb-1.5">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-[6px] border border-[#E2E4E9] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#168C8C] text-sm text-[#172033]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#172033] mb-1.5">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-[6px] border border-[#E2E4E9] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#168C8C] text-sm text-[#172033]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#172033] mb-1.5">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Hi Kristyn, I would love to connect regarding an opportunity..."
                      className="w-full px-3.5 py-2.5 rounded-[6px] border border-[#E2E4E9] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#168C8C] text-sm text-[#172033]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#168C8C] hover:bg-[#0E6666] text-white font-semibold text-sm py-3.5 rounded-[6px] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight className="w-4 h-4" />
                  </button>
                  {formSubmitted && (
                    <div className="bg-[#E9F4F4] border border-[#168C8C]/30 text-[#0E6666] text-xs p-3 rounded-[6px] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Opening your default email client with your message draft...</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#F7F6F2] border-t border-[#E2E4E9]">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-3">
          <div className="flex items-center gap-2.5 font-bold text-[#172033]">
            <div className="w-7 h-7 rounded-[4px] bg-[#168C8C] text-white flex items-center justify-center text-xs">KR</div>
            <span>Kristyn Rostan &bull; Commercial Operations &amp; Transformation Leader</span>
          </div>
          <div>&copy; 2026 Kristyn Rostan. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
