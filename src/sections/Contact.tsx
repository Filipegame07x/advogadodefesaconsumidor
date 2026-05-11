
import { Send } from 'lucide-react';
import Decoration from '../components/Decoration';
import { Gavel } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" style={{ backgroundColor: '#050505', position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      <Decoration icon={Gavel} size={400} top="10%" right="-5%" rotate={-15} opacity={0.02} />
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Solicitar Atendimento Jurídico</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Preencha o formulário abaixo para enviar os detalhes da sua situação.
          </p>
        </div>

        <form 
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          onSubmit={(e) => {
            e.preventDefault();
            // In a real application, you would handle form submission here
            alert('Formulário enviado com sucesso!');
          }}
        >
          <div>
            <label htmlFor="nome" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>Nome</label>
            <input 
              type="text" 
              id="nome" 
              required
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white',
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem'
              }} 
            />
          </div>

          <div>
            <label htmlFor="telefone" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>Telefone</label>
            <input 
              type="tel" 
              id="telefone" 
              required
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white',
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem'
              }} 
            />
          </div>

          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>E-mail</label>
            <input 
              type="email" 
              id="email" 
              required
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white',
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem'
              }} 
            />
          </div>

          <div>
            <label htmlFor="descricao" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>Descrição resumida da situação</label>
            <textarea 
              id="descricao" 
              required
              rows={4}
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white',
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                resize: 'vertical'
              }} 
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
          >
            <Send size={20} />
            Enviar Solicitação
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
