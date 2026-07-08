'use client'

import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Blog() {
  const { t } = useLanguage()

  const posts = [
    {
      slug: 'getting-started-nextjs',
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to build modern web applications',
      date: '2024-01-15',
      readTime: '5 min'
    },
    {
      slug: 'mastering-typescript',
      title: 'Mastering TypeScript',
      excerpt: 'Deep dive into TypeScript features',
      date: '2024-01-10',
      readTime: '8 min'
    }
  ]

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('Latest', 'บทความ')} <span className="text-gradient">{t('Blog Posts', 'ล่าสุด')}</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-500 hover:text-primary-600"
                >
                  {t('Read More', 'อ่านเพิ่ม')} 
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 text-white hover:bg-primary-600 rounded-md font-medium transition-colors"
          >
            {t('View All Posts', 'ดูบทความทั้งหมด')}
          </Link>
        </div>
      </div>
    </section>
  )
}