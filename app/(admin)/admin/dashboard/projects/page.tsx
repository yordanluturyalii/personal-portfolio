"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Plus, Search, Edit, Trash2, Calendar, ArrowLeft, Filter, ExternalLink, Github, Users } from "lucide-react"

export default function ProjectsManagementPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "Kira Untung - Smart Assistant App",
            description: "A smart assistant app with AI-powered chatbot and visual ingredient detection system.",
            category: "AI & Web App",
            status: "Completed",
            type: "Professional",
            company: "Crackin Code Studio",
            period: "October 2024 - January 2025",
            technologies: ["Laravel", "jQuery", "AJAX", "OpenAI API"],
            links: { demo: "#", github: "#" },
        },
        {
            id: 2,
            title: "Eduleap LMS",
            description: "Full-featured Learning Management System built with Next.js, integrated with payment gateway.",
            category: "E-Learning Platform",
            status: "Completed",
            type: "Professional",
            company: "PT Koding Kreasi Indonesia",
            period: "July - September 2024",
            technologies: ["Next.js", "Prisma", "PostgreSQL", "Xendit"],
            links: { demo: "#", github: "#" },
        },
        {
            id: 3,
            title: "CAT Exam App",
            description: "Comprehensive examination application with multiple test modules.",
            category: "Web Application",
            status: "Completed",
            type: "Professional",
            company: "Crackin Code Studio",
            period: "October 2024 - January 2025",
            technologies: ["Laravel", "Alpine.js", "Blade", "Livewire"],
            links: { demo: "#" },
        },
    ])

    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("adminToken")
        if (!token) {
            router.push("/admin/login")
        } else {
            setIsAuthenticated(true)
        }
    }, [router])

    const categories = [
        "All",
        "Web Application",
        "Mobile Application",
        "API Development",
        "AI & Web App",
        "E-Learning Platform",
        "Enterprise System",
    ]

    const filteredProjects = projects.filter((project) => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this project?")) {
            setProjects(projects.filter((project) => project.id !== id))
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Completed":
                return "bg-green-100 text-green-800"
            case "In Progress":
                return "bg-blue-100 text-blue-800"
            case "On Hold":
                return "bg-yellow-100 text-yellow-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    const getTypeColor = (type: string) => {
        return type === "Professional" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link href="/admin/dashboard" className="mr-4">
                                <ArrowLeft className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                            </Link>
                            <h1 className="text-xl font-semibold text-gray-900">Projects Management</h1>
                        </div>
                        <Link
                            href="/admin/projects/new"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            New Project
                        </Link>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search and Filters */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <Filter className="w-4 h-4 text-gray-500 mr-2" />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                            Showing {filteredProjects.length} of {projects.length} projects
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{project.title}</h3>
                                        <p className="text-sm text-gray-600 line-clamp-3 mb-3">{project.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center justify-between">
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}
                                        >
                                            {project.status}
                                        </span>
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(project.type)}`}
                                        >
                                            {project.type}
                                        </span>
                                    </div>

                                    <div className="text-sm text-gray-600">
                                        <div className="flex items-center mb-1">
                                            <Users className="w-4 h-4 mr-1" />
                                            {project.company}
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {project.period}
                                        </div>
                                    </div>

                                    <div>
                                        <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 text-xs text-gray-500 bg-gray-50 rounded-md">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                    <div className="flex space-x-2">
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-700"
                                                title="View Demo"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-gray-700"
                                                title="View Code"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>

                                    <div className="flex space-x-2">
                                        <Link
                                            href={`/admin/projects/edit/${project.id}`}
                                            className="text-blue-600 hover:text-blue-700"
                                            title="Edit Project"
                                        >
                                            <Edit className="w-4 h-4" />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(project.id)}
                                            className="text-red-600 hover:text-red-700"
                                            title="Delete Project"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <Search className="w-16 h-16 mx-auto" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
                        <p className="text-gray-500 mb-4">Try adjusting your search terms or filters.</p>
                        <Link
                            href="/admin/projects/new"
                            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            Create New Project
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
