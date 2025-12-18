import { Target, Heart, History, Users, Award, Lightbulb } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ScrollReveal';
import { FadeOnScroll } from '../components/FadeOnScroll';
import { StaggeredReveal } from '../components/StaggeredReveal';

export function AboutPage() {
  return (
    <>
      <SEO
        title="Sobre Nós"
        description="Conheça a Adsu-Tec: nossa missão, valores, história e equipe. Mais de 15 anos transformando ideias em realidade digital."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <ScrollReveal direction="fade" delay={0.1}>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Sobre a Adsu-Tec
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Transformando o futuro digital com inovação e excelência
          </p>
        </div>
      </ScrollReveal>

      {/* Missão */}
      <FadeOnScroll>
        <section className="mt-16">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
              <div className="flex items-start space-x-4">
                <Target className="h-12 w-12 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold">Nossa Missão</h2>
                  <p className="mt-4 text-lg text-blue-100">
                    Proporcionar soluções tecnológicas inovadoras que transformem ideias em realidade,
                    impulsionando o crescimento e o sucesso de nossos clientes através da excelência
                    em desenvolvimento de software, consultoria estratégica e suporte contínuo.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </FadeOnScroll>

      {/* Valores */}
      <FadeOnScroll>
        <section className="mt-16">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl font-bold text-center text-slate-900">Nossos Valores</h2>
          </ScrollReveal>
          <StaggeredReveal
            className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            direction="up"
            staggerDelay={0.1}
          >
            {[
              {
                icon: Heart,
                title: 'Comprometimento',
                description: 'Dedicação total ao sucesso de cada projeto e cliente.',
              },
              {
                icon: Lightbulb,
                title: 'Inovação',
                description: 'Sempre buscando as melhores e mais modernas soluções.',
              },
              {
                icon: Award,
                title: 'Excelência',
                description: 'Qualidade superior em cada linha de código escrita.',
              },
              {
                icon: Users,
                title: 'Colaboração',
                description: 'Trabalho em equipe e comunicação transparente.',
              },
              {
                icon: Target,
                title: 'Foco no Cliente',
                description: 'O cliente sempre em primeiro lugar.',
              },
              {
                icon: History,
                title: 'Integridade',
                description: 'Ética e transparência em todas as relações.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <value.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-slate-600">{value.description}</p>
              </div>
            ))}
          </StaggeredReveal>
        </section>
      </FadeOnScroll>

      {/* História */}
      <FadeOnScroll>
        <section className="mt-16">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="rounded-lg bg-slate-50 p-8">
              <div className="flex items-start space-x-4">
                <History className="h-12 w-12 flex-shrink-0 text-primary" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Nossa História</h2>
                  <div className="mt-4 space-y-4 text-slate-700">
                    <p>
                      Fundada em 2017, a Adsu-Tec nasceu da paixão por tecnologia e do desejo de
                      transformar o cenário digital em Angola. Estamos focados em criar soluções que realmente fazem a
                      diferença. Ao longo dos anos, expandimos nossa expertise, sempre mantendo
                      o compromisso com a qualidade e a inovação.
                    </p>
                 
                    <p>
                      Nossa jornada continua, sempre em busca de novos desafios e oportunidades de
                      crescimento, sempre com o objetivo de ser a melhor escolha para quem busca
                      excelência em soluções tecnológicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </FadeOnScroll>

      {/* Equipe */}
      <FadeOnScroll>
        <section className="mt-16">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl font-bold text-center text-slate-900">Gestão</h2>
            <p className="mt-4 text-center text-slate-600">
              Profissionais altamente qualificados e apaixonados por tecnologia
            </p>
          </ScrollReveal>
          <StaggeredReveal
            className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            direction="up"
            staggerDelay={0.1}
          >
            {[
              {
                name: 'Adão António Bagi',
                role: 'CEO & Fundador',
              },
              {
                name: 'Pedro Nzinga Bunga',
                role: 'RH',
              
              },
              
              {
                name: 'Paulino Nsimba',
                role: 'Contabilista',
              },
              
            ].map((member, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm text-slate-600">{member.description}</p>
              </div>
            ))}
          </StaggeredReveal>
        </section>
      </FadeOnScroll>
    </div>
    </>
  );
}

