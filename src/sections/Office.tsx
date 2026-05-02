import { motion } from 'framer-motion';
import officeImg from '../assets/escritorio.jpg';

const Office = () => {
  return (
    <section style={{ backgroundColor: '#000000', padding: '0' }}>
      <div style={{ position: 'relative', height: '650px', overflow: 'hidden' }}>
        <img 
          src={officeImg} 
          alt="Nosso Escritório" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'center',
            opacity: 0.7 
          }} 
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.9) 20%, transparent 80%)',
          display: 'flex',
          alignItems: 'center',
          padding: '4rem'
        }} className="office-overlay">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px' }}
          >
            <div style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              backgroundColor: 'rgba(255, 204, 0, 0.1)', 
              borderLeft: '4px solid var(--accent)',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Nossa Estrutura
            </div>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>Atendimento de Excelência em Chapadinha/MA</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.6', marginBottom: '3rem' }}>
              Contamos com um espaço moderno e acolhedor, preparado para oferecer o melhor atendimento e suporte jurídico aos nossos clientes, unindo tradição e tecnologia.
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '2rem'
            }}>
              <div>
                <span style={{ display: 'block', fontSize: '1.2rem', color: 'var(--accent)', fontWeight: 'bold' }}>Chapadinha</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Sede Principal</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '1.2rem', color: 'var(--accent)', fontWeight: 'bold' }}>Modernidade</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Suporte Digital</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '1.2rem', color: 'var(--accent)', fontWeight: 'bold' }}>Conforto</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Ambiente Acolhedor</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .office-overlay { 
            padding: 2rem !important; 
            background: rgba(0,0,0,0.8) !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .office-overlay > div { max-width: 100% !important; }
          .office-overlay h2 { fontSize: 2.5rem !important; }
          .office-overlay div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}} />
    </section>
  );
};

export default Office;
