import './App.css';
import { PortfolioLayout } from './components/layout/PortfolioLayout';
import { BannerSection, AboutSection, ProyectsSection, SkillsSection, ContactSection } from './components/sections'

function App() {
  return (
    <>
     <PortfolioLayout >
        <BannerSection />
        <AboutSection />
        <ProyectsSection />
        <SkillsSection />
        <ContactSection />
      </PortfolioLayout> 
    </>
  );
}

export default App;
