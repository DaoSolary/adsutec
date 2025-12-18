# Chatbot com IA - Documentação

## Visão Geral

O assistente virtual da Adsu-Tec foi melhorado com integração de IA, permitindo conversas mais naturais e inteligentes. O sistema suporta múltiplos providers de IA com fallback inteligente.

## Funcionalidades

- ✅ Conversas contextuais e naturais
- ✅ Suporte para múltiplos providers de IA (OpenAI, Gemini, Local)
- ✅ Fallback inteligente quando a API não está disponível
- ✅ Histórico de conversa mantido
- ✅ Interface responsiva e moderna
- ✅ Indicador de carregamento
- ✅ Scroll automático para novas mensagens

## Configuração

### Modo Local (Padrão)

Por padrão, o chatbot funciona em modo local com respostas inteligentes pré-programadas. Não requer configuração adicional.

### Modo OpenAI (Recomendado)

Para usar a API da OpenAI e ter conversas mais naturais:

1. Obtenha uma API key em: https://platform.openai.com/api-keys

2. Crie um arquivo `.env` na raiz do projeto:

```env
VITE_AI_PROVIDER=openai
VITE_OPENAI_API_KEY=sua-api-key-aqui
VITE_AI_MODEL=gpt-3.5-turbo
```

3. Reinicie o servidor de desenvolvimento:

```bash
npm run dev
```

### Modelos Disponíveis

- `gpt-3.5-turbo` - Mais rápido e econômico (recomendado)
- `gpt-4` - Mais inteligente, mas mais caro
- `gpt-4-turbo` - Versão melhorada do GPT-4

## Como Funciona

### Arquitetura

```
ChatWidget (Componente React)
    ↓
chatbotService (Serviço de IA)
    ↓
Provider de IA (OpenAI / Gemini / Local)
```

### Fluxo de Conversa

1. Usuário envia mensagem
2. Mensagem é adicionada ao histórico
3. Serviço de IA processa a mensagem com contexto
4. Resposta é gerada e exibida
5. Histórico é atualizado para manter contexto

### Fallback Inteligente

Se a API de IA não estiver disponível ou não estiver configurada:
- O sistema usa respostas inteligentes locais
- Mantém funcionalidade básica
- Não interrompe a experiência do usuário

## Personalização

### Ajustar Personalidade do Bot

Edite o `SYSTEM_PROMPT` em `src/services/chatbotService.ts`:

```typescript
const SYSTEM_PROMPT = `Você é um assistente virtual da Adsu-Tec...
`;
```

### Adicionar Novos Providers

1. Adicione o método no `ChatbotService`:

```typescript
private async callNovoProvider(): Promise<string> {
  // Implementação
}
```

2. Adicione o case no `generateResponse`:

```typescript
case 'novo-provider':
  response = await this.callNovoProvider();
  break;
```

## Custos

### OpenAI

- **GPT-3.5-turbo**: ~$0.002 por 1K tokens
- **GPT-4**: ~$0.03 por 1K tokens
- **GPT-4-turbo**: ~$0.01 por 1K tokens

*Valores aproximados, consulte o site oficial para preços atualizados*

### Modo Local

- **Custo**: Gratuito
- **Limitação**: Respostas pré-programadas

## Segurança

- ⚠️ **NUNCA** commite o arquivo `.env` no Git
- ⚠️ Mantenha sua API key segura
- ⚠️ Use variáveis de ambiente apenas no servidor em produção

## Troubleshooting

### Chatbot não responde

1. Verifique se a API key está configurada corretamente
2. Verifique o console do navegador para erros
3. Teste o modo local primeiro

### Respostas muito lentas

1. Use `gpt-3.5-turbo` em vez de `gpt-4`
2. Reduza o `max_tokens` no código
3. Verifique sua conexão com a internet

### Erro de CORS

Se estiver usando a API diretamente do frontend, pode haver problemas de CORS. Considere:
- Usar um proxy backend
- Ou usar o modo local

## Melhorias Futuras

- [ ] Suporte para Gemini
- [ ] Cache de respostas frequentes
- [ ] Análise de sentimento
- [ ] Integração com CRM
- [ ] Suporte multilíngue
- [ ] Respostas com rich content (links, botões)

## Suporte

Para dúvidas ou problemas, entre em contato:
- Email: adsutechcomservice@gmail.com
- Telefone: +244 933 539 666






