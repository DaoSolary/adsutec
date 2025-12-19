import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Sobre a empresa */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Adsu-Tec Logo" 
                className="h-12 w-auto object-contain brightness-0 invert sm:h-14"
              />
              <h3 className="text-lg font-semibold text-white"></h3>
            </Link>
            <p className="mb-4 text-sm">
              Transformando ideias em realidade digital com soluções tecnológicas inovadoras.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585276746101"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="hover:text-white transition-colors">
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/servicos/desenvolvimento-web" className="hover:text-white transition-colors">
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link to="/servicos/desenvolvimento-mobile" className="hover:text-white transition-colors">
                  Desenvolvimento Mobile
                </Link>
              </li>
              <li>
                <Link to="/servicos/consultoria" className="hover:text-white transition-colors">
                  Consultoria
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition-colors">
                  Integrações
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:adsutechcomservice@gmail.com" className="hover:text-white transition-colors">
                  adsutechcomservice@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+244923456789" className="hover:text-white transition-colors">
                  +244 933 539 666
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Luanda, Angola</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © {currentYear} Adsu-Tec. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/politica-privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-uso" className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link to="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

