import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Scale, Landmark } from 'lucide-react';
import audesonImg from '../assets/Audeson.jpg';
import Decoration from '../components/Decoration';

const Hero = () => {
  return (
    <section className="hero" style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px'
    }}>
      {/* Background Decor & Spotlight */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(255, 204, 0, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <Decoration icon={Scale} size={600} top="10%" right="-5%" rotate={-15} opacity={0.03} />
      <Decoration icon={Landmark} size={250} bottom="10%" left="2%" rotate={5} opacity={0.04} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 0.8fr', 
          gap: '4rem',
          alignItems: 'center' 
        }} className="hero-grid">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--accent)',
              marginBottom: '1rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              <ShieldCheck size={18} />
              Defesa do Consumidor Bancário
            </div>
            
            <h1 style={{ marginBottom: '1.5rem', fontSize: '3.5rem' }}>
              Está sofrendo com <span style={{ color: 'var(--accent)' }}>cobranças indevidas</span> ou fraudes bancárias?
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-muted)', 
              marginBottom: '2.5rem',
              maxWidth: '600px'
            }} className="hero-desc">
              Conte com um advogado especialista para garantir seus direitos com segurança jurídica. <span className="mobile-hide">Proteja seu patrimônio contra abusos das instituições financeiras.</span>
            </p>
            
            <div style={{ display: 'flex', gap: '1rem' }} className="hero-btns">
              <a href="https://wa.me/5598984379642" target="_blank" rel="noreferrer" className="btn btn-primary">
                <MessageCircle size={20} />
                Falar com advogado no WhatsApp
              </a>
              <a href="#servicos" className="btn btn-outline">
                Conhecer Serviços
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--glass-border)'
            }}>
              <img src={audesonImg} alt="Dr. Audeson Costa" style={{ 
                width: '100%', 
                height: 'auto',
                filter: 'contrast(1.1) brightness(0.9)'
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                background: 'linear-gradient(transparent, var(--primary))',
              }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.2rem' }}>Dr. Audeson Costa</p>
                <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>OAB/MA 11.417</p>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="glass" style={{
              position: 'absolute',
              top: '10%',
              left: '-10%',
              padding: '1rem',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)' }}>20+</p>
              <p style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>Anos de<br/>Experiência</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          .hero { 
            padding-top: 140px !important; 
            min-height: auto !important;
            padding-bottom: 4rem !important;
          }
          .hero-grid { 
            grid-template-columns: 1fr !important; 
            gap: 2.5rem !important; 
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
          .hero-btns { 
            justify-content: flex-start !important; 
            flex-wrap: wrap; 
            width: 100%;
            gap: 1rem !important;
          }
          .hero h1 { 
            font-size: 2.4rem !important; 
            line-height: 1.2 !important;
            text-align: left !important;
            width: 100%;
            margin-bottom: 1.5rem !important;
          }
          .hero-desc { 
            font-size: 1.15rem !important; 
            margin-bottom: 2.5rem !important; 
            text-align: left !important;
            width: 100%;
            line-height: 1.5 !important;
          }
          .hero .hero-grid > div { 
            width: 100% !important;
            text-align: left !important; 
            display: flex !important; 
            flex-direction: column !important; 
            align-items: flex-start !important; 
          }
          .mobile-hide { display: none; }
        }
        @media (max-width: 480px) {
          .hero { padding-top: 120px !important; }
          .hero h1 { font-size: 2rem !important; }
          .hero-btns .btn { width: 100%; justify-content: center; }
        }
      `}} />
    </section>
  );
};

export default Hero;
