'use client'

import { ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Sidebar } from './_components/sidebar'
import Link from 'next/link'

export default function HomePage() {
  const [text, setText] = useState('Builder')
  const words = ['Builder', 'Developer', 'Creator', 'Backend Developer', 'Frontend Developer', 'Fullstack Developer', 'Fullstack Engineer', 'Web Developer', 'Web Engineer', 'Software Engineer', 'Software Developer']
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < words[wordIndex].length) {
        setText(words[wordIndex].substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCharIndex(0)
          setWordIndex((wordIndex + 1) % words.length)
        }, 2000) 
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [charIndex, wordIndex])

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white overflow-hidden">
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 p-8 md:p-16 relative overflow-hidden">
        <h2 className="text-xl mb-4">Yordan Aserama Luturyali</h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          I&apos;m the <span className="text-cyan-300">{text}</span>
        </h1>
        <p className="text-lg md:text-xl max-w-md">
          Hi there! good to see you here. I&apos;m a student who loves to build things.
        </p>
        <Link href={"/skill"} className="absolute bottom-8 right-8 animate-bounce">
          <ChevronRight className="w-6 h-6" />
          <span className="text-sm">Next Page</span>
        </Link>
        {/* Green glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl opacity-20"></div>
      </main> 
    </div>
  )
}