import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/portfolio', label: 'Portfólio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" role="banner">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" aria-label="Adsu-Tec - Página inicial">
            <img 
              src="/logo.png" 
              alt="Adsu-Tec Logo" 
              className="h-14 w-auto object-contain sm:h-16"
            />
            <span className="text-xl font-bold text-slate-900"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  isActive(item.path) ? 'text-primary' : 'text-slate-700'
                )}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="relative group">
              <button
                className={cn(
                  'flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary',
                  location.pathname.startsWith('/servicos') ? 'text-primary' : 'text-slate-700'
                )}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Serviços</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  role="menu"
                >
                  <div className="py-1" role="none">
                    <Link
                      to="/servicos"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary"
                      role="menuitem"
                    >
                      Todos os Serviços
                    </Link>
                    <Link
                      to="/servicos/desenvolvimento-web"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary"
                      role="menuitem"
                    >
                      Desenvolvimento Web
                    </Link>
                    <Link
                      to="/servicos/desenvolvimento-mobile"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary"
                      role="menuitem"
                    >
                      Desenvolvimento Mobile
                    </Link>
                    <Link
                      to="/servicos/consultoria"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary"
                      role="menuitem"
                    >
                      Consultoria
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'block px-3 py-2 text-base font-medium rounded-md',
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/servicos"
                className={cn(
                  'block px-3 py-2 text-base font-medium rounded-md',
                  location.pathname.startsWith('/servicos')
                    ? 'bg-primary text-primary-foreground'
                    : 'text-slate-700 hover:bg-slate-50'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

