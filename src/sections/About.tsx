import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Building2, Landmark } from 'lucide-react';
import audesonProfile from '../assets/Audeson-2.jpg';
import Decoration from '../components/Decoration';

const About = () => {
  return (
    <section id="sobre" style={{ backgroundColor: '#000000', position: 'relative', overflow: 'hidden' }}>
      <Decoration icon={Landmark} size={600} top="-10%" left="-10%" rotate={-10} opacity={0.02} />
      <Decoration icon={BookOpen} size={400} bottom="0%" right="-5%" rotate={15} opacity={0.03} />
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.2fr', 
          gap: '5rem',
          alignItems: 'center' 
        }} className="about-grid">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              border: '2px solid var(--accent)',
              borderRadius: '24px',
              padding: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              <img src={audesonProfile} alt="Audeson Costa" style={{
                borderRadius: '16px',
                width: '100%',
                display: 'block'
              }} />
            </div>
            {/* Decorative element */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '100px',
              height: '100px',
              borderLeft: '4px solid var(--accent)',
              borderTop: '4px solid var(--accent)',
              zIndex: 0
            }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
              Quem é <br className="mobile-only" /> 
              <span style={{ color: 'var(--accent)' }}>Audeson Costa</span>
            </h2>
            
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              Advogado desde 2005 <strong>(OAB/MA 11.417)</strong>, com atuação focada em Direito do Consumidor Bancário, auxiliando clientes em situações envolvendo abusos e irregularidades praticadas por instituições financeiras.
            </p>
            
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Possui MBA em Direito Tributário e Gestão de Negócios, foi Presidente da OAB Subseção Chapadinha e é sócio do escritório Carvalho e Costa Advogados. Sua atuação é baseada na análise cuidadosa de documentos e provas, aplicação do Código de Defesa do Consumidor e definição de estratégias jurídicas adequadas.
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '2rem',
              marginBottom: '2.5rem'
            }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Award className="accent-icon" color="var(--accent)" />
                <div>
                  <h4 style={{ color: 'var(--text-main)' }}>Especialista</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>MBA em Direito Tributário</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Users className="accent-icon" color="var(--accent)" />
                <div>
                  <h4 style={{ color: 'var(--text-main)' }}>Ex-Presidente</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>OAB Subseção Chapadinha</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Building2 className="accent-icon" color="var(--accent)" />
                <div>
                  <h4 style={{ color: 'var(--text-main)' }}>Sócio</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Carvalho e Costa Advogados</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <BookOpen className="accent-icon" color="var(--accent)" />
                <div>
                  <h4 style={{ color: 'var(--text-main)' }}>Ética</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Atendimento Humanizado</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/5598984379642" target="_blank" rel="noreferrer" className="btn btn-primary">
              Falar com o Dr. Audeson
            </a>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .mobile-only { display: none; }
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .mobile-only { display: block; }
          h2 { font-size: 2.2rem !important; line-height: 1.2; }
        }
      `}} />
    </section>
  );
};

export default About;
