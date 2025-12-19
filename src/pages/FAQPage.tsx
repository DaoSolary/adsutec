import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../utils/cn';
import { ScrollReveal } from '../components/ScrollReveal';
import { FadeOnScroll } from '../components/FadeOnScroll';

const faqs = [
  {
    category: 'Geral',
    questions: [
      {
        question: 'O que é a Adsu-Tec?',
        answer: 'A Adsu-Tec é uma empresa de tecnologia especializada em desenvolvimento web, mobile, consultoria e integrações. Transformamos ideias em realidade digital com soluções inovadoras e de alta qualidade.',
      },
      {
        question: 'Há quanto tempo a empresa atua no mercado?',
        answer: 'A Adsu-Tec foi fundada em 2017 .',
      },
      {
        question: 'Onde a empresa está localizada?',
        answer: 'Nossa sede está localizada em Luanda, Angola, mas atendemos clientes de todo o país.',
      },
    ],
  },
  {
    category: 'Serviços',
    questions: [
      {
        question: 'Quais serviços a Adsu-Tec oferece?',
        answer: 'Oferecemos desenvolvimento web, desenvolvimento mobile, consultoria em TI, integrações de sistemas, design de banco de dados, segurança da informação e muito mais.',
      },
      {
        question: 'Vocês desenvolvem aplicativos para iOS e Android?',
        answer: 'Sim! Desenvolvemos aplicativos nativos para ambas as plataformas, além de aplicativos híbridos usando React Native ou Flutter.',
      },
      {
        question: 'Vocês oferecem suporte após a entrega do projeto?',
        answer: 'Sim, oferecemos planos de suporte e manutenção contínua para garantir que seu sistema continue funcionando perfeitamente.',
      },
    ],
  },
  {
    category: 'Orçamento e Pagamento',
    questions: [
      {
        question: 'Como solicito um orçamento?',
        answer: 'Você pode solicitar um orçamento através do nosso formulário de contato, por e-mail ou telefone. Nossa equipe entrará em contato para entender suas necessidades e preparar uma proposta personalizada.',
      },
      {
        question: 'Quais são as formas de pagamento aceitas?',
        answer: 'Aceitamos pagamento via transferência bancária, cheque e outras formas acordadas. Geralmente trabalhamos com parcelamento do projeto em etapas.',
      },
      {
        question: 'O orçamento tem validade?',
        answer: 'Sim, nossos orçamentos têm validade de 30 dias, podendo ser renovado mediante reavaliação.',
      },
    ],
  },
  {
    category: 'Processo de Desenvolvimento',
    questions: [
      {
        question: 'Qual é o prazo médio para desenvolvimento de um site?',
        answer: 'O prazo varia conforme a complexidade do projeto. Um site institucional simples pode levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 2 a 6 meses.',
      },
      {
        question: 'Como funciona o processo de desenvolvimento?',
        answer: 'Nosso processo inclui: 1) Reunião inicial para entender necessidades, 2) Proposta e aprovação, 3) Design e prototipagem, 4) Desenvolvimento, 5) Testes e ajustes, 6) Entrega e treinamento.',
      },
      {
        question: 'Posso acompanhar o desenvolvimento do projeto?',
        answer: 'Sim! Mantemos comunicação constante com nossos clientes e oferecemos acesso a dashboards e reuniões regulares para acompanhamento do progresso.',
      },
    ],
  },
];

export function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <ScrollReveal direction="fade" delay={0.1}>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Perguntas Frequentes
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>
      </ScrollReveal>

      {/* FAQ Sections */}
      <FadeOnScroll>
        <div className="mt-12 space-y-8">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{section.category}</h2>
            <div className="space-y-4">
              {section.questions.map((faq, index) => {
                const key = `${section.category}-${index}`;
                const isOpen = openItems[key];

                return (
                  <div
                    key={index}
                    className="rounded-lg border border-slate-200 bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggleItem(section.category, index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-slate-900">{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <p className="text-slate-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        </div>
      </FadeOnScroll>

      {/* CTA */}
      <FadeOnScroll>
        <section className="mt-16 rounded-lg bg-slate-50 p-8 text-center">
          <ScrollReveal direction="fade" delay={0.2}>
        <h2 className="text-2xl font-bold text-slate-900">Não encontrou sua resposta?</h2>
        <p className="mt-4 text-slate-600">
          Entre em contato conosco e teremos prazer em ajudar você.
        </p>
        <a
          href="/contato"
          className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90 transition-colors"
        >
          Fale Conosco
        </a>
          </ScrollReveal>
        </section>
      </FadeOnScroll>
    </div>
  );
}

