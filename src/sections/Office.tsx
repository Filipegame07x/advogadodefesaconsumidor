import { motion } from 'framer-motion';
import officeImg from '../assets/escritorio.jpg';

const Office = () => {
  return (
    <section style={{ backgroundColor: '#000000', padding: '0' }}>
      <div style={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
        <img 
          src={officeImg} 
          alt="Nosso Escritório" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            opacity: 0.4 
          }} 
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, #000000, transparent, #000000)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Nossa Estrutura</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6' }}>
              Contamos com um espaço moderno e acolhedor em Chapadinha/MA, preparado para oferecer o melhor atendimento e suporte jurídico aos nossos clientes.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '1.5rem', color: 'var(--accent)', fontWeight: 'bold' }}>Chapadinha</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sede Principal</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '1.5rem', color: 'var(--accent)', fontWeight: 'bold' }}>Modernidade</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Suporte Digital</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '1.5rem', color: 'var(--accent)', fontWeight: 'bold' }}>Conforto</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Ambiente Acolhedor</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Office;
