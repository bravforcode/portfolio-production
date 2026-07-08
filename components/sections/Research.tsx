'use client'

import { FileText, Download, Calendar, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Research() {
  const { t } = useLanguage()

  const papers = [
    {
      title: 'Deep Learning Approaches for Natural Language Processing',
      authors: 'Your Name, Dr. Smith, et al.',
      conference: 'IEEE International Conference 2024',
      date: 'March 2024',
      citations: 45,
      pdf: '#'
    },
    {
      title: 'Quantum Computing Applications in Cryptography',
      authors: 'Your Name, Prof. Johnson',
      conference: 'ACM Symposium 2023',
      date: 'November 2023',
      citations: 32,
      pdf: '#'
    }
  ]

  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('Research', 'งานวิจัย')} <span className="text-gradient">{t('Publications', 'ตีพิมพ์')}</span>
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {papers.map((paper, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-2">
                      <Users size={16} />
                      <span>{paper.authors}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {paper.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText size={14} />
                        {paper.citations} citations
                      </span>
                    </div>
                  </div>
                  <a 
                    href={paper.pdf}
                    className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Download PDF"
                  >
                    <Download size={20} />
                  </a>
                </div>
                <div className="text-primary-500 font-medium text-sm">
                  {paper.conference}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}