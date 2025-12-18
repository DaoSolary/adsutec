import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Briefcase, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { FadeOnScroll } from '../../components/FadeOnScroll';
import { StaggeredReveal } from '../../components/StaggeredReveal';

export function LandingPageConsultoria() {
  const services = [
    'Análise de necessidades tecnológicas',
    'Arquitetura de sistemas',
    'Migração de tecnologias',
    'Otimização de processos',
    'Treinamento de equipes',
    'Estratégias de transformação digital',
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Foco Estratégico',
      description: 'Soluções alinhadas com seus objetivos de negócio.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Acesso às melhores práticas e tecnologias.',
    },
    {
      icon: TrendingUp,
      title: 'Resultados',
      description: 'Aumento de eficiência e redução de custos.',
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Consultoria em TI
              <span className="block text-purple-200">Estratégica</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100 sm:text-xl">
              Transforme seu negócio com estratégias tecnológicas personalizadas.
            </p>
            <div className="mt-10">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent/90 transition-colors"
              >
                Solicitar Consultoria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Nossos Serviços</h2>
            <p className="mt-4 text-lg text-slate-600">
              Consultoria especializada em tecnologia
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                <span className="text-slate-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Benefícios</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <benefit.icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-2 text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Pronto para transformar seu negócio?</h2>
          <p className="mt-4 text-lg text-purple-100">
            Entre em contato e vamos discutir suas necessidades.
          </p>
          <Link
            to="/contato"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent/90 transition-colors"
          >
            Fale Conosco
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

