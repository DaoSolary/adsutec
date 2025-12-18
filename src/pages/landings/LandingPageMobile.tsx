import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { FadeOnScroll } from '../../components/FadeOnScroll';
import { StaggeredReveal } from '../../components/StaggeredReveal';

export function LandingPageMobile() {
  const features = [
    'Apps nativos para iOS e Android',
    'Apps híbridos com React Native',
    'Design intuitivo e moderno',
    'Performance nativa',
    'Integração com APIs',
    'Publicação nas stores',
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: 'Multiplataforma',
      description: 'Um único código para iOS e Android.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Apps rápidos e responsivos.',
    },
    {
      icon: TrendingUp,
      title: 'Engajamento',
      description: 'Aumente o engajamento dos usuários.',
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Desenvolvimento Mobile
              <span className="block text-yellow-300">Profissional</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-orange-100 sm:text-xl">
              Crie aplicativos móveis incríveis que seus usuários vão amar usar.
            </p>
            <div className="mt-10">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-8 py-3 text-base font-medium text-orange-900 hover:bg-yellow-300 transition-colors"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">O que você recebe</h2>
            <p className="mt-4 text-lg text-slate-600">
              Soluções mobile completas e personalizadas
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                <span className="text-slate-700">{feature}</span>
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

      <section className="bg-orange-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Pronto para começar?</h2>
          <p className="mt-4 text-lg text-orange-100">
            Entre em contato e vamos discutir seu projeto.
          </p>
          <Link
            to="/contato"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-yellow-400 px-8 py-3 text-base font-medium text-orange-900 hover:bg-yellow-300 transition-colors"
          >
            Fale Conosco
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

