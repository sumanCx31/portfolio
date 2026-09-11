import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail,  
  MapPin, 
  Copy, 
  Check, 
  ExternalLink,
  ArrowUpRight
} from "lucide-react";

interface SocialChannel {
  name: string;
  platform: string;
  handle: string;
  href: string;
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
      console.error("Could not copy text", err);
    }
  };

  const socialChannels: SocialChannel[] = [
    {
      name: "LinkedIn",
      platform: "Professional Network",
      handle: "sunil-sah-156bb0406",
      href: "https://www.linkedin.com/in/sunilsah37",
    },
    {
      name: "GitHub",
      platform: "Source Code",
      handle: "sumanCx31",
      href: "https://github.com/sumanCx31",
    },
    {
      name: "Instagram",
      platform: "Personal & Creative",
      handle: "@sumnhere_",
      href: "https://www.instagram.com/sumnhere_/?__pwa=1",
    },
    {
      name: "Facebook",
      platform: "Social Network",
      handle: "suman",
      href: "https://www.facebook.com/sumansah46",
    }
  ];

  return (
    <section id="contact" className="relative bg-[#0a0a0a] text-neutral-100 font-sans antialiased px-6 py-28 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Floating Action Toast Notification */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9, transition: { duration: 0.2 } }}
              className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-900 text-neutral-200 shadow-xl text-xs font-medium tracking-wide"
            >
              <Check className="w-3.5 h-3.5 text-neutral-100" />
              <span>Email address copied to clipboard.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto space-y-12">
        
        {/* Title Presentation Wrapper */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span className="w-6 h-[1px] bg-neutral-600" />
            <span>Contact</span>
            <span className="w-6 h-[1px] bg-neutral-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-100">
            Let's Build Together
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Have a project in mind, a question, or an opportunity to discuss? Reach out directly via email or connect through channels below.
          </p>
        </div>

        {/* Core Layout Split Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
          
          {/* PRIMARY MASTER CARD: EMAIL & METRICS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 sm:p-8 flex flex-col justify-between space-y-8 relative group"
          >
            <div className="space-y-4">
              <div className="p-2.5 w-fit bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-medium tracking-tight text-neutral-100">Direct Inquiry</h3>
                <p className="text-xs text-neutral-400 font-normal">Typically replies within 24 hours</p>
              </div>
            </div>

            {/* Email Copy Block */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-medium uppercase text-neutral-500 tracking-widest">Primary Email</label>
              <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-between group/input hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <span className="text-xs sm:text-sm font-medium text-neutral-200 truncate">{emailAddress}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-md text-neutral-400 hover:text-neutral-200 transition-all active:scale-95 shrink-0"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-neutral-100" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Metadata Metrics */}
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 pt-4 border-t border-neutral-800/60">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Kathmandu, Nepal
              </div>
              <div className="w-1 h-1 rounded-full bg-neutral-700" />
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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="relative p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 hover:bg-neutral-900/50 flex flex-col justify-between space-y-6 group transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div className="p-1 text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <p className="text-[10px] font-mono font-medium tracking-wider text-neutral-500 uppercase">{channel.platform}</p>
                  <h4 className="text-sm font-medium text-neutral-100">
                    {channel.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-mono">{channel.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}