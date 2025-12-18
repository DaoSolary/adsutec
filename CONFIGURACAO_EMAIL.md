# Configuração de Envio de Emails

## Método Implementado

O formulário de contato usa **FormSubmit.co**, um serviço gratuito que envia emails diretamente do frontend sem necessidade de backend.

## Como Funciona

1. O usuário preenche o formulário
2. Os dados são enviados para o serviço FormSubmit.co
3. O serviço envia o email para `adsutechcomservice@gmail.com`
4. Você recebe o email com todos os dados do formulário

## Vantagens

- ✅ **Gratuito** - Sem custos
- ✅ **Sem backend necessário** - Funciona direto do frontend
- ✅ **Fácil de configurar** - Já está configurado
- ✅ **Confiável** - Serviço amplamente usado

## Verificação

Após enviar o formulário:
1. Verifique sua caixa de entrada: `adsutechcomservice@gmail.com`
2. Verifique a pasta de spam/lixo eletrônico (primeira vez pode ir para spam)
3. O email terá:
   - **Assunto**: "Contato do Site: [assunto informado]"
   - **Corpo**: Nome, Email, Telefone e Mensagem

## Alternativa: EmailJS (Opcional)

Se quiser usar EmailJS (mais personalizável):

1. Crie uma conta em: https://www.emailjs.com/
2. Configure um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email
4. Adicione as variáveis de ambiente no arquivo `.env`:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_USER_ID=seu_user_id
```

## Troubleshooting

### Email não chega

1. **Verifique a pasta de spam** - Primeiros emails podem ir para spam
2. **Verifique o email de destino** - Confirme que é `adsutechcomservice@gmail.com`
3. **Teste novamente** - Às vezes há delay no primeiro envio
4. **Verifique o console do navegador** - Pode haver erros de CORS ou rede

### Erro ao enviar

1. Verifique sua conexão com a internet
2. Verifique o console do navegador (F12) para erros
3. Tente novamente após alguns segundos

## Limitações do FormSubmit.co

- **Limite**: 50 envios por mês no plano gratuito
- **Rate limiting**: Pode ter limitações de frequência
- **Spam**: Primeiros emails podem ir para spam

## Upgrade (Opcional)

Se precisar de mais envios:
- **FormSubmit.co Pro**: $10/mês - 1000 envios
- **EmailJS**: Planos a partir de $15/mês
- **Backend próprio**: Controle total, mas requer servidor

## Suporte

Para problemas com o envio de emails:
- Email: adsutechcomservice@gmail.com
- Telefone: +244 933 539 666






