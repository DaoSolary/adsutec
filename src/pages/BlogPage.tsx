import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ScrollReveal } from '../components/ScrollReveal';
import { FadeOnScroll } from '../components/FadeOnScroll';
import { StaggeredReveal } from '../components/StaggeredReveal';

const blogPosts = [
  {
    slug: 'como-escolher-tecnologia-projeto',
    title: 'Como Escolher a Tecnologia Ideal para Seu Projeto',
    excerpt: 'Guia completo para escolher as melhores tecnologias baseado nas necessidades do seu negócio.',
    author: 'João Silva',
    date: new Date('2024-01-15'),
    category: 'Tecnologia',
    image: 'bg-gradient-to-br from-blue-500 to-purple-600',
  },
  {
    slug: 'tendencias-mobile-2024',
    title: 'Tendências de Desenvolvimento Mobile para 2024',
    excerpt: 'Descubra as principais tendências que vão dominar o desenvolvimento mobile este ano.',
    author: 'Pedro Costa',
    date: new Date('2024-01-10'),
    category: 'Mobile',
    image: 'bg-gradient-to-br from-orange-500 to-red-600',
  },
  {
    slug: 'otimizacao-seo-site',
    title: 'Guia Completo de Otimização SEO para Seu Site',
    excerpt: 'Estratégias práticas para melhorar o posicionamento do seu site nos mecanismos de busca.',
    author: 'Maria Santos',
    date: new Date('2024-01-05'),
    category: 'SEO',
    image: 'bg-gradient-to-br from-green-500 to-teal-600',
  },
  {
    slug: 'seguranca-dados-lgpd',
    title: 'Segurança de Dados e Conformidade com LGPD',
    excerpt: 'Como garantir a segurança dos dados e estar em conformidade com a LGPD.',
    author: 'Ana Oliveira',
    date: new Date('2023-12-28'),
    category: 'Segurança',
    image: 'bg-gradient-to-br from-indigo-500 to-blue-600',
  },
  {
    slug: 'cloud-computing-beneficios',
    title: 'Os Benefícios do Cloud Computing para Empresas',
    excerpt: 'Entenda como a computação em nuvem pode transformar sua infraestrutura de TI.',
    author: 'Carlos Mendes',
    date: new Date('2023-12-20'),
    category: 'Cloud',
    image: 'bg-gradient-to-br from-pink-500 to-rose-600',
  },
  {
    slug: 'metodologias-ageis-desenvolvimento',
    title: 'Metodologias Ágeis no Desenvolvimento de Software',
    excerpt: 'Como aplicar Scrum, Kanban e outras metodologias ágeis para melhorar seus projetos.',
    author: 'Sofia Ferreira',
    date: new Date('2023-12-15'),
    category: 'Gestão',
    image: 'bg-gradient-to-br from-yellow-500 to-orange-600',
  },
];

export function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <ScrollReveal direction="fade" delay={0.1}>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Blog & Artigos Técnicos
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Conteúdo técnico, dicas e tendências sobre tecnologia e desenvolvimento
          </p>
        </div>
      </ScrollReveal>

      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <FadeOnScroll>
          <div className="mt-12">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Destaque</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <Link
                to={`/blog/${blogPosts[0].slug}`}
                className="group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className={`h-64 ${blogPosts[0].image} flex items-center justify-center`}>
                  <span className="text-white text-2xl font-bold">{blogPosts[0].category}</span>
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-primary">{blogPosts[0].category}</span>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="mt-2 text-slate-600">{blogPosts[0].excerpt}</p>
                  <div className="mt-4 flex items-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{format(blogPosts[0].date, "d 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </FadeOnScroll>
      )}

      {/* Posts Grid */}
      <FadeOnScroll>
        <div className="mt-12">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Artigos</h2>
          </ScrollReveal>
          <StaggeredReveal
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            direction="up"
            staggerDelay={0.1}
          >
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className={`h-48 ${post.image} flex items-center justify-center`}>
                <span className="text-white text-xl font-bold">{post.category}</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary">{post.category}</span>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-slate-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{format(post.date, 'dd/MM/yyyy')}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </Link>
          ))}
          </StaggeredReveal>
        </div>
      </FadeOnScroll>
    </div>
  );
}

