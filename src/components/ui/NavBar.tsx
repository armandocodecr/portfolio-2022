import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import './Styles.css'
import BurgenButton from './BurgenButton';

export const NavBar = () => {
  
  const { hash } = useLocation()

  const [Clicked, setClicked] = useState(false);

  const handlerClick = () => {
    //cuando está true lo pasa a false, y viceversa
    setClicked(!Clicked)
  }

  return (
      <>

          <div>
            <a href='https://github.com/Armandocm19' target='_blank'>
              <FaGithub className='iconos-navbar' id='git' />
            </a>
            <a href='https://www.linkedin.com/in/armando-murillo/' target='_blank'>
              <FaLinkedin className='iconos-navbar' id='linkedin' />
            </a>
            <a href='https://twitter.com/CodeArmando' target='_blank'>
              <FaTwitter className='iconos-navbar' id='twitter' />
            </a>
          </div>

          <div className={`btn-nav ${Clicked ? 'active' : ''}`}>
            <a href="#about" id={ hash === '#about' ? 'selected' : '' } onClick={handlerClick}>Sobre mi</a>
            <a href="#projects" id={ hash === '#projects' ? 'selected' : '' } onClick={handlerClick}>Proyectos</a>
            <a href="#skills" id={ hash === '#sills' ? 'selected' : '' } onClick={handlerClick}>Habilidades</a>
            <a href="#contact" id={ hash === '#contact' ? 'selected' : '' } onClick={handlerClick}>Contáctame</a>
          </div>

          <div className="burger">
            <BurgenButton clicked={ Clicked } handleClick={ handlerClick } />
          </div>
      
      </>
  );
}
