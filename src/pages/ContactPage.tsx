import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { FadeOnScroll } from '../components/FadeOnScroll';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Usar FormSubmit.co (serviço gratuito que envia emails diretamente)
      const formSubmitUrl = 'https://formsubmit.co/ajax/adsutechcomservice@gmail.com';
      
      const response = await fetch(formSubmitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || 'Não informado',
          subject: data.subject,
          message: data.message,
          _subject: `Contato do Site Adsu-Tec: ${data.subject}`,
          _template: 'box',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao enviar email');
      }

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 10000);
      } else {
        throw new Error('Falha ao enviar email');
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setError('Erro ao enviar mensagem. Por favor, tente novamente ou envie um email diretamente para adsutechcomservice@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <ScrollReveal direction="fade" delay={0.1}>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Entre em Contato
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Estamos prontos para ajudar você a transformar suas ideias em realidade
          </p>
        </div>
      </ScrollReveal>

      <FadeOnScroll>
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Informações de Contato</h2>
              <p className="mt-4 text-slate-600">
                Prefere falar diretamente? Entre em contato através dos canais abaixo.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">E-mail</h3>
                    <a
                      href="mailto:adsutechcomservice@gmail.com"
                      className="mt-1 text-slate-600 hover:text-primary transition-colors"
                    >
                      adsutechcomservice@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Telefone</h3>
                    <a
                      href="tel:+244933539666"
                      className="mt-1 text-slate-600 hover:text-primary transition-colors"
                    >
                      +244 933 539 666
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Endereço</h3>
                    <p className="mt-1 text-slate-600">
                      Luanda, Angola
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Horário de Atendimento</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Segunda a Sexta: 8h00 - 17h00<br />
                  
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="left" delay={0.3}>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Envie sua Mensagem</h2>
              <p className="mt-4 text-slate-600">
                Preencha o formulário abaixo e retornaremos o mais breve possível.
              </p>

              {isSubmitted && (
                <div className="mt-6 rounded-lg bg-green-50 border border-green-200 p-4 flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-green-800">
                    Mensagem enviada com sucesso! Entraremos em contato em breve através do email fornecido.
                  </p>
                </div>
              )}

              {error && (
                <div className="mt-6 rounded-lg bg-red-50 border border-red-200 p-4 flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-red-800">
                    {error}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Nome é obrigatório' })}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'E-mail inválido',
                      },
                    })}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'Assunto é obrigatório' })}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Mensagem é obrigatória' })}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-md bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </FadeOnScroll>
    </div>
  );
}

