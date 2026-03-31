import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Портфолио',
  description: 'Делаем продуктовый дизайн для корпораций с 2015 года. Обновляем сайт и коммуникации банка ВТБ, создаем внутренние продукты X5.',
  alternates: {
    canonical: 'https://pinkman.ru/projects/',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
