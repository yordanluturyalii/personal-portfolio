import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Articles - Yordan Aserama Luturyali",
  description: "Read my latest articles about web development, programming, and technology.",
}

// Mock data - dalam implementasi nyata, ini bisa dari CMS atau database
const articles = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Laravel and React",
    excerpt:
      "Learn how to create robust full-stack applications using Laravel as backend API and React for the frontend.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    slug: "building-scalable-web-applications-laravel-react",
  },
  {
    id: 2,
    title: "My Journey as a Software Engineering Student",
    excerpt: "Sharing my experience and lessons learned during my vocational education in software engineering.",
    date: "2024-01-10",
    readTime: "5 min read",
    category: "Personal",
    slug: "my-journey-software-engineering-student",
  },
  {
    id: 3,
    title: "Integrating OpenAI API in Web Applications",
    excerpt: "A comprehensive guide on how to integrate OpenAI API into your web applications for AI-powered features.",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "AI & Technology",
    slug: "integrating-openai-api-web-applications",
  },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Articles</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sharing my thoughts and experiences about web development, programming, and technology.
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article) => (
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

              <p className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>

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
      </div>
    </div>
  )
}
