/**
 * Serviço de Chatbot com IA
 * Suporta múltiplos providers de IA com fallback inteligente
 */

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatbotConfig {
  apiKey?: string;
  provider?: 'openai' | 'gemini' | 'local';
  model?: string;
  temperature?: number;
}

const SYSTEM_PROMPT = `Você é um assistente virtual da Adsu-Tec, uma empresa angolana de tecnologia especializada em desenvolvimento web, mobile e consultoria em TI.

Informações importantes sobre a empresa:
- Email: adsutechcomservice@gmail.com
- Telefone: +244 933 539 666
- Localização: Luanda, Angola
- Serviços: Desenvolvimento Web, Desenvolvimento Mobile, Consultoria em TI, Integrações
- Experiência: Mais de 15 anos no mercado, mais de 200 projetos entregues

Sua personalidade:
- Profissional, amigável e prestativo
- Focado em ajudar clientes a entenderem os serviços e soluções
- Sempre oferece informações úteis e direciona para contato quando necessário
- Responde em português de forma clara e objetiva
- Enaltece a tecnologia e inovação em Angola

Diretrizes:
- Seja conciso mas completo
- Sempre que possível, forneça informações específicas
- Se não souber algo específico, direcione para o contato
- Mantenha o foco nos serviços da empresa
- Use linguagem técnica quando apropriado, mas explique de forma acessível`;

export class ChatbotService {
  private config: ChatbotConfig;
  private conversationHistory: Message[] = [];

  constructor(config: ChatbotConfig = {}) {
    this.config = {
      provider: 'openai',
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      ...config,
    };
    
    // Inicializar histórico com mensagem do sistema
    this.conversationHistory = [
      { role: 'system', content: SYSTEM_PROMPT },
    ];
  }

  /**
   * Gera resposta usando IA
   */
  async generateResponse(userMessage: string): Promise<string> {
    // Adicionar mensagem do usuário ao histórico
    this.conversationHistory.push({ role: 'user', content: userMessage });

    try {
      let response: string;

      switch (this.config.provider) {
        case 'openai':
          response = await this.callOpenAI();
          break;
        case 'gemini':
          response = await this.callGemini();
          break;
        case 'local':
        default:
          response = await this.callLocalAI(userMessage);
          break;
      }

      // Adicionar resposta ao histórico
      this.conversationHistory.push({ role: 'assistant', content: response });
      
      return response;
    } catch (error) {
      console.error('Erro ao gerar resposta com IA:', error);
      // Fallback para resposta local inteligente
      return this.callLocalAI(userMessage);
    }
  }

