import { useState } from 'react';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import './Styles.css'
import BurgenButton from './BurgenButton';

export default function App() {

  const [Clicked, setClicked] = useState(false);

  const handlerClick = () => {
    //cuando está true lo pasa a false, y viceversa
    setClicked(!Clicked)
  }

  return (
      <>

          <div>
            <FaGithub className='iconos-navbar' id='git' />
            <FaLinkedin className='iconos-navbar' id='linkedin' />
            <FaTwitter className='iconos-navbar' id='twitter' />
          </div>

          <div className={`btn-nav ${Clicked ? 'active' : ''}`}>
            <a href="#">Sobre mi</a>
            <a href="#">Proyectos</a>
            <a href="#">Habilidades</a>
            <a href="#">Contáctame</a>
          </div>

          <div className="burger">
            <BurgenButton clicked={ Clicked } handleClick={ handlerClick } />
          </div>
      
      </>
  );
}
