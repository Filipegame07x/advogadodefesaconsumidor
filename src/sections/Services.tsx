import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  CreditCard, 
  SearchX, 
  TrendingDown, 
  HandCoins, 
  LockKeyhole,
  Briefcase,
  Gavel
} from 'lucide-react';
import Decoration from '../components/Decoration';

const services = [
  {
    title: "Fraudes bancárias e golpes via PIX",
    desc: "Análise de transferências não autorizadas e possíveis falhas de segurança da instituição.",
    icon: <LockKeyhole size={32} />
  },
  {
    title: "Empréstimos não contratados",
    desc: "Verificação de descontos de empréstimos que o cliente não reconhece ou autorizou.",
    icon: <HandCoins size={32} />
  },
  {
    title: "Descontos indevidos em conta",
    desc: "Identificação de cobranças ou débitos realizados sem autorização do consumidor.",
    icon: <TrendingDown size={32} />
  },
  {
    title: "Negativação indevida",
    desc: "Análise de inscrição irregular do nome em órgãos de proteção ao crédito (SPC/Serasa).",
    icon: <SearchX size={32} />
  },
  {
    title: "Juros abusivos",
    desc: "Verificação de encargos excessivos ou cláusulas prejudiciais em contratos bancários.",
    icon: <TrendingDown size={32} />
  },
  {
    title: "Venda casada",
    desc: "Análise da exigência indevida de contratação de serviços vinculados ao crédito.",
    icon: <Briefcase size={32} />
  },
  {
    title: "Seguros não contratados",
    desc: "Identificação de cobranças de seguros ou títulos de capitalização não autorizados.",
    icon: <ShieldAlert size={32} />
  },
  {
    title: "Abusos em Cartão de Crédito",
    desc: "Defesa contra taxas abusivas e cobranças irregulares em faturas e limites.",
    icon: <CreditCard size={32} />
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
