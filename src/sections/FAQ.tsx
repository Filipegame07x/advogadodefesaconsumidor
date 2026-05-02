import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import Decoration from '../components/Decoration';

const faqs = [
  {
    q: "Meu nome foi negativado e eu não reconheço a dívida. O que posso fazer?",
    a: "Nesse caso, pode-se ingressar com uma ação de inexigibilidade de débito cumulada com danos morais. É importante reunir comprovantes de que a dívida é desconhecida ou já foi paga."
  },
  {
    q: "O banco pode descontar valores da minha conta sem autorização?",
    a: "Não. Descontos não autorizados, especialmente em contas salário ou benefícios previdenciários, podem ser considerados abusivos. O consumidor tem direito à restituição e, em muitos casos, indenização."
  },
  {
    q: "Descobri um empréstimo consignado que não contratei. O que fazer?",
    a: "É uma fraude comum. Deve-se registrar um boletim de ocorrência, formalizar a reclamação no banco e buscar auxílio jurídico para cancelar o contrato e cessar os descontos imediatamente."
  },
  {
    q: "Fui vítima de golpe ou fraude bancária. O banco pode ser responsabilizado?",
    a: "Sim. Segundo a Súmula 479 do STJ, as instituições financeiras respondem objetivamente pelos danos gerados por fortuito interno relativo a fraudes e delitos praticados por terceiros no âmbito de operações bancárias."
  },
  {
    q: "Como saber se os juros cobrados no meu contrato são abusivos?",
    a: "É necessária uma análise técnica comparando as taxas do seu contrato com a taxa média de mercado divulgada pelo Banco Central para a mesma época e modalidade de crédito."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ position: 'relative', overflow: 'hidden' }}>
      <Decoration icon={HelpCircle} size={500} top="0" right="-10%" rotate={20} opacity={0.02} />
      <Decoration icon={MessageSquare} size={300} bottom="10%" left="-5%" rotate={-15} opacity={0.02} />
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Dúvidas Frequentes</h2>
          <p style={{ color: 'var(--text-muted)' }}>Respostas para as principais questões sobre Direito Bancário.</p>
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

export default FAQ;
