import { motion } from 'framer-motion';
import { UserCheck, GraduationCap, FileSearch } from 'lucide-react';

const features = [
  {
    title: "Atuação Técnica",
    desc: "Análise individualizada de cada situação apresentada.",
    icon: <FileSearch size={32} />
  },
  {
    title: "Atendimento Humanizado",
    desc: "Comunicação clara e acompanhamento jurídico adequado ao caso concreto.",
    icon: <UserCheck size={32} />
  },
  {
    title: "Produção de Conteúdo",
    desc: "Compartilhamento de informações jurídicas com finalidade educativa e preventiva.",
    icon: <GraduationCap size={32} />
  }
];

const Features = () => {
  return (
    <section style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.5fr', 
          gap: '5rem',
          alignItems: 'center' 
        }} className="features-grid">
          
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Diferenciais da Nossa Atuação</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Unimos conhecimento especializado e um atendimento focado na sua situação para garantir a melhor defesa contra as instituições financeiras.
            </p>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', borderRadius: '2px' }} />
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '1.5rem' 
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  padding: '2rem',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                whileHover={{ 
                  borderColor: 'var(--accent)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  y: -5
                }}
              >
                <div style={{ 
                  color: 'var(--accent)', 
                  marginBottom: '1rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.4' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          .features-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 640px) {
          .features-grid > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  );
};


export default Features;
