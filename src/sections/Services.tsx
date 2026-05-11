import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  SearchX, 
  HandCoins, 
  LockKeyhole,
  Gavel
} from 'lucide-react';
import Decoration from '../components/Decoration';

const services = [
  {
    title: "Empréstimo Consignado",
    desc: "Análise jurídica de situações envolvendo descontos não reconhecidos, refinanciamentos questionados, margem consignável e contratos bancários.",
    icon: <HandCoins size={32} />
  },
  {
    title: "Fraudes Bancárias e Digitais",
    desc: "Atuação em demandas relacionadas a fraudes via PIX, golpes eletrônicos, uso indevido de dados e movimentações bancárias contestadas.",
    icon: <LockKeyhole size={32} />
  },
  {
    title: "Negativação e SCR/Registrato",
    desc: "Avaliação jurídica de informações restritivas, registros bancários e impactos na concessão de crédito.",
    icon: <SearchX size={32} />
  }
];

const Services = () => {
  return (
    <section id="servicos" style={{ backgroundColor: '#000000', position: 'relative', overflow: 'hidden' }}>
      <Decoration icon={Gavel} size={500} top="10%" right="-5%" rotate={-20} />
      <Decoration icon={ShieldAlert} size={300} bottom="5%" left="-2%" rotate={15} opacity={0.02} />
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        background: 'radial-gradient(circle, rgba(255, 204, 0, 0.03) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Especialidades em Direito Bancário</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Atuação técnica e estratégica para combater abusos e irregularidades praticadas por instituições financeiras contra o consumidor.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '1.5rem',
          position: 'relative',
          zIndex: 1
        }}>
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                padding: '2rem',
                backgroundColor: '#0a0a0a',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                cursor: 'default'
              }}
              whileHover={{ 
                borderColor: 'var(--accent)',
                backgroundColor: '#111111',
                scale: 1.02
              }}
            >
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
