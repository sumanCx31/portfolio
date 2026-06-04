import { Bus, MessageSquare, ShoppingBag } from "lucide-react";
interface Project {
  id: string;
  title: string;
  category: "Full-Stack" | "Real-Time" | "System-Design";
  description: string;
  tech: string[];
  github: string;
  demo: string;
  metric: string;
  icon: React.ReactNode;
  bgGradient: string;
}

const projectsData: Project[] = [
  {
    id: "chat-room",
    title: "Real-Time Chat Ecosystem",
    category: "Real-Time",
    description: "A decoupled instant messaging core leveraging multi-room event duplexing via Socket.IO. Manages volatile state streams fluidly using Zustand with localized client packet caches to prevent layout re-render stutters.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "Zustand", "Context API", "Tailwind CSS"],
    github: "https://github.com/sumanCx31/chat-room",
    demo: "#",
    metric: "---------------------------",
    icon: <MessageSquare className="w-5 h-5" />,
    bgGradient: "from-indigo-500/10 via-purple-500/5 to-transparent"
  },
  {
    id: "bus-transport",
    title: "Online Bus Transit System",
    category: "System-Design",
    description: "An optimization-focused transit automation platform handling matrix-based vector seat selection, algorithmic structural route timetables, dynamic pricing rules, and atomic reservation logs.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Mongoose Structural Hooks"],
    github: "https://github.com/sumanCx31/nextjs-suvyatra",
    demo: "https://nextjs-suvyatra.vercel.app/",
    metric: "Atomic Matrix Seat Reservation Lock",
    icon: <Bus className="w-5 h-5" />,
    bgGradient: "from-emerald-500/10 via-teal-500/5 to-transparent"
  }
];

export default projectsData;