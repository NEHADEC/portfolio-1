import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ProjectCard from "./components/ProjectCard";
import ProjectTag from "./components/ProjectTag";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AchievmentSection from "./components/AchievmentSection";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col
     bg-[#121212]'>
      <Navbar />
      <div className='container mt-24 mx-auto px-12'>
      <HeroSection />
      <AchievmentSection />
      <AboutSection />
      <ProjectSection />
      <ProjectCard />
      <ProjectTag />
      <div className="min-h-screen flex items-center justify-self-center  text-white">
      <ContactForm />
      </div>
      <Footer />
    
   
      </div>
    
    </main>
  );
}
