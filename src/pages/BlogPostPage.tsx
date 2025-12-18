import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  // Simulação de conteúdo do post
  const post = {
    title: 'Como Escolher a Tecnologia Ideal para Seu Projeto',
    author: 'João Silva',
    date: new Date('2024-01-15'),
    category: 'Tecnologia',
    content: `
      <p>Escolher a tecnologia certa para um projeto é uma das decisões mais importantes que você pode tomar. Esta escolha impacta diretamente no tempo de desenvolvimento, custos, manutenibilidade e escalabilidade da solução.</p>
      
      <h2>1. Entenda as Necessidades do Projeto</h2>
      <p>Antes de escolher qualquer tecnologia, é fundamental entender completamente as necessidades do projeto. Considere fatores como:</p>
      <ul>
        <li>Volume de usuários esperado</li>
        <li>Complexidade das funcionalidades</li>
        <li>Prazos de entrega</li>
        <li>Orçamento disponível</li>
        <li>Requisitos de segurança</li>
      </ul>

      <h2>2. Avalie a Escalabilidade</h2>
      <p>A tecnologia escolhida deve ser capaz de crescer junto com seu negócio. Considere se a solução pode lidar com aumento de tráfego, dados e funcionalidades no futuro.</p>

      <h2>3. Considere a Comunidade e Suporte</h2>
      <p>Tecnologias com comunidades ativas e bom suporte facilitam o desenvolvimento e resolução de problemas. Verifique documentação, fóruns e disponibilidade de recursos.</p>

      <h2>4. Avalie o Custo Total</h2>
      <p>Não considere apenas o custo inicial. Avalie custos de licenciamento, hospedagem, manutenção e treinamento da equipe.</p>

      <h2>Conclusão</h2>
      <p>A escolha da tecnologia é uma decisão estratégica que deve ser tomada com cuidado. Na Adsu-Tec, ajudamos nossos clientes a fazerem as melhores escolhas baseadas em suas necessidades específicas.</p>
    `,
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        to="/blog"
        className="mb-8 inline-flex items-center text-sm font-medium text-slate-600 hover:text-primary transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar ao Blog
      </Link>

      <article>
        <header>
          <span className="text-sm font-medium text-primary">{post.category}</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center space-x-4 text-sm text-slate-600">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{format(post.date, "d 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
            </div>
          </div>
        </header>

        <div
          className="prose prose-slate mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-12 border-t border-slate-200 pt-8">
          <div className="rounded-lg bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Precisa de ajuda com seu projeto?</h3>
            <p className="mt-2 text-slate-600">
              Nossa equipe está pronta para ajudar você a escolher as melhores tecnologias para seu projeto.
            </p>
            <Link
              to="/contato"
              className="mt-4 inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}







