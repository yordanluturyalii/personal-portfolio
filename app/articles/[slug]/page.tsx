import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight } from "lucide-react"

// Mock data - dalam implementasi nyata, ini bisa dari CMS atau database
const articles = {
  "building-scalable-web-applications-laravel-react": {
    id: 1,
    title: "Building Scalable Web Applications with Laravel and React",
    content: `
      <p>In today's fast-paced development environment, building scalable web applications is crucial for long-term success. This article explores how to leverage Laravel as a robust backend API and React for creating dynamic user interfaces.</p>
      
      <h2>Why Laravel and React?</h2>
      <p>Laravel provides an elegant syntax and powerful features like Eloquent ORM, built-in authentication, and comprehensive testing tools. When combined with React's component-based architecture, you get a powerful full-stack solution.</p>
      
      <h2>Setting Up the Backend</h2>
      <p>Start by creating a new Laravel project and setting up your API routes. Laravel's API resources make it easy to transform your models into JSON responses that React can consume.</p>
      
      <h2>Frontend Integration</h2>
      <p>On the React side, use libraries like Axios for API communication and implement proper state management with Context API or Redux for larger applications.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Implement proper error handling on both frontend and backend</li>
        <li>Use Laravel's validation features for data integrity</li>
        <li>Implement authentication with Laravel Sanctum</li>
        <li>Optimize API responses with pagination and caching</li>
      </ul>
      
      <p>By following these practices, you'll create maintainable and scalable applications that can grow with your business needs.</p>
    `,
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Laravel", "React", "API", "Full-stack"],
  },
  "my-journey-software-engineering-student": {
    id: 2,
    title: "My Journey as a Software Engineering Student",
    content: `
      <p>Starting my journey in software engineering at Vocational High School 8 has been an incredible experience filled with challenges, learning, and growth.</p>
      
      <h2>The Beginning</h2>
      <p>When I first started, programming seemed like a foreign language. But with dedication and consistent practice, I gradually began to understand the logic and beauty of code.</p>
      
      <h2>Key Milestones</h2>
      <p>Throughout my education, I've achieved several milestones that have shaped my career:</p>
      <ul>
        <li>Winning 1st place in Web Technology LKS Semarang 2024</li>
        <li>Securing 1st place in National Web Design Techcompfest 2023</li>
        <li>Completing multiple internships at tech companies</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <p>The most important lesson I've learned is that continuous learning is key in technology. Every project teaches you something new, and every challenge makes you a better developer.</p>
      
      <p>To fellow students: embrace the challenges, stay curious, and never stop building projects. The journey is as important as the destination.</p>
    `,
    date: "2024-01-10",
    readTime: "5 min read",
    category: "Personal",
    tags: ["Career", "Education", "Personal Growth"],
  },
  "integrating-openai-api-web-applications": {
    id: 3,
    title: "Integrating OpenAI API in Web Applications",
    content: `
      <p>Artificial Intelligence is revolutionizing how we build web applications. In this comprehensive guide, I'll show you how to integrate OpenAI API into your web applications.</p>
      
      <h2>Getting Started</h2>
      <p>First, you'll need to sign up for an OpenAI API key and understand the pricing model. The API offers various models with different capabilities and costs.</p>
      
      <h2>Implementation in Laravel</h2>
      <p>During my internship at Crackin Code Studio, I implemented a chatbot feature using OpenAI API. Here's how you can do it:</p>
      
      <pre><code>
// Laravel Controller Example
public function chat(Request $request)
{
    $response = Http::withHeaders([
        'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
        'Content-Type' => 'application/json',
    ])->post('https://api.openai.com/v1/chat/completions', [
        'model' => 'gpt-3.5-turbo',
        'messages' => $request->messages,
        'max_tokens' => 150,
    ]);
    
    return response()->json($response->json());
}
      </code></pre>
      
      <h2>Frontend Integration</h2>
      <p>On the frontend, you can use JavaScript to send requests to your backend endpoint and display the AI responses in real-time.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Implement rate limiting to control API usage</li>
        <li>Add proper error handling for API failures</li>
        <li>Cache responses when appropriate to reduce costs</li>
        <li>Sanitize user inputs before sending to the API</li>
      </ul>
      
      <p>AI integration opens up endless possibilities for creating intelligent and interactive web applications.</p>
    `,
    date: "2024-01-05",
    readTime: "12 min read",
    category: "AI & Technology",
    tags: ["AI", "OpenAI", "API", "JavaScript"],
  },
}

// Mock related articles data
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
]

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: `${article.title} - Yordan Aserama Luturyali`,
    description: article.content.substring(0, 160) + "...",
  }
}

export default function DetailArticlePage({ params }: Props) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  // Get related articles (same category, excluding current article)
  const relatedArticles = allArticles
    .filter((a) => a.category === article.category && a.slug !== params.slug)
    .slice(0, 3)

  // Get previous and next articles
  const currentIndex = allArticles.findIndex((a) => a.slug === params.slug)
  const previousArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/articles"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
              {article.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{article.title}</h1>

            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
              <div className="flex items-center text-gray-500 space-x-4">
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

              <button className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {article.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* Article Navigation */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {previousArticle ? (
              <Link
                href={`/articles/${previousArticle.slug}`}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-sm text-gray-500">Previous Article</div>
                  <div className="font-medium">{previousArticle.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextArticle ? (
              <Link
                href={`/articles/${nextArticle.slug}`}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group text-right"
              >
                <div className="text-right">
                  <div className="text-sm text-gray-500">Next Article</div>
                  <div className="font-medium">{nextArticle.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/articles/${relatedArticle.slug}`}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
                >
                  <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-3">
                    {relatedArticle.category}
                  </span>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedArticle.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {relatedArticle.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Articles */}
        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  )
}
