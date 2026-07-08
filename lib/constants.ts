export const SITE_CONFIG = {
  name: 'Portfolio',
  description: 'Computer Science Student Portfolio',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'your.email@example.com',
  },
}

export const NAV_ITEMS = [
  { href: '#home', label: 'Home', labelTh: 'หน้าแรก' },
  { href: '#about', label: 'About', labelTh: 'เกี่ยวกับ' },
  { href: '#skills', label: 'Skills', labelTh: 'ทักษะ' },
  { href: '#projects', label: 'Projects', labelTh: 'ผลงาน' },
  { href: '#research', label: 'Research', labelTh: 'งานวิจัย' },
  { href: '#blog', label: 'Blog', labelTh: 'บล็อก' },
  { href: '#contact', label: 'Contact', labelTh: 'ติดต่อ' },
]