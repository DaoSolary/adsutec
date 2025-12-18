import { Link } from 'react-router-dom';
import { Code, Smartphone, Briefcase, Zap, Database, Shield, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { FadeOnScroll } from '../components/FadeOnScroll';
import { StaggeredReveal } from '../components/StaggeredReveal';

export function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Criação de sites e aplicações web modernas, responsivas e otimizadas para SEO.',
      features: [
        'Sites institucionais e corporativos',
        'E-commerce e lojas virtuais',
        'Aplicações web complexas',
        'PWA (Progressive Web Apps)',
        'Integração com APIs',
      ],
      link: '/servicos/desenvolvimento-web',
    },
    {
      icon: Smartphone,
      title: 'Desenvolvimento Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com performance excepcional.',
      features: [
        'Apps iOS nativos (Swift)',
        'Apps Android nativos (Kotlin)',
        'Apps híbridos (React Native)',
        'Manutenção e atualizações',
        'Publicação nas stores',
      ],
      link: '/servicos/desenvolvimento-mobile',
    },
    {
      icon: Briefcase,
      title: 'Consultoria em TI',
      description: 'Estratégias tecnológicas personalizadas para transformação digital.',
      features: [
        'Análise de necessidades',
        'Arquitetura de sistemas',
        'Migração de tecnologias',
        'Otimização de processos',
        'Treinamento de equipes',
      ],
      link: '/servicos/consultoria',
    },
    {
      icon: Zap,
      title: 'Integrações',
      description: 'Conecte seus sistemas e automatize processos com integrações eficientes.',
      features: [
        'APIs REST e GraphQL',
        'Integração com ERPs',
        'Webhooks e automações',
        'Sincronização de dados',
        'Integração com serviços cloud',
      ],
    },
    {
      icon: Database,
      title: 'Banco de Dados',
      description: 'Design, implementação e otimização de bancos de dados robustos.',
      features: [
        'Modelagem de dados',
        'Otimização de queries',
        'Backup e recuperação',
        'Migração de dados',
        'Consultoria em performance',
      ],
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Proteção completa para seus sistemas e dados sensíveis.',
      features: [
        'Auditoria de segurança',
        'Implementação de SSL/TLS',
        'Proteção contra ataques',
        'Conformidade LGPD',
        'Monitoramento contínuo',
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <ScrollReveal direction="fade" delay={0.1}>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Nossos Serviços
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Soluções completas em tecnologia para impulsionar seu negócio
          </p>
        </div>
      </ScrollReveal>

      {/* Services Grid */}
      <FadeOnScroll>
        <StaggeredReveal
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          direction="up"
          staggerDelay={0.1}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <service.icon className="h-12 w-12 text-primary transition-transform duration-300 hover:scale-110" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-slate-600">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600">
                    <span className="mr-2 text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {service.link && (
                <Link
                  to={service.link}
                  className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:underline"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </StaggeredReveal>
      </FadeOnScroll>

      {/* CTA Section */}
      <FadeOnScroll>
        <section className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-center text-white">
          <ScrollReveal direction="fade" delay={0.2}>
            <h2 className="text-2xl font-bold">Precisa de uma solução personalizada?</h2>
            <p className="mt-4 text-lg text-blue-100">
              Entre em contato e vamos discutir como podemos ajudar seu negócio.
            </p>
            <Link
              to="/contato"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </ScrollReveal>
        </section>
      </FadeOnScroll>
    </div>
  );
}

