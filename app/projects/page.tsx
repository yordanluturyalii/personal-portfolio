"use client";

import { Github,Code } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Sidebar } from '../_components/sidebar'

const projects = [
  {
    title: 'Pengelolaan Service AC',
    description: 'Project PKL untuk mengelola service AC',
    technologies: ['Laravel', 'MySQL', 'PHP'],
    codeLink: 'https://gitlab.com/vrasmedia/sumber-rejeki-perkasa-be',
  },
  {
    title: 'Sadam API',
    description: 'Rest API untuk Aplikasi Pengaduan Online',
    technologies: ['PHP', 'Laravel', 'MySQL'],
    codeLink: 'https://github.com/yordanluturyalii/backend-dinacom'
  },
  {
    title: 'EduLeap',
    description: 'Project PKL membuat website LMS',
    technologies: ['Node', 'Javascript', 'React', 'NextJS', 'MySQL', 'Prisma'],
    codeLink: 'https://github.com/yordanluturyalii/lms-learn-nextjs'
  },
  {
    title: 'BeetleHR Lite API',
    description: 'Project PKL membuat API untuk melakuakan presensi',
    technologies: ['MySQL', 'Laravel', 'PHP'],
    codeLink: 'https://gitlab.com/koding-works/beetlehr/beetlehr-lite-backend'
  }
]

export default function ProjectPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="flex flex-col md:flex-row bg-black text-white overflow-hidden">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-16 relative overflow-auto">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8">Projects</h1>
        <div className="border-t border-gray-800 w-full mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-gray-900 rounded-lg p-6 transition-all duration-300 ${hoveredProject === index ? 'border border-cyan-400' : ''
                }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-800 text-xs px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
              <div className="flex justify-end space-x-4 items-center">
                <Link href={project.codeLink} className="text-cyan-400">
                  <Code className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="https://github.com/yordanluturyalii" target="_blank" rel="noopener noreferrer" className="bg-cyan-400 text-black px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-cyan-300 transition-colors duration-300">
            <span>View more</span>
            <Github className="w-5 h-5" />
          </Link>
        </div>
        {/* Green glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl opacity-20"></div>
      </main>
    </div>
  )
}