import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { TypographyH2 } from "./ui/TypographyH2";
import Link from "next/link";
import { ExternalLink, Folder, Github } from "lucide-react";
import { motion } from "framer-motion";
import { TypographyP } from "./ui/TypographyP";

const projects = [
    {
        icon: <Folder className="h-8 w-8 text-orange-500" />,
        title: "Image/Video Processing",
        description:
            "Developed a high-performance Node.js API using worker_threads to offload CPU-intensive image resizing and video metadata extraction, ensuring non-blocking main thread operation.",
        tech: ["Node.js", "TypeScript", "Worker_Threads", "Express.js"],
        preview: "https://github.com/ShahandFahad/media-processor-worker-api.git",
        repo: "https://github.com/ShahandFahad/media-processor-worker-api.git",
    },
    {
        icon: <Folder className="h-8 w-8 text-orange-500" />,
        title: "Ignis",
        description:
            "Developed a secure, responsive chatbot app with JWT authentication and OpenAI integration for intelligent conversations.",
        tech: ["Node.js", "TypeScript", "Next.js", "ShadCN UI", "OpenAI",],
        preview: "https://github.com/ShahandFahad/ignis.git",
        repo: "https://github.com/ShahandFahad/ignis.git",
    },
    {
        icon: <Folder className="h-8 w-8 text-orange-500" />,
        title: "E-Drawer",
        description:
            "Developed a real-time chat server using Socket.IO and Node.js for instant bi-directional client communication. Designed scalable, modular event handling for socket events including connect, disconnect, messaging, and private chat.",
        tech: ["Node.js", "TypeScript", "Express.js", "Socket.IO"],
        preview: "https://github.com/ShahandFahad",
        repo: "https://github.com/ShahandFahad",
    },
    {
        icon: <Folder className="h-8 w-8 text-orange-500" />,
        title: "SCECO",
        description:
            "Built a full-stack eCommerce site for auto spare parts with authentication, product management, secure storage using Firebase (media storage) and JWT. Designed REST APIs with Express.js and integrated MongoDB via Mongoose.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
        preview: "https://github.com/ShahandFahad",
        repo: "https://github.com/ShahandFahad",
    },
    {
        icon: <Folder className="h-8 w-8 text-orange-500" />,
        title: "MIS",
        description:
            "Developed a microservices-based sales management system with inventory, expenses, and reporting; integrated demand forecasting using Flask + APRIORI.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Flask", "MUI"],
        preview: "https://github.com/ShahandFahad",
        repo: "https://github.com/ShahandFahad",
    },
    {
        icon: <Folder className="h-8 w-8 text-orange-500" />,
        title: "3BS",
        description:
            "Built a full-stack buy/sell platform with role-based access control, JWT authentication, and secure user sessions. Integrated Firebase storage and MongoDB with RESTful APIs for item listings, storage, and user data management.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
        preview: "https://github.com/ShahandFahad/3BS.git",
        repo: "https://github.com/ShahandFahad/3BS.git",
    },
    {
        icon: <Folder className="h-8 w-8 text-orange-500" />,
        title: "SolarScape",
        description:
            "Built a web app for real-time solar potential analysis using third-party APIs & microservices-based backend for modular data handling.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        preview: "https://github.com/ShahandFahad/solarscape.git",
        repo: "https://github.com/ShahandFahad/solarscape.git",
    },
    {
        icon: <Folder className="h-8 w-8 text-orange-500" />,
        title: "Tourist",
        description:
            "Built an SSR tour booking system using Node.js, Express, and Pug templates with role-based access and JWT-secured user sessions. Integrated MongoDB, Dockerized the app for scalable deployment.",
        tech: ["PUG", "Node.js", "Express.js", "MongoDB", "JWT", "Docker"],
        preview: "https://github.com/ShahandFahad/tour-webapp.git",
        repo: "https://github.com/ShahandFahad/tour-webapp.git",
    },
    {
        icon: <Folder className="h-8 w-8 text-orange-500" />,
        title: "E-Commerce",
        description:
            "E-commerce website built using HTML, CSS, JavaScript, and PHP. The website enables users to browse and purchase products, with features like user registration, product catalog, shopping cart, and secure checkout.",
        tech: ["PHP", "MySQL", "HTML", "CSS", "BootStrap"],
        preview: "https://github.com/ShahandFahad/E-Commerce.git",
        repo: "https://github.com/ShahandFahad/E-Commerce.git",
    },
    {
        icon: <Folder className="h-8 w-8 text-orange-500" />,
        title: "Meta Front-End Development",
        description:
            "Learning Repositry: This is a 9 course program I took as a part of becomming a front-end developer. I have shared the course content and related projects here to support and help other learners on their front-end development path.",
        tech: ["meta-professional-certificate", "frontend"],
        preview: "https://www.coursera.org/account/accomplishments/professional-cert/M5Q6SJJ6V7MW",
        repo: "https://github.com/ShahandFahad/Meta-Front-End-Developer.git",
    },
    {
        icon: <Folder className="h-8 w-8 text-orange-500" />,
        title: "Meta Back-End Development",
        description:
            "Learning Repositry: This is a 9 course program I took as a part of becomming a back-end developer. I have shared the course content and related projects here to support and help other learners on their back-end development path.",
        tech: ["meta-professional-certificate", "backend"],
        preview: "https://www.coursera.org/account/accomplishments/professional-cert/LXU8536WB4FZ",
        repo: "https://github.com/ShahandFahad/Meta-Back-End-Developer.git",
    },
    {
        icon: <Folder className="h-8 w-8 text-orange-500" />,
        title: "IBM Full-Stack Development",
        description:
            "Learning Repositry: This is a 12 course program I took as a part of becomming a Full Stack Software Developer. I have shared the course content and related projects here to support and help other learners.",
        tech: ["ibm-professional-certificate", "fullstack"],
        preview: "https://www.coursera.org/account/accomplishments/professional-cert/8D5Z5G9K5XR4",
        repo: "https://github.com/ShahandFahad/IBM-full-stack-software-developer.git",
    },
];

