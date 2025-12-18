import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { FadeOnScroll } from '../components/FadeOnScroll';
import { StaggeredReveal } from '../components/StaggeredReveal';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CEO, TechSolutions Angola',
    company: 'TechSolutions',
    rating: 5,
    text: 'A Adsu-Tec transformou completamente nossa presença digital. O site que desenvolveram superou todas as expectativas e aumentou significativamente nosso tráfego e conversões.',
    project: 'Site Institucional',
  },
  {
    name: 'Ana Silva',
    role: 'Diretora de Marketing, E-commerce Plus',
    company: 'E-commerce Plus',
    rating: 5,
    text: 'Trabalhar com a Adsu-Tec foi uma experiência excepcional. Profissionais competentes, comunicação clara e entrega no prazo. Recomendo sem hesitação!',
    project: 'E-commerce Completo',
  },
  {
    name: 'João Santos',
    role: 'Fundador, AppFitness',
    company: 'AppFitness',
    rating: 5,
    text: 'O aplicativo desenvolvido pela Adsu-Tec é simplesmente incrível. Interface intuitiva, performance excelente e suporte técnico impecável. Nossos usuários adoram!',
    project: 'App Mobile',
  },
  {
    name: 'Maria Costa',
    role: 'CTO, Inovação Digital',
    company: 'Inovação Digital',
    rating: 5,
    text: 'A consultoria da Adsu-Tec nos ajudou a modernizar nossa infraestrutura de TI. Eles entenderam perfeitamente nossas necessidades e entregaram soluções que realmente funcionam.',
    project: 'Consultoria em TI',
  },
  {
    name: 'Pedro Oliveira',
    role: 'Gerente de Projetos, SistemaRH',
    company: 'SistemaRH',
    rating: 5,
    text: 'Sistema de gestão de RH desenvolvido pela Adsu-Tec revolucionou nossos processos internos. Automatizamos tarefas que antes levavam horas e agora são feitas em minutos.',
    project: 'Sistema de Gestão',
  },
  {
    name: 'Sofia Ferreira',
    role: 'Diretora Comercial, DeliveryFast',
    company: 'DeliveryFast',
    rating: 5,
    text: 'A integração com sistemas de pagamento e rastreamento que a Adsu-Tec implementou foi fundamental para o sucesso do nosso negócio. Profissionais de altíssimo nível!',
    project: 'Integrações',
  },
];

export function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <ScrollReveal direction="fade" delay={0.1}>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Depoimentos de Clientes
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Veja o que nossos clientes têm a dizer sobre nosso trabalho
          </p>
        </div>
      </ScrollReveal>

      {/* Stats */}
      <FadeOnScroll>
        <StaggeredReveal
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          direction="up"
          staggerDelay={0.1}
        >
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
          <div className="text-4xl font-bold text-primary">98%</div>
          <div className="mt-2 text-sm font-medium text-slate-600">Taxa de Satisfação</div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
          <div className="text-4xl font-bold text-primary">100+</div>
          <div className="mt-2 text-sm font-medium text-slate-600">Clientes Satisfeitos</div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
          <div className="text-4xl font-bold text-primary">4.9/5</div>
          <div className="mt-2 text-sm font-medium text-slate-600">Avaliação Média</div>
        </div>
        </StaggeredReveal>
      </FadeOnScroll>

      {/* Testimonials Grid */}
      <FadeOnScroll>
        <StaggeredReveal
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          direction="up"
          staggerDelay={0.15}
        >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <Quote className="absolute top-4 right-4 h-8 w-8 text-slate-200" />
            <div className="mb-4 flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mb-6 text-slate-700 relative z-10">{testimonial.text}</p>
            <div className="border-t border-slate-200 pt-4">
              <div className="font-semibold text-slate-900">{testimonial.name}</div>
              <div className="text-sm text-slate-600">{testimonial.role}</div>
              <div className="mt-2 text-xs font-medium text-primary">{testimonial.project}</div>
            </div>
          </div>
        ))}
        </StaggeredReveal>
      </FadeOnScroll>

      {/* CTA */}
      <FadeOnScroll>
        <section className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-center text-white">
          <ScrollReveal direction="fade" delay={0.2}>
        <h2 className="text-2xl font-bold">Quer fazer parte dos nossos cases de sucesso?</h2>
        <p className="mt-4 text-lg text-blue-100">
          Entre em contato e vamos criar algo incrível juntos.
        </p>
        <a
          href="/contato"
          className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-base font-medium text-white hover:bg-accent/90 transition-colors"
        >
          Solicitar Orçamento
        </a>
          </ScrollReveal>
        </section>
      </FadeOnScroll>
    </div>
  );
}

