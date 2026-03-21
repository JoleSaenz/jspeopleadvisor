import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesIndividuals from "@/components/ServicesIndividuals";
import ServicesCompanies from "@/components/ServicesCompanies";
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
        <ServicesIndividuals />
        <ServicesCompanies />
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
