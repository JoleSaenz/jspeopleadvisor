import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseMe />
        <Testimonials />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
