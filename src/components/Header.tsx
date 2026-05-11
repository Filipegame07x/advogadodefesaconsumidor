import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo.jpeg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Áreas de Atuação', href: '#servicos' },
    { name: 'Conteúdo Jurídico', href: '#conteudo' },
    { name: 'Quem Somos', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'var(--transition)',
      padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
      background: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={logo} alt="Logo" style={{ height: '45px', borderRadius: '4px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-serif)', 
              fontWeight: 700, 
              fontSize: '1.2rem',
              lineHeight: 1
            }}>
              Carvalho e Costa
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 600 }}>ADVOGADOS</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2.5rem', fontWeight: 500, fontSize: '0.9rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{ color: isScrolled ? 'var(--text-main)' : 'white' }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="https://wa.me/5598984379642" target="_blank" rel="noreferrer" className="btn btn-primary desktop-btn" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
            Agendar Atendimento
          </a>
          
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'white', 
              cursor: 'pointer',
              display: 'none'
            }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--bg-main)',
              padding: '2rem',
              borderBottom: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              zIndex: 99
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontSize: '1.2rem', fontWeight: 500 }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5598984379642" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary"
              style={{ textAlign: 'center' }}
            >
              Agendar Atendimento
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .desktop-nav, .desktop-btn { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        nav a { position: relative; }
        nav a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: var(--accent);
          transition: 0.3s;
        }
        nav a:hover:after { width: 100%; }
        nav a:hover { color: var(--accent) !important; }
      `}} />
    </header>
  );
};

export default Header;

