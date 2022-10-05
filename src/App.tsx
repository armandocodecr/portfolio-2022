import './App.css';
import { PortfolioLayout } from './components/layout/PortfolioLayout';
import { Banner, About } from './components/sections'

function App() {
  return (
    <>
    
     <PortfolioLayout title='Pagina de portfolio' pageDescription='Mi portfolio web como desarrollador de software'>
        <Banner />
        <About />
      </PortfolioLayout> 
    </>
  );
}

export default App;
