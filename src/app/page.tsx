import About from "@/components/public/About";
import AppointmentForm from "@/components/public/AppointmentForm";
import Footer from "@/components/public/Footer";
import FloatingWhatsApp from "@/components/public/FloatingWhatsApp";
import Header from "@/components/public/Header";
import Hero from "@/components/public/Hero";
import Services from "@/components/public/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060b16] text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <AppointmentForm />
        <About />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
