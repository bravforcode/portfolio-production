'use client'

import { Code2, Database, Globe, Cpu } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      skills: [
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'C++', level: 85 },
        { name: 'Java', level: 80 }
      ]
    },
    {
      icon: Globe,
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 92 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Vue.js', level: 75 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      icon: Database,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'GraphQL', level: 78 }
      ]
    },
    {
      icon: Cpu,
      title: 'AI/ML',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Computer Vision', level: 75 },
        { name: 'NLP', level: 72 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('Technical', 'ทักษะ')} <span className="text-gradient">{t('Skills', 'ความสามารถ')}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-500" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.name}</span>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}