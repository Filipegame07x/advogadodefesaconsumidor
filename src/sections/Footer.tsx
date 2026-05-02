import { Phone, Mail, Instagram, MapPin, Gavel } from 'lucide-react';
import logo from '../assets/Logo.jpeg';
import Decoration from '../components/Decoration';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#000000', 
      padding: '5rem 0 2rem',
      borderTop: '1px solid var(--glass-border)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Decoration icon={Gavel} size={400} bottom="-5%" right="-5%" rotate={-45} opacity={0.03} />
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '4rem',
          marginBottom: '4rem'
        }}>
          {/* Brand & Mission */}
          <div>
            <img src={logo} alt="Logo Audeson Costa" style={{ 
              width: '120px', 
              marginBottom: '1.5rem',
              borderRadius: '8px'
            }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Defesa especializada em Direito do Consumidor Bancário. Compromisso com a ética, transparência e segurança jurídica desde 2005.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://instagram.com/audeson.adv" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.5rem', borderRadius: '50%' }}>
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div id="contato">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Contato</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-muted)' }}>
                <Phone size={18} color="var(--accent)" />
                (98) 98437-9642
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-muted)' }}>
                <Mail size={18} color="var(--accent)" />
                carvalhocostaadvogado@gmail.com
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-muted)' }}>
                <MapPin size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                <span>
                  <strong>Chapadinha – MA:</strong><br/>
                  Rua Sebastião Barbosa
                </span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--text-muted)' }}>
                <MapPin size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                <span>
                  <strong>Mata Roma – MA (Filial):</strong><br/>
                  Centro
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Navegação</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
              <li><a href="#" style={{ transition: '0.3s' }}>Início</a></li>
              <li><a href="#servicos" style={{ transition: '0.3s' }}>Serviços</a></li>
              <li><a href="#sobre" style={{ transition: '0.3s' }}>Sobre o Advogado</a></li>
              <li><a href="#faq" style={{ transition: '0.3s' }}>Dúvidas</a></li>
            </ul>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            As informações desta página têm caráter informativo e não substituem consulta jurídica individualizada. Cada caso será analisado conforme a documentação apresentada.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} – Audeson Costa – OAB/MA 11.417. Desenvolvido com excelência.
          </p>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        footer a:hover { color: var(--accent) !important; }
      `}} />
    </footer>
  );
};

export default Footer;
