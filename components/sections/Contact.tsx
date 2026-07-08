'use client'

import { useState } from 'react'
import { Send, Mail, MapPin, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { useLanguage } from '@/contexts/LanguageContext'
import { sendEmail } from '@/lib/emailjs'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await sendEmail(formData)
    
    if (result.success) {
      alert(t('Message sent successfully!', 'ส่งข้อความสำเร็จ!'))
      setFormData({ name: '', email: '', subject: '', message: '' })
    } else {
      alert(t('Failed to send message', 'ส่งข้อความไม่สำเร็จ'))
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('Get In', 'ติดต่อ')} <span className="text-gradient">{t('Touch', 'เรา')}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('Contact Information', 'ข้อมูลติดต่อ')}</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'your.email@example.com' },
                { icon: Phone, label: 'Phone', value: '+66 123 456 789' },
                { icon: MapPin, label: 'Location', value: 'Bangkok, Thailand' }
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <Card key={idx}>
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{item.label}</div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('Name', 'ชื่อ')}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{t('Email', 'อีเมล')}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('Subject', 'หัวข้อ')}</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('Message', 'ข้อความ')}</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:border-primary-500 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white hover:bg-primary-600 rounded-lg font-medium transition-colors"
                >
                  <Send size={18} />
                  {t('Send Message', 'ส่งข้อความ')}
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}