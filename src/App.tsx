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

function App() {
  return (
    <div className="app" style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <LaserDivider />
        <Services />
        <LaserDivider />
        <Features />
        <LaserDivider />
        <About />
        <Office />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
