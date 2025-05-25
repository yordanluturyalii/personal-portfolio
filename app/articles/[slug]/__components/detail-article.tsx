'use client'

import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

type Article = {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
    content: string;
}

type DetailArticleProps = {
    articles: Article[];
}

const DetailArticle = ({articles}: DetailArticleProps) => {
    const params = useParams();
    const article = articles.find((article) => article.slug === params.slug);

    if (!article) {
        notFound()
    }

    const relatedArticles = articles
        .filter((a) => a.category === article.category && a.slug !== params.slug)
        .slice(0, 3)

    const currentIndex = articles.findIndex((a) => a.slug === params.slug)
    const previousArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
    const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

    return (
        <section className="min-h-screen bg-white py-20">
            <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                <Link href={"/articles"} className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Articles
                </Link>

                <article className="max-w-none">
                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
                            {article.category}
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Judul</h1>

                        <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                            <div className="flex items-center text-gray-500 space-x-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {new Date("2024-01-15").toLocaleDateString("id-ID", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    12 minutes
                                </div>
                            </div>
                        </div>

                        <div
                            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 mt-5"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </div>
                </article>

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
                {
                    relatedArticles.length > 0 && (
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
                    )
                }

                <div className="text-center mt-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        View All Articles
                    </Link>
                </div>
            </div >
        </section >
    )
}

export default DetailArticle