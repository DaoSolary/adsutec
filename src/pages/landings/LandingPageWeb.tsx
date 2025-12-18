import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Smartphone, Zap, Shield, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { FadeOnScroll } from '../../components/FadeOnScroll';
import { StaggeredReveal } from '../../components/StaggeredReveal';

export function LandingPageWeb() {
  const features = [
    'Sites responsivos e otimizados para mobile',
    'Performance e velocidade excepcionais',
    'SEO otimizado para mecanismos de busca',
    'Design moderno e profissional',
    'Integração com APIs e serviços',
    'Painel administrativo personalizado',
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Performance',
      description: 'Sites rápidos e otimizados que carregam em segundos.',
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Proteção completa contra ameaças e vulnerabilidades.',
    },
    {
      icon: TrendingUp,
      title: 'Conversão',
      description: 'Design focado em conversão e experiência do usuário.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade" delay={0.1}>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Desenvolvimento Web
                <span className="block text-accent">de Alto Nível</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 sm:text-xl">
                Crie sites e aplicações web modernas, rápidas e otimizadas que impulsionam seu negócio.
              </p>
              <div className="mt-10">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <FadeOnScroll>
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-900">O que você recebe</h2>
                <p className="mt-4 text-lg text-slate-600">
                  Soluções web completas e personalizadas para suas necessidades
                </p>
              </div>
            </ScrollReveal>
            <StaggeredReveal
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
              direction="up"
              staggerDelay={0.1}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </StaggeredReveal>
          </div>
        </section>
      </FadeOnScroll>

      {/* Benefits */}
      <FadeOnScroll>
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-900">Benefícios</h2>
              </div>
            </ScrollReveal>
            <StaggeredReveal
              className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
              direction="up"
              staggerDelay={0.15}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                  <benefit.icon className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </StaggeredReveal>
          </div>
        </section>
      </FadeOnScroll>

      {/* CTA */}
      <FadeOnScroll>
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal direction="fade" delay={0.2}>
              <h2 className="text-3xl font-bold text-white">Pronto para começar?</h2>
              <p className="mt-4 text-lg text-blue-100">
                Entre em contato e vamos discutir seu projeto.
              </p>
              <Link
                to="/contato"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent/90 transition-all duration-300 hover:scale-105"
              >
                Fale Conosco
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </FadeOnScroll>
    </div>
  );
}

