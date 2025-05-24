"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"

// Mock data - dalam implementasi nyata, ini bisa dari CMS atau database
const allArticles = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Laravel and React",
    excerpt:
      "Learn how to create robust full-stack applications using Laravel as backend API and React for the frontend.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    slug: "building-scalable-web-applications-laravel-react",
    tags: ["Laravel", "React", "API", "Full-stack"],
  },
  {
    id: 2,
    title: "My Journey as a Software Engineering Student",
    excerpt: "Sharing my experience and lessons learned during my vocational education in software engineering.",
    date: "2024-01-10",
    readTime: "5 min read",
    category: "Personal",
    slug: "my-journey-software-engineering-student",
    tags: ["Career", "Education", "Personal Growth"],
  },
  {
    id: 3,
    title: "Integrating OpenAI API in Web Applications",
    excerpt: "A comprehensive guide on how to integrate OpenAI API into your web applications for AI-powered features.",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "AI & Technology",
    slug: "integrating-openai-api-web-applications",
    tags: ["AI", "OpenAI", "API", "JavaScript"],
  },
  {
    id: 4,
    title: "Next.js 15 New Features and Best Practices",
    excerpt: "Explore the latest features in Next.js 15 and learn best practices for modern web development.",
    date: "2024-01-20",
    readTime: "10 min read",
    category: "Web Development",
    slug: "nextjs-15-new-features-best-practices",
    tags: ["Next.js", "React", "Web Development", "Performance"],
  },
  {
    id: 5,
    title: "Database Design Patterns for Laravel Applications",
    excerpt: "Learn essential database design patterns and optimization techniques for Laravel applications.",
    date: "2024-01-18",
    readTime: "15 min read",
    category: "Backend Development",
    slug: "database-design-patterns-laravel",
    tags: ["Laravel", "Database", "MySQL", "Optimization"],
  },
  {
    id: 6,
    title: "Building Real-time Chat with Socket.io and React",
    excerpt: "Step-by-step guide to create a real-time chat application using Socket.io and React.",
    date: "2024-01-12",
    readTime: "20 min read",
    category: "Web Development",
    slug: "realtime-chat-socketio-react",
    tags: ["Socket.io", "React", "Real-time", "WebSocket"],
  },
  {
    id: 7,
    title: "Winning Programming Competitions: Tips and Strategies",
    excerpt: "Share my experience and strategies for winning programming competitions and technical challenges.",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Personal",
    slug: "winning-programming-competitions-tips",
    tags: ["Competition", "Programming", "Strategy", "Tips"],
  },
  {
    id: 8,
    title: "TypeScript Best Practices for Large Applications",
    excerpt: "Essential TypeScript patterns and practices for building maintainable large-scale applications.",
    date: "2024-01-03",
    readTime: "18 min read",
    category: "Web Development",
    slug: "typescript-best-practices-large-applications",
    tags: ["TypeScript", "JavaScript", "Best Practices", "Architecture"],
  },
]

const categories = ["All", "Web Development", "Backend Development", "AI & Technology", "Personal"]
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "shortest", label: "Shortest Read" },
  { value: "longest", label: "Longest Read" },
]

const ARTICLES_PER_PAGE = 4

export default function ArticlesClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    const filtered = allArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    // Sort articles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "shortest":
          return Number.parseInt(a.readTime) - Number.parseInt(b.readTime)
        case "longest":
          return Number.parseInt(b.readTime) - Number.parseInt(a.readTime)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedArticles.length / ARTICLES_PER_PAGE)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const endIndex = startIndex + ARTICLES_PER_PAGE
  const currentArticles = filteredAndSortedArticles.slice(startIndex, endIndex)

  // Reset to first page when filters change
  useMemo(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, sortBy])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Articles</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sharing my thoughts and experiences about web development, programming, and technology.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, tags, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Filter Toggle Button (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-4"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters & Sort
          </button>

          {/* Filters and Sort */}
          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing {currentArticles.length} of {filteredAndSortedArticles.length} articles
              {searchTerm && (
                <span className="ml-1">
                  for "<span className="font-medium text-gray-900">{searchTerm}</span>"
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        {currentArticles.length > 0 ? (
          <div className="space-y-8 mb-12">
            {currentArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-2 md:mb-0">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
                setSortBy("newest")
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
