"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Plus, Search, Edit, Trash2, Eye, Calendar, Clock, ArrowLeft, Filter } from "lucide-react"
import DashboardHeader from "../__components/header"

export default function ArticlesManagementPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: "Building Scalable Web Applications with Laravel and React",
            excerpt:
                "Learn how to create robust full-stack applications using Laravel as backend API and React for the frontend.",
            category: "Web Development",
            status: "Published",
            date: "2024-01-15",
            readTime: "8 min read",
            views: 234,
        },
        {
            id: 2,
            title: "My Journey as a Software Engineering Student",
            excerpt: "Sharing my experience and lessons learned during my vocational education in software engineering.",
            category: "Personal",
            status: "Published",
            date: "2024-01-10",
            readTime: "5 min read",
            views: 156,
        },
        {
            id: 3,
            title: "Integrating OpenAI API in Web Applications",
            excerpt:
                "A comprehensive guide on how to integrate OpenAI API into your web applications for AI-powered features.",
            category: "AI & Technology",
            status: "Published",
            date: "2024-01-05",
            readTime: "12 min read",
            views: 189,
        },
        {
            id: 4,
            title: "Next.js 15 New Features and Best Practices",
            excerpt: "Explore the latest features in Next.js 15 and learn best practices for modern web development.",
            category: "Web Development",
            status: "Draft",
            date: "2024-01-20",
            readTime: "10 min read",
            views: 0,
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

    const categories = ["All", "Web Development", "AI & Technology", "Personal", "Backend Development"]

    const filteredArticles = articles.filter((article) => {
        const matchesSearch =
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this article?")) {
            setArticles(articles.filter((article) => article.id !== id))
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Published":
                return "bg-green-100 text-green-800"
            case "Draft":
                return "bg-yellow-100 text-yellow-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
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
            <DashboardHeader title="Articles Management" isCreate={true} url="articles" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search and Filters */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
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
                            Showing {filteredArticles.length} of {articles.length} articles
                        </p>
                    </div>
                </div>

                {/* Articles Table */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Article
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Views
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredArticles.map((article) => (
                                    <tr key={article.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-start">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900 line-clamp-1">{article.title}</div>
                                                    <div className="text-sm text-gray-500 line-clamp-2 mt-1">{article.excerpt}</div>
                                                    <div className="flex items-center mt-2 text-xs text-gray-400">
                                                        <Clock className="w-3 h-3 mr-1" />
                                                        {article.readTime}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                                {article.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(article.status)}`}
                                            >
                                                {article.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {new Date(article.date).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Eye className="w-4 h-4 mr-1" />
                                                {article.views}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end space-x-2">
                                                <Link
                                                    href={`/articles/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
                                                    target="_blank"
                                                    className="text-gray-400 hover:text-gray-600"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </Link>
                                                <Link href={`/admin/dashboard/articles/edit/${article.id}`} className="text-blue-600 hover:text-blue-900">
                                                    <Edit className="w-4 h-4" />
                                                </Link>
                                                <button onClick={() => handleDelete(article.id)} className="text-red-600 hover:text-red-900">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {filteredArticles.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <Search className="w-16 h-16 mx-auto" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                        <p className="text-gray-500 mb-4">Try adjusting your search terms or filters.</p>
                        <Link
                            href="/admin/articles/new"
                            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            Create New Article
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