  /**
   * Chama API da OpenAI
   */
  private async callOpenAI(): Promise<string> {
    if (!this.config.apiKey) {
      throw new Error('API key não configurada');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`,
      },
      body: JSON.stringify({
        model: this.config.model || 'gpt-3.5-turbo',
        messages: this.conversationHistory.slice(-10), // Últimas 10 mensagens para contexto
        temperature: this.config.temperature,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Erro na API OpenAI');
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Desculpe, não consegui gerar uma resposta.';
  }

  /**
   * Chama API do Google Gemini
   */
  private async callGemini(): Promise<string> {
    if (!this.config.apiKey) {
      throw new Error('API key não configurada');
    }

    // Implementação do Gemini (quando necessário)
    throw new Error('Gemini não implementado ainda');
  }

  /**
   * Resposta local inteligente (fallback)
   */
  private callLocalAI(userInput: string): string {
    const lowerInput = userInput.toLowerCase();

    // Orçamento e preços
    if (lowerInput.includes('orçamento') || lowerInput.includes('preço') || lowerInput.includes('custo') || lowerInput.includes('quanto custa') || lowerInput.includes('valor')) {
      return 'Para solicitar um orçamento personalizado, você pode preencher nosso formulário de contato ou enviar um e-mail para adsutechcomservice@gmail.com. Nossa equipe analisará suas necessidades e retornará com uma proposta detalhada em breve!';
    }

    // Serviços
    if (lowerInput.includes('serviço') || lowerInput.includes('desenvolvimento') || lowerInput.includes('o que vocês fazem') || lowerInput.includes('o que fazem')) {
      return 'Oferecemos desenvolvimento web (sites e aplicações), desenvolvimento mobile (apps iOS e Android), consultoria em TI, integrações de sistemas e muito mais. Qual serviço te interessa mais?';
    }

    // Desenvolvimento web específico
    if (lowerInput.includes('web') || lowerInput.includes('site') || lowerInput.includes('aplicação web')) {
      return 'Desenvolvemos sites responsivos, aplicações web modernas, e-commerce, sistemas de gestão e muito mais. Usamos as tecnologias mais atuais para garantir performance e segurança. Quer saber mais sobre algum tipo específico de projeto web?';
    }

    // Desenvolvimento mobile
    if (lowerInput.includes('mobile') || lowerInput.includes('app') || lowerInput.includes('aplicativo') || lowerInput.includes('ios') || lowerInput.includes('android')) {
      return 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android. Criamos apps personalizados que atendem às necessidades específicas do seu negócio. Tem alguma ideia de app em mente?';
    }

    // Consultoria
    if (lowerInput.includes('consultoria') || lowerInput.includes('consultor') || lowerInput.includes('assessoria')) {
      return 'Nossa consultoria em TI ajuda empresas a definir estratégias tecnológicas, escolher as melhores soluções, otimizar processos e transformar digitalmente seus negócios. Como podemos ajudar sua empresa?';
    }

    // Contato
    if (lowerInput.includes('contato') || lowerInput.includes('telefone') || lowerInput.includes('email') || lowerInput.includes('falar') || lowerInput.includes('comunicar')) {
      return 'Você pode entrar em contato conosco através do e-mail adsutechcomservice@gmail.com, telefone +244 933 539 666 ou preenchendo o formulário em nossa página de contato. Estamos prontos para ajudar!';
    }

    // Prazo
    if (lowerInput.includes('prazo') || lowerInput.includes('tempo') || lowerInput.includes('quanto tempo') || lowerInput.includes('demora')) {
      return 'O prazo varia conforme a complexidade do projeto. Um site simples pode levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 2 a 6 meses. Podemos discutir prazos específicos para seu projeto. Qual tipo de projeto você tem em mente?';
    }

    // Portfólio
    if (lowerInput.includes('portfólio') || lowerInput.includes('portfolio') || lowerInput.includes('trabalhos') || lowerInput.includes('projetos')) {
      return 'Temos mais de 200 projetos entregues com sucesso! Você pode ver alguns dos nossos trabalhos na página de portfólio. Quer conhecer casos de sucesso em alguma área específica?';
    }

    // Sobre a empresa
    if (lowerInput.includes('sobre') || lowerInput.includes('empresa') || lowerInput.includes('quem são') || lowerInput.includes('história')) {
      return 'A Adsu-Tec é uma empresa angolana de tecnologia com mais de 15 anos de experiência. Transformamos ideias em realidade digital através de desenvolvimento web, mobile e consultoria especializada. Quer saber mais sobre nossa história e valores?';
    }

    // Tecnologias
    if (lowerInput.includes('tecnologia') || lowerInput.includes('linguagem') || lowerInput.includes('framework') || lowerInput.includes('stack')) {
      return 'Trabalhamos com as tecnologias mais modernas: React, Node.js, Python, Flutter, React Native, e muitas outras. Escolhemos a melhor stack tecnológica para cada projeto. Tem alguma tecnologia específica em mente?';
    }

    // Angola
    if (lowerInput.includes('angola') || lowerInput.includes('luanda') || lowerInput.includes('onde estão')) {
      return 'Somos uma empresa angolana, localizada em Luanda. Atendemos clientes em toda Angola e também internacionalmente. Estamos prontos para ajudar seu negócio a crescer com tecnologia!';
    }

    // Saudações e agradecimentos
    if (lowerInput.includes('obrigado') || lowerInput.includes('obrigada') || lowerInput.includes('valeu') || lowerInput.includes('tchau') || lowerInput.includes('até logo')) {
      return 'De nada! Fico feliz em ajudar. Se tiver mais alguma dúvida, estarei aqui. Boa sorte com seu projeto!';
    }

    // Saudações iniciais
    if (lowerInput.includes('olá') || lowerInput.includes('oi') || lowerInput.includes('bom dia') || lowerInput.includes('boa tarde') || lowerInput.includes('boa noite')) {
      return 'Olá! Como posso ajudar você hoje? Posso falar sobre nossos serviços, orçamentos, prazos ou qualquer outra dúvida sobre a Adsu-Tec.';
    }

    // Resposta contextual baseada no histórico
    const lastUserMessage = this.conversationHistory
      .filter(m => m.role === 'user')
      .slice(-1)[0]?.content.toLowerCase() || '';

    if (lastUserMessage.includes('web') || lastUserMessage.includes('site')) {
      return 'Sobre desenvolvimento web, posso ajudar com informações sobre tecnologias, prazos, custos ou processos. O que você gostaria de saber especificamente?';
    }

    if (lastUserMessage.includes('mobile') || lastUserMessage.includes('app')) {
      return 'Sobre desenvolvimento mobile, posso ajudar com informações sobre plataformas (iOS/Android), tecnologias, prazos ou custos. O que você gostaria de saber?';
    }

    // Resposta padrão melhorada
    return 'Entendo sua pergunta. Para te ajudar melhor, você poderia ser mais específico? Por exemplo, você quer saber sobre nossos serviços (web, mobile, consultoria), orçamentos, prazos ou informações de contato? Também posso te direcionar para nossa página de contato se preferir.';
  }

  /**
   * Limpa o histórico da conversa
   */
  clearHistory(): void {
    this.conversationHistory = [
      { role: 'system', content: SYSTEM_PROMPT },
    ];
  }

  /**
   * Obtém o histórico da conversa
   */
  getHistory(): Message[] {
    return this.conversationHistory;
  }
}

// Instância singleton
let chatbotInstance: ChatbotService | null = null;

export function getChatbotService(): ChatbotService {
  if (!chatbotInstance) {
    // Verificar se há API key configurada
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const provider = (import.meta.env.VITE_AI_PROVIDER || 'local') as 'openai' | 'gemini' | 'local';
    
    chatbotInstance = new ChatbotService({
      apiKey,
      provider: apiKey ? provider : 'local',
      model: import.meta.env.VITE_AI_MODEL || 'gpt-3.5-turbo',
    });
  }
  
  return chatbotInstance;
}






