import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Briefcase, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ScrollReveal';
import { FadeOnScroll } from '../components/FadeOnScroll';
import { ParallaxSection } from '../components/ParallaxSection';
import { StaggeredReveal } from '../components/StaggeredReveal';
export function HomePage() {
  return (
    <>
      <SEO
        title="Início"
        description="Adsu-Tec - Transformamos ideias em realidade digital com soluções tecnológicas inovadoras em desenvolvimento web, mobile e consultoria."
        keywords="desenvolvimento web, desenvolvimento mobile, consultoria TI, software Angola, tecnologia"
      />
      <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        id="hero-section"
        className="relative text-white overflow-hidden" 
        aria-label="Seção principal"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/hero-bg.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-blue-600/85 to-blue-800/90" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 sm:pt-40 lg:px-8 lg:pt-48 lg:pb-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transformamos Ideias em
              <span className="block text-accent"> Realidade Digital</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-blue-100 sm:text-xl">
              Soluções tecnológicas inovadoras em desenvolvimento web, mobile e consultoria.
              Impulsione seu negócio com tecnologia de ponta.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Ver Portfólio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FadeOnScroll>
        <section className="py-24 sm:py-32" aria-labelledby="features-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="text-center">
                <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Por que escolher a Adsu-Tec?
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Oferecemos soluções completas e personalizadas para seu negócio
                </p>
              </div>
            </ScrollReveal>
            <StaggeredReveal
              className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
              direction="up"
              staggerDelay={0.15}
            >
              {[
                {
                  icon: Code,
                  title: 'Desenvolvimento Web',
                  description: 'Sites e aplicações web modernas, responsivas e otimizadas.',
                },
                {
                  icon: Smartphone,
                  title: 'Desenvolvimento Mobile',
                  description: 'Apps nativos e híbridos para iOS e Android.',
                },
                {
                  icon: Briefcase,
                  title: 'Consultoria Especializada',
                  description: 'Estratégias tecnológicas para impulsionar seu negócio.',
                },
                {
                  icon: TrendingUp,
                  title: 'Resultados Comprovados',
                  description: 'Cases de sucesso e clientes satisfeitos.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                >
                  <feature.icon className="h-10 w-10 text-primary transition-transform duration-300 hover:scale-110" />
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-slate-600">{feature.description}</p>
                </div>
              ))}
            </StaggeredReveal>
          </div>
        </section>
      </FadeOnScroll>

      {/* Stats Section */}
      <FadeOnScroll>
        <ParallaxSection speed={0.3}>
          <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <StaggeredReveal
                className="grid grid-cols-2 gap-8 md:grid-cols-4"
                direction="up"
                staggerDelay={0.2}
              >
                {[
                  { icon: Users, value: '70+', label: 'Clientes Satisfeitos' },
                  { icon: Code, value: '40+', label: 'Projetos Entregues' },
                  { icon: Award, value: '6+', label: 'Anos de Experiência' },
                  { icon: CheckCircle, value: '89%', label: 'Taxa de Satisfação' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center transform transition-all duration-500 hover:scale-110"
                  >
                    <stat.icon className="mx-auto h-12 w-12 text-primary transition-transform duration-300 hover:rotate-12" />
                    <div className="mt-4 text-4xl font-bold text-slate-900 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </StaggeredReveal>
            </div>
          </section>
        </ParallaxSection>
      </FadeOnScroll>

      {/* CTA Section */}
      <FadeOnScroll>
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="fade" delay={0.2}>
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Pronto para transformar seu negócio?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                  Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos.
                </p>
                <div className="mt-8">
                  <Link
                    to="/contato"
                    className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Fale Conosco
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </FadeOnScroll>
    </div>
    </>
  );
}