export const ProjectSection = () => {
    return (
        <CenteredContentWrapper>
            <section
                id="projects"
                className="min-h-screen backdrop-blur-sm py-5 lg:py-20 pb-20 container mx-auto px-4 md:px-0"
            >

                <TypographyH2
                    text="Networthy Projects"
                    styles="text-center text-slate-200"
                />
                <p className="text-center text-orange-500 " >
                    view the projects
                </p>
                <p className="text-center text-red-500 text-xs italic" >
                    *please note that some of the projects are private
                </p>

                {/* PROJECTS GRID: bg: from-black via-pink-950 to-pink-800 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {
                        projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="text-slate-200 hover:text-orange-500 hover:-translate-y-1 hover:transition-transform hover:transform  hover:ease-in-out hover:duration-300 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 hover:via-slate-900 hover:cursor-pointer rounded shadow-lg p-6 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex justify-between">
                                    <div className="mb-4">{project.icon}</div>
                                    <div className="mb-4 flex gap-2">
                                        <Link target="_blank" href={project.repo} className="bg-none">
                                            <Github className="text-slate-200 hover:text-orange-500" />
                                        </Link>
                                        <Link target="_blank" href={project.preview} className="bg-none">
                                            <ExternalLink className="text-slate-200 hover:text-orange-500" />
                                        </Link>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    <Link href={project.preview}>
                                        {project.title}
                                    </Link>
                                </h3>
                                <TypographyP
                                    text={project.description}
                                    styles="text-slate-200 xl:h-44 lg:h-68 md:h-78 h-auto"
                                />
                                <div className="text-slate-400 flex flex-wrap gap-2 mt-4">
                                    {
                                        project.tech.map((t, index) => (
                                            <span key={index} className="text-sm">{t}</span>
                                        ))
                                    }
                                </div>

                            </motion.div>
                        ))
                    }
                </div>


            </section>
        </CenteredContentWrapper>
    );
};
