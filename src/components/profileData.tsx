"use client";

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Skills {
  programming: string[];
  mlTools: string[];
  dataScience: string[];
  frameworks: string[];
  devOps: string[];
}

export interface Experience {
  title: string;
  role: string;
  period: string;
  desc: string;
  tech: string[];
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
}

// Data

export const education: Education[] = [
  {
    degree: "B.Tech in Electronics and Communication",
    institution: "Indore Institute of Science and Technology",
    location: "Indore, India",
    period: "2022 - Present",
  },
  {
    degree: "12th Grade (88%)",
    institution: "Career Academy",
    location: "Indore, India",
    period: "2021 - 2022",
  },
];

export const skills: Skills = {
  programming: ["Python", "JavaScript", "C++", "HTML", "CSS"],
  mlTools: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV"],
  dataScience: ["Feature Engineering", "Dataset Preprocessing", "Statistical Analysis"],
  frameworks: ["React", "Next.js", "Streamlit", "Flask", "LangChain"],
  devOps: ["Git", "Docker", "REST APIs"],
};

export const experiences: Experience[] = [
  {
    title: "DiagnosisX - AI ECG System",
    role: "Lead Developer",
    period: "Feb 2024 - Apr 2024",
    desc: "Built a diagnostic model achieving 97% accuracy on 20,000+ ECG samples across 25+ classes. Developed a Streamlit interface for real-time predictions, reducing diagnosis time by 70%.",
    tech: ["TensorFlow", "Keras", "Streamlit", "Python"],
    color: "#3B82F6",
  },
  {
    title: "Health Assistant Chatbot",
    role: "AI Engineer",
    period: "Jul 2024 - Present",
    desc: "Designed a LangChain-powered chatbot handling 500+ monthly queries for symptom-based disease prediction. Delivered personalized health tips with 90% confidence scores.",
    tech: ["LangChain", "Python", "NLP", "Flask"],
    color: "#10B981",
  },
  {
    title: "Gesture-Based Game Control",
    role: "Computer Vision Specialist",
    period: "Oct 2022 - Jul 2023",
    desc: "Enabled gesture-based interaction using OpenCV, achieving 95% accuracy for real-time control. Improved accessibility for 100+ users, replacing keyboard and mouse reliance.",
    tech: ["OpenCV", "Python", "Computer Vision"],
    color: "#8B5CF6",
  },
];

export const projects: Project[] = [
  {
    title: "DiagnosisX",
    description: "AI-powered ECG diagnosis system with real-time analysis capabilities and medical-grade accuracy.",
    tech: ["Python", "TensorFlow", "Streamlit", "ECG Analysis"],
    image: "/project-diagnosisx.jpg",
    github: "https://github.com/Vickykawadkar/diagnosisx",
    demo: "https://diagnosisx-demo.vercel.app",
  },
  {
    title: "Health Assistant Chatbot",
    description: "Intelligent conversational agent for preliminary medical assessments and health recommendations.",
    tech: ["Python", "LangChain", "NLP", "Healthcare"],
    image: "/project-chatbot.jpg",
    github: "https://github.com/Vickykawadkar/health-assistant",
    demo: "https://health-assistant-demo.vercel.app",
  },
  {
    title: "Gesture-Based Controller",
    description: "Computer vision system that translates hand gestures into game commands for an immersive experience.",
    tech: ["Python", "OpenCV", "Computer Vision", "HCI"],
    image: "/project-gesture.jpg",
    github: "https://github.com/Vickykawadkar/gesture-control",
    demo: "https://gesture-control-demo.vercel.app",
  },
  {
    title: "Budget Tracking System",
    description: "Hackathon-winning financial management tool that reduces cash flow errors by 20%.",
    tech: ["React", "Node.js", "MongoDB", "Finance"],
    image: "/project-budget.jpg",
    github: "https://github.com/Vickykawadkar/budget-tracker",
    demo: "https://budget-tracker-demo.vercel.app",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Clash Hackathon Winner",
    date: "March 2024",
    description: "Led a team of 5 to develop a budget-tracking system, reducing cash flow errors by 20%.",
  },
  {
    title: "Innovative Idea Presentation Winner",
    date: "August 2022",
    description: "Developed an automatic attendance system using facial recognition, presented to an audience of 50+ educators.",
  },
  {
    title: "Technex 2022 (Mage): Runner-Up",
    date: "March 2022",
    description: "Designed a fixed-wing Mars rover model, earning 2nd place among 500+ participants in an IIT BHU-organized event.",
  },
];
