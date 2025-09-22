'use client'

import { useState } from 'react'
import CustomTheme from '@/components/CustomTheme'
import Navbar from '@/components/Navbar'
import HomePage from '@/components/HomePage'
import AboutPage from '@/components/AboutPage'
import ProjectsPage from '@/components/ProjectsPage'
import HangmanGame from '@/components/HangmanGame'

export default function Page() {
  const [currentPage, setCurrentPage] = useState('Início')

  const renderPage = () => {
    switch (currentPage) {
      case 'Início': return <HomePage />
      case 'Sobre Mim': return <AboutPage />
      case 'Projetos': return <ProjectsPage />
      case 'Jogo da Forca': return <HangmanGame />
      default: return <HomePage />
    }
  }

  return (
    <div>
      <CustomTheme />
      <Navbar onNavClick={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  )
}
