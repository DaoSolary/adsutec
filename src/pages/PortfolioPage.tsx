import { ExternalLink, Code, Smartphone, Briefcase } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { FadeOnScroll } from '../components/FadeOnScroll';
import { StaggeredReveal } from '../components/StaggeredReveal';

export function PortfolioPage() {
  const projects = [
    {
      title: 'Sistema de Gestão de Biblioteca',
      category: 'Web',
      icon: Code,
      description: 'Plataforma completa para gestão de bibliotecas, incluindo livros, autores, empréstimos, pedidos e notificações e muito mais.',
      technologies: ['Bootstrap,HTML,CSS,JavaScript', 'PHP', 'Mysql'],
      image: 'bg-gradient-to-br from-blue-500 to-purple-600',
      link: '#',
    },
    {
      title: 'Sistema de Gestão Documental',
      category: 'Web',
      icon: Smartphone,
      description: 'Plataforma completa para gestão de documentos.',
      technologies: ['Bootstrap,HTML,CSS,JavaScript', 'PHP', 'Mysql'],
      image: 'bg-gradient-to-br from-orange-500 to-red-600',
      link: '#',
    },
    {
      title: 'Sistema de Gestão Hospitalar',
      category: 'Web',
      icon: Briefcase,
      description: 'Solução completa para gestão de hospitalar, incluindo gerenciamento de pacientes, médicos, enfermeiros, exames, internações e muito mais.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      link: '#',
    },
    {
      title: 'App Alerta Público',
      category: 'web/Mobile',
      icon: Smartphone,
      description: 'Aplicativo para criar alertas públicos, com integração de mapas e notificações,botãos SOS... e muito mais',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-pink-500 to-rose-600',
      link: '#',
    },
    {
      title: 'Desaparecidos',
      category: 'Web/Mobile',
      icon: Code,
      description: 'Sistema completo para publicação de pessoas desaparecidas, com integração de mapas e notificações... e muito mais',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      link: '#',
    },
    {
      title: 'Sistema para gestão de vendas',
      category: 'Web',
      icon: Code,
      description: 'Sistema completo para gestão de vendas, desenvolvido para ajudar empresas a controlar todo o processo comercial de forma simples, rápida e eficiente. A plataforma integra mais de 12 módulos que permitem gerir clientes, produtos, vendas, faturação, pagamentos e relatórios em tempo real..',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      link: '#',
    },
    {
      title: 'Sistema para gestão para farmácia',
      category: 'Web',
      icon: Code,
      description: 'Sistema especializado para gestão de farmácias, criado para automatizar e simplificar os principais processos do dia a dia. A solução permite gerir produtos farmacêuticos, vendas, stock, clientes e relatórios, garantindo maior controlo e eficiência operacional..',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      link: '#',
    },
  ];

  const stats = [
    { label: 'Projetos Entregues', value: '40+' },
    { label: 'Clientes Satisfeitos', value: '70+' },
    { label: 'Anos de Experiência', value: '6+' },
    { label: 'Taxa de Sucesso', value: '89%' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <ScrollReveal direction="fade" delay={0.1}>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Nosso Portfólio
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Cases de sucesso que demonstram nossa expertise e compromisso com a excelência
          </p>
        </div>
      </ScrollReveal>

      {/* Stats */}
      <FadeOnScroll>
        <StaggeredReveal
          className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4"
          direction="up"
          staggerDelay={0.1}
        >
          {stats.map((stat, index) => (
            <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:scale-105">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-slate-600">{stat.label}</div>
            </div>
          ))}
        </StaggeredReveal>
      </FadeOnScroll>

      {/* Projects Grid */}
      <FadeOnScroll>
        <StaggeredReveal
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          direction="up"
          staggerDelay={0.15}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <project.icon className="h-16 w-16 text-white opacity-80 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">{project.category}</span>
                  <a
                    href={project.link}
                    className="text-slate-400 hover:text-primary transition-colors"
                    aria-label={`Ver projeto ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </StaggeredReveal>
      </FadeOnScroll>

      {/* CTA */}
      <FadeOnScroll>
        <section className="mt-16 rounded-lg bg-slate-50 p-8 text-center">
          <ScrollReveal direction="fade" delay={0.2}>
            <h2 className="text-2xl font-bold text-slate-900">Quer fazer parte do nosso portfólio?</h2>
            <p className="mt-4 text-slate-600">
              Entre em contato e vamos criar algo incrível juntos.
            </p>
            <a
              href="/contato"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Fale Conosco
            </a>
          </ScrollReveal>
        </section>
      </FadeOnScroll>
    </div>
  );
}

