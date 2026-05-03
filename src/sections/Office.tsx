import { motion } from 'framer-motion';
import officeImg from '../assets/escritorio.jpg';

const Office = () => {
  return (
    <section id="estrutura" style={{ backgroundColor: '#050505', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem',
          alignItems: 'center' 
        }} className="office-grid">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              backgroundColor: 'rgba(255, 204, 0, 0.1)', 
              borderLeft: '4px solid var(--accent)',
              marginBottom: '1.5rem',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Nossa Sede
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Estrutura de Ponta em Chapadinha/MA</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Nosso escritório foi planejado para oferecer conforto e sigilo absoluto. Localizado estrategicamente em Chapadinha, contamos com ambientes climatizados e tecnologia de ponta para atendimentos presenciais e digitais.
            </p>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--accent)', borderRadius: '50%' }} />
                <span style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Sede Própria em Chapadinha/MA</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--accent)', borderRadius: '50%' }} />
                <span style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Ambiente Climatizado e Privativo</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--accent)', borderRadius: '50%' }} />
                <span style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Suporte para Atendimento 100% Digital</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              border: '2px solid var(--accent)',
              borderRadius: '24px',
              padding: '1rem',
              position: 'relative',
              zIndex: 1,
              backgroundColor: '#0a0a0a'
            }}>
              <img 
                src={officeImg} 
                alt="Nosso Escritório" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  borderRadius: '16px'
                }} 
              />
            </div>
            {/* Decorative corner element */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              width: '80px',
              height: '80px',
              borderRight: '4px solid var(--accent)',
              borderTop: '4px solid var(--accent)',
              zIndex: 0
            }} />
            {/* Background accent glow */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(255, 204, 0, 0.05) 0%, transparent 70%)',
              zIndex: -1,
              pointerEvents: 'none'
            }} />
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          .office-grid { 
            grid-template-columns: 1fr !important; 
            gap: 3rem !important; 
            text-align: left !important; 
          }
          .office-grid div[style*="display: inline-block"] { 
            margin: 0 0 1.5rem !important; 
          }
          .office-grid div[style*="display: flex"] { 
            justify-content: flex-start !important; 
          }
        }
      `}} />
    </section>
  );
};

export default Office;
