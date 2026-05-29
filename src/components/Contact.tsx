import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail,  
  MapPin, 
  Copy, 
  Check, 
  Radio, 
  ExternalLink,
  Cpu,
  ArrowUpRight
} from "lucide-react";

interface SocialChannel {
  name: string;
  platform: string;
  handle: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  glow: string;
}

export default function ContactHubSection(): React.JSX.Element {
  const [copied, setCopied] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);
  
  const emailAddress = "sunilsah025@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setToast(true);
      setTimeout(() => setToast(false), 3000);
      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      console.error("Could not copy layout", err);
    }
  };

  const socialChannels: SocialChannel[] = [
    {
      name: "LinkedIn",
      platform: "Professional Network",
      handle: "sunilsah-dev",
      href: "https://linkedin.com",
      icon: <ExternalLink className="w-5 h-5" />,
      color: "border-blue-500/20 text-blue-400 bg-blue-500/5 hover:border-blue-400",
      glow: "from-blue-500/20 to-transparent"
    },
    {
      name: "GitHub",
      platform: "Source Controls",
      handle: "sunil-sah",
      href: "https://github.com",
      icon: <ExternalLink className="w-5 h-5" />, 
      color: "border-slate-700 text-slate-200 bg-slate-800/20 hover:border-slate-500",
      glow: "from-slate-500/10 to-transparent"
    },
    {
      name: "Instagram",
      platform: "Media & Lifestyle",
      handle: "@sunilsah_",
      href: "https://instagram.com",
      icon: <ExternalLink className="w-5 h-5" />, 
      color: "border-pink-500/20 text-pink-400 bg-pink-500/5 hover:border-pink-400",
      glow: "from-pink-500/20 to-transparent"
    },
    {
      name: "Facebook",
      platform: "Social Graph",
      handle: "sunil.sah.official",
      href: "https://facebook.com",
      icon: <ExternalLink className="w-5 h-5" />, 
      color: "border-indigo-500/20 text-indigo-400 bg-indigo-500/5 hover:border-indigo-400",
      glow: "from-indigo-500/20 to-transparent"
    }
  ];

  return (
    <section id="contact" className="relative bg-slate-950 text-slate-100 font-sans antialiased px-6 py-28 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Dynamic Digital Backdrop Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[140px]" />
      </div>

      {/* Floating Action Toast Notification */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9, transition: { duration: 0.2 } }}
              className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-xl border border-emerald-500/30 bg-slate-900/95 backdrop-blur-xl shadow-2xl text-xs font-mono text-emerald-400 font-medium"
            >
              <Check className="w-4 h-4" />
              <span>Email copied to cryptographic buffer stack!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto space-y-12">
        
        {/* Title Presentation Wrapper */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 font-mono uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" /> Gateway Online
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
            Let's Build Something Together
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Skip the form pipelines. Choose an encrypted pipeline node below to establish an immediate handshake route directly into my feeds.
          </p>
        </div>

        {/* Core Layout Split Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-4">
          
          {/* PRIMARY MASTER CARD: EMAIL & METRICS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-2xl border border-slate-900 bg-slate-900/10 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between space-y-8 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent blur-xl transition-opacity opacity-50 group-hover:opacity-100" />
            
            <div className="space-y-4">
              <div className="p-3 w-fit bg-slate-950 border border-slate-900 rounded-xl text-slate-400">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold tracking-tight text-slate-100">Direct Comms Router</h3>
                <p className="text-xs text-slate-400 font-mono">Status: Awaiting handshake requests</p>
              </div>
            </div>

            {/* Premium Copy Block Container */}
            <div className="space-y-3">
              <label className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-widest">Primary Contact Node</label>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-900/80 flex items-center justify-between group/input hover:border-slate-800 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-slate-400 group-hover/input:text-cyan-400 transition-colors shrink-0" />
                  <span className="text-sm font-semibold text-slate-300 truncate">{emailAddress}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg text-slate-400 hover:text-slate-200 transition-all active:scale-95 shrink-0"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Micro Metadata Metrics */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pt-4 border-t border-slate-900/60">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Kathmandu, NP
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              <div>GMT +5:45</div>
            </div>
          </motion.div>

          {/* SOCIAL INTERACTION STREAM LINK BLOCKS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialChannels.map((channel, idx) => (
              <motion.a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`relative p-5 rounded-2xl border ${channel.color} flex flex-col justify-between space-y-8 group transition-all duration-300 shadow-sm overflow-hidden`}
              >
                {/* Dynamic Gradient glow mesh on link card hover states */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${channel.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-md`} />

                <div className="flex items-start justify-between relative z-10">
                  <div className="p-2.5 bg-slate-950/80 border border-slate-900/60 rounded-xl group-hover:scale-105 transition-transform">
                    {channel.icon}
                  </div>
                  <div className="p-1.5 text-slate-600 group-hover:text-slate-300 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="space-y-0.5 relative z-10 text-left">
                  <p className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">{channel.platform}</p>
                  <h4 className="text-base font-bold text-slate-100 flex items-center gap-1.5">
                    {channel.name}
                  </h4>
                  <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors font-mono">{channel.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}