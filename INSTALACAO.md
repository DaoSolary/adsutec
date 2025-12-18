# Guia de Instalação - Adsu-Tec

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## Passos para Instalação

1. **Navegue até a pasta do projeto:**
```bash
cd adsutec
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse o site:**
O site estará disponível em `http://localhost:5175`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria o build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## Estrutura de Páginas

- `/` - Página inicial
- `/sobre` - Sobre a empresa
- `/servicos` - Lista de serviços
- `/servicos/desenvolvimento-web` - Landing page web
- `/servicos/desenvolvimento-mobile` - Landing page mobile
- `/servicos/consultoria` - Landing page consultoria
- `/portfolio` - Portfólio de projetos
- `/blog` - Blog e artigos
- `/contato` - Página de contato
- `/faq` - Perguntas frequentes
- `/depoimentos` - Depoimentos de clientes
- `/dashboard` - Dashboard do cliente

## Personalização

### Cores
As cores podem ser personalizadas em `tailwind.config.ts`:
- `primary`: Cor principal (azul)
- `accent`: Cor de destaque (laranja)
- `secondary`: Cor secundária

### Conteúdo
O conteúdo das páginas pode ser editado diretamente nos arquivos em `src/pages/`.

### SEO
As meta tags podem ser configuradas através do componente `SEO` em cada página.

## Deploy

Para fazer deploy:

1. Execute o build:
```bash
npm run build
```

2. A pasta `dist/` conterá os arquivos estáticos prontos para deploy.

3. Você pode fazer deploy em:
   - Netlify
   - Vercel
   - GitHub Pages
   - Qualquer servidor estático

## Suporte

Para dúvidas ou problemas, entre em contato através do site.







