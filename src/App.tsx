import { useEffect } from 'react';
import './App.css';
import { PortfolioLayout } from './components/layout/PortfolioLayout';
import { BannerSection, AboutSection, ProyectsSection, SkillsSection, ReferentsSection } from './components/sections'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init()
  }, [])
  

  return (
    <>
     <PortfolioLayout >
        <BannerSection />
        <AboutSection />
        <ProyectsSection />
        <SkillsSection />
        <ReferentsSection />
      </PortfolioLayout> 
    </>
  );
}

export default App;
