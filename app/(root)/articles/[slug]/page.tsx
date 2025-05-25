import type { Metadata } from "next"
import DetailArticle from "./__components/detail-article"

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
      tags: ["Laravel", "React", "API", "Full-stack"],
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
`
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
`
  },
  {
      id: 3,
      title: "Integrating OpenAI API in Web Applications",
      excerpt: "A comprehensive guide on how to integrate OpenAI API into your web applications for AI-powered features.",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "AI & Technology",
      slug: "integrating-openai-api-web-applications",
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
`
  }
]

export const metadata: Metadata = {
  title: "Test",
  description: "Halow"
} 

const DetailArticlePage = () => {
  return (
    <>
      <DetailArticle articles={articles} />
    </>
  )
}

export default DetailArticlePage