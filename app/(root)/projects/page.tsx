"use client"

import { useState } from "react"
import Link from "next/link"
import {
    ExternalLink,
    Github,
    Calendar,
    Users,
    Code,
    Database,
    Smartphone,
    Globe,
    ArrowLeft,
    CheckCircle,
    Clock,
    Star,
} from "lucide-react"
import Image from "next/image"

export default function ProjectPage() {
    const [activeFilter, setActiveFilter] = useState("All")
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

    const projects = [
        {
            id: 1,
            title: "Kira Untung - Smart Assistant App",
            description:
                "A smart assistant app with AI-powered chatbot and visual ingredient detection system. Built chatbot feature integrated with OpenAI API and ingredient database, plus visual recipe detection using image input.",
            fullDescription:
                "Kira Untung is an innovative smart assistant application that leverages artificial intelligence to help users with ingredient identification and recipe recommendations. The app features a sophisticated chatbot integrated with OpenAI API and a comprehensive ingredient database, allowing users to get intelligent responses about cooking and ingredients. Additionally, the visual ingredient detection system uses advanced image processing to identify ingredients from photos and suggest relevant recipes.",
            image: "/placeholder.svg?height=400&width=600",
            category: "AI & Web App",
            technologies: ["Laravel", "jQuery", "AJAX", "OpenAI API", "Image Processing", "MySQL", "Bootstrap"],
            features: [
                "AI-powered chatbot with ingredient database integration",
                "Visual ingredient and recipe detection from images",
                "Smart recipe recommendations based on available ingredients",
                "Real-time chat interface with natural language processing",
                "Comprehensive ingredient database with nutritional information",
                "User preference learning and personalized suggestions",
            ],
            challenges: [
                "Integrating OpenAI API with existing ingredient database",
                "Optimizing image processing for real-time ingredient detection",
                "Building responsive chat interface with smooth user experience",
            ],
            results: [
                "Successfully implemented AI chatbot with 95% accuracy in ingredient recognition",
                "Reduced recipe search time by 60% through visual detection",
                "Achieved seamless real-time chat experience",
            ],
            company: "Crackin Code Studio",
            period: "October 2024 - January 2025",
            duration: "4 months",
            status: "Completed",
            type: "Professional",
            teamSize: "3 developers",
            role: "Full-stack Developer",
            links: {
                demo: "#",
                github: "#",
            },
        },
        {
            id: 2,
            title: "CAT Exam App",
            description:
                "Comprehensive examination application with multiple test modules including Koran-style test and MMPI personality test. Built with modern Laravel ecosystem and interactive UI components.",
            fullDescription:
                "CAT Exam App is a comprehensive computer-based testing platform designed for psychological assessments and educational evaluations. The application features multiple test modules including Koran-style cognitive tests and MMPI (Minnesota Multiphasic Personality Inventory) personality assessments. Built using the modern Laravel ecosystem with Alpine.js for interactive components and Livewire for real-time updates.",
            image: "/placeholder.svg?height=400&width=600",
            category: "Web Application",
            technologies: ["Laravel", "Alpine.js", "Blade", "Livewire", "Tailwind CSS", "MySQL", "Chart.js"],
            features: [
                "Koran-style test module with advanced timer functionality",
                "MMPI personality test implementation with scoring algorithms",
                "Real-time test progress tracking and analytics",
                "Comprehensive result analytics with visual charts",
                "Multi-user session management",
                "Automated test scoring and report generation",
            ],
            challenges: [
                "Implementing complex psychological test algorithms",
                "Building real-time progress tracking without performance issues",
                "Creating intuitive test interface for various user types",
            ],
            results: [
                "Delivered fully functional testing platform on schedule",
                "Achieved 99.9% test completion rate without technical issues",
                "Reduced manual scoring time by 80%",
            ],
            company: "Crackin Code Studio",
            period: "October 2024 - January 2025",
            duration: "4 months",
            status: "Completed",
            type: "Professional",
            teamSize: "4 developers",
            role: "Backend Developer",
            links: {
                demo: "#",
            },
        },
        {
            id: 3,
            title: "Eduleap LMS",
            description:
                "Full-featured Learning Management System built with Next.js, integrated with payment gateway, video streaming, and modern UI components for optimal learning experience.",
            fullDescription:
                "Eduleap LMS is a comprehensive learning management system designed to provide an optimal online education experience. Built with Next.js and modern web technologies, it features secure video streaming through MUX, payment processing via Xendit, and a beautiful, responsive interface using Shadcn UI components. The platform supports course creation, student enrollment, progress tracking, and interactive learning modules.",
            image: "/placeholder.svg?height=400&width=600",
            category: "E-Learning Platform",
            technologies: ["Next.js", "Prisma", "PostgreSQL", "Xendit", "MUX", "Shadcn UI", "TypeScript", "Tailwind CSS"],
            features: [
                "Secure video streaming with MUX integration",
                "Payment processing with Xendit gateway",
                "Comprehensive course management system",
                "Student progress tracking and analytics",
                "Interactive learning modules and quizzes",
                "Real-time notifications and messaging",
                "Mobile-responsive design",
                "Advanced search and filtering",
            ],
            challenges: [
                "Integrating multiple third-party services (MUX, Xendit)",
                "Building scalable video streaming infrastructure",
                "Implementing secure payment processing",
                "Creating responsive design for various devices",
            ],
            results: [
                "Successfully launched LMS with 500+ initial users",
                "Achieved 99.5% video streaming uptime",
                "Processed payments worth $10,000+ without issues",
                "Received 4.8/5 user satisfaction rating",
            ],
            company: "PT Koding Kreasi Indonesia",
            period: "July - September 2024",
            duration: "3 months",
            status: "Completed",
            type: "Professional",
            teamSize: "5 developers",
            role: "Full-stack Developer",
            links: {
                demo: "#",
                github: "#",
            },
        },
        // Add more projects with similar detailed structure...
    ]

    const categories = [
        "All",
        "Web Application",
        "Mobile Application",
        "API Development",
        "AI & Web App",
        "E-Learning Platform",
        "Enterprise System",
        "Admin Dashboard",
        "Booking System",
    ]

    const filteredProjects =
        activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

    const getIcon = (category: string) => {
        switch (category) {
            case "Mobile Application":
                return <Smartphone className="w-5 h-5" />
            case "API Development":
                return <Database className="w-5 h-5" />
            case "AI & Web App":
                return <Code className="w-5 h-5" />
            default:
                return <Globe className="w-5 h-5" />
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A comprehensive showcase of projects I&apos;ve built during my internships and personal development journey,
                        featuring web applications, mobile apps, and AI-powered solutions.
                    </p>
                </div>

                {/* Filter and View Controls */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                                            ? "bg-blue-600 text-white shadow-lg"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">View:</span>
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${viewMode === "grid" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                Grid
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${viewMode === "list" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                List
                            </button>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                            Showing {filteredProjects.length} of {projects.length} projects
                        </p>
                    </div>
                </div>

                {/* Projects Display */}
                {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-64 object-cover"
                                />

                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-blue-600 bg-blue-50">
                                            {getIcon(project.category)}
                                            <span className="ml-2">{project.category}</span>
                                        </span>
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-50">
                                            <CheckCircle className="w-3 h-3 mr-1" />
                                            {project.status}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{project.fullDescription}</p>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Users className="w-4 h-4 mr-2" />
                                            <span className="font-medium">{project.company}</span>
                                            <span className="mx-2">•</span>
                                            <span>{project.role}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            <span>{project.period}</span>
                                            <span className="mx-2">•</span>
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>{project.duration}</span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                                        <ul className="space-y-2">
                                            {project.features.slice(0, 4).map((feature, index) => (
                                                <li key={index} className="flex items-start text-sm text-gray-600">
                                                    <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex space-x-3">
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                View Demo
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                            >
                                                <Github className="w-4 h-4 mr-2" />
                                                View Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="lg:w-1/3">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-48 lg:h-full object-cover rounded-xl"
                                        />
                                    </div>

                                    <div className="lg:w-2/3">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-blue-600 bg-blue-50">
                                                {getIcon(project.category)}
                                                <span className="ml-2">{project.category}</span>
                                            </span>
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-50">
                                                <CheckCircle className="w-3 h-3 mr-1" />
                                                {project.status}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-center text-sm text-gray-600">
                                                <Users className="w-4 h-4 mr-2" />
                                                <span>{project.company}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                <span>{project.period}</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 5).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 5 && (
                                                    <span className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-50 rounded-md">
                                                        +{project.technologies.length - 5} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex space-x-3">
                                            {project.links.demo && (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Demo
                                                </a>
                                            )}
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                                >
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Project Statistics */}
                <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Project Statistics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
                            <div className="text-gray-600">Total Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">
                                {projects.filter((p) => p.type === "Professional").length}
                            </div>
                            <div className="text-gray-600">Professional</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">
                                {new Set(projects.flatMap((p) => p.technologies)).size}
                            </div>
                            <div className="text-gray-600">Technologies</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">
                                {projects.filter((p) => p.status === "Completed").length}
                            </div>
                            <div className="text-gray-600">Completed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
