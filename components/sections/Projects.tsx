'use client'

import { useState } from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Code Assistant',
      description: 'An intelligent coding assistant using machine learning',
      image: '🤖',
      tags: ['AI/ML', 'Python', 'TensorFlow'],
      category: 'ai',
      github: 'https://github.com',
      live: 'https://example.com',
      stars: 342
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      stars: 256
    }
  ]

  const categories = [
    { value: 'all', label: t('All Projects', 'ทั้งหมด') },
    { value: 'web', label: 'Web Apps' },
    { value: 'ai', label: 'AI/ML' },
    { value: 'mobile', label: 'Mobile' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('Featured', 'ผลงาน')} <span className="text-gradient">{t('Projects', 'โปรเจค')}</span>
        </h2>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat.value
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">
                      <Github size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}