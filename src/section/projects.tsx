import {
  Bus,
  MessageSquare,
  GraduationCap,
  BrainCircuit,
  Coffee,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "Full-Stack" | "Real-Time" | "System-Design" | "AI/ML";
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
    id: "ai-ml-projects",
    title: "AI/ML Projects Portfolio",
    category: "AI/ML",
    description:
      "A collection of practical machine learning projects covering classification, regression, data preprocessing, exploratory data analysis, model training, prediction, and evaluation. Includes Iris Flower Classification, House Price Prediction, and Loan Approval Prediction.",
    tech: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Machine Learning",
      "Data Analysis",
    ],
    github: "#",
    demo: "https://aiml-lyart.vercel.app/",
    metric: "3 Practical Machine Learning Projects",
    icon: <BrainCircuit className="w-5 h-5" />,
    bgGradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
  },

  {
    id: "bus-transport",
    title: "SUVYATRA - Online Bus Transit System",
    category: "System-Design",
    description:
      "A full-stack bus reservation platform designed to manage routes, schedules, seat selection, reservations, and passenger bookings. Implemented a temporary seat-hold mechanism to prevent double booking during the payment process.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Mongoose",
      "JWT",
      "REST API",
    ],
    github: "https://github.com/sumanCx31/nextjs-suvyatra",
    demo: "https://nextjs-suvyatra.vercel.app/",
    metric: "5-Minute Seat Reservation Hold",
    icon: <Bus className="w-5 h-5" />,
    bgGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
  },

  {
    id: "chat-room",
    title: "Real-Time Chat Application",
    category: "Real-Time",
    description:
      "A real-time messaging application supporting instant communication through Socket.IO. Built with a component-based React frontend and Node.js backend, with state management and persistent chat data stored in MongoDB.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.IO",
      "Zustand",
      "Context API",
      "Tailwind CSS",
    ],
    github: "https://github.com/sumanCx31/chat-room",
    demo: "#",
    metric: "Real-Time Bi-Directional Messaging",
    icon: <MessageSquare className="w-5 h-5" />,
    bgGradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
  },

  {
    id: "sipsnap",
    title: "Sipsnap - Cafe Management Portal",
    category: "Full-Stack",
    description:
      "A modern MERN stack cafe management platform designed for order tracking, menu customization, table reservations, and administrative inventory management. Features role-based access control and seamless order processing workflows.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "JWT",
      "REST API",
    ],
    github: "https://github.com/sumanCx31/sipsnap",
    demo: "https://sipsnap.vercel.app/",
    metric: "End-to-End Order & Inventory Workflow",
    icon: <Coffee className="w-5 h-5" />,
    bgGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
  },

  {
    id: "jigyasa",
    title: "Jigyasa - College Finder Portal",
    category: "Full-Stack",
    description:
      "A responsive college discovery portal featuring academic faculties, detailed college profiles, fee information, and extra-curricular activities with a clean component-based user interface.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "#",
    demo: "#",
    metric: "4 Faculties & 20+ College Profiles",
    icon: <GraduationCap className="w-5 h-5" />,
    bgGradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
  },
];

export default projectsData;