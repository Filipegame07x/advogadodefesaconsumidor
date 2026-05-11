import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import Decoration from '../components/Decoration';

const faqs = [
  {
    q: "O que é o SCR do Banco Central?",
    a: "O Sistema de Informações de Crédito (SCR) reúne informações utilizadas pelas instituições financeiras na análise de risco e concessão de crédito."
  },
  {
    q: "O banco pode ser responsabilizado por fraude?",
    a: "A responsabilidade dependerá das circunstâncias do caso concreto, da análise da prestação do serviço e das provas existentes."
  },
  {
    q: "Como identificar descontos indevidos?",
    a: "Extratos bancários e históricos previdenciários podem auxiliar na identificação de cobranças não reconhecidas."
  }
];

const Conteudo = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="conteudo" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0a0a0a' }}>
      <Decoration icon={HelpCircle} size={500} top="0" right="-10%" rotate={20} opacity={0.02} />
      <Decoration icon={MessageSquare} size={300} bottom="10%" left="-5%" rotate={-15} opacity={0.02} />
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Conteúdo Jurídico Informativo</h2>
          <p style={{ color: 'var(--text-muted)' }}>Informações jurídicas com finalidade educativa e preventiva.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="glass" style={{ overflow: 'hidden' }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-main)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {faq.q}
                <ChevronDown 
                  style={{ 
                    transform: openIndex === index ? 'rotate(180deg)' : 'none',
                    transition: '0.3s'
                  }} 
                  color="var(--accent)"
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ 
                      padding: '0 1.5rem 1.5rem', 
                      color: 'var(--text-muted)',
                      lineHeight: '1.6'
                    }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>Ainda tem dúvidas? Fale diretamente conosco.</p>
          <a href="https://wa.me/5598984379642" target="_blank" rel="noreferrer" className="btn btn-outline">
            Enviar dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Conteudo;
