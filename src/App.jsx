import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Features />
      <Waitlist />
      <Footer />
    </div>
  );
}
