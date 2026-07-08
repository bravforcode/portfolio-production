'use client'

import { Award, BookOpen, Code, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const stats = [
    { icon: Code, value: '50+', label: t('Projects', 'โปรเจค') },
    { icon: Award, value: '10+', label: t('Awards', 'รางวัล') },
    { icon: BookOpen, value: '5', label: t('Research Papers', 'งานวิจัย') },
    { icon: Users, value: '20+', label: t('Team Projects', 'งานทีม') }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('About', 'เกี่ยวกับ')} <span className="text-gradient">{t('Me', 'ฉัน')}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              {t('Passionate about', 'หลงใหลใน')} <span className="text-primary-500">{t('Innovation', 'นวัตกรรม')}</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t(
                "I'm a Computer Science student with a deep passion for creating innovative solutions through technology. My journey in tech began with curiosity about how things work and has evolved into expertise in full-stack development, artificial intelligence, and system architecture.",
                'ฉันเป็นนักศึกษาวิทยาการคอมพิวเตอร์ที่มีความหลงใหลในการสร้างสรรค์นวัตกรรมผ่านเทคโนโลยี เริ่มต้นจากความอยากรู้อยากเห็นและพัฒนามาเป็นความเชี่ยวชาญใน full-stack development, AI และ system architecture'
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary-500" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}