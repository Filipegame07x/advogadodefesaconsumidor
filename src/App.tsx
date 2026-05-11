import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Features from './sections/Features';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LaserDivider from './components/LaserDivider';
import Office from './sections/Office';
import Conteudo from './sections/Conteudo';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="app" style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <LaserDivider />
        <Office />
        <LaserDivider />
        <Services />
        <LaserDivider />
        <Conteudo />
        <LaserDivider />
        <Features />
        <LaserDivider />
        <About />
        <LaserDivider />
        <FAQ />
        <LaserDivider />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
