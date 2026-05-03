import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5598984379642"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="whatsapp-float"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000000',
        boxShadow: '0 8px 32px rgba(255, 204, 0, 0.3)',
        zIndex: 1000,
        cursor: 'pointer',
        border: 'none'
      }}
    >
      <MessageCircle size={32} strokeWidth={2.5} />
      <span className="pulse-ring"></span>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 4px solid var(--accent);
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @media (max-width: 768px) {
          .whatsapp-float {
            width: 50px !important;
            height: 50px !important;
            bottom: 1.5rem !important;
            right: 1.5rem !important;
          }
          .whatsapp-float svg {
            width: 24px !important;
            height: 24px !important;
          }
        }
      `}} />
    </motion.a>
  );
};

export default WhatsAppButton;
