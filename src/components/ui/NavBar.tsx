import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { FaGithub, FaLinkedin, FaTwitter, FaEye } from 'react-icons/fa';

import './Styles.css'
//import pdf from './download/Curriculum.pdf'
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
            <a href='https://github.com/Armandocm19' target='_blank' rel="noreferrer">
              <FaGithub className='iconos-navbar' id='git' />
            </a>
            <a href='https://www.linkedin.com/in/armando-murillo/' target='_blank' rel="noreferrer">
              <FaLinkedin className='iconos-navbar' id='linkedin' />
            </a>
            <a href='https://twitter.com/CodeArmando' target='_blank' rel="noreferrer">
              <FaTwitter className='iconos-navbar' id='twitter' />
            </a>
          </div>

          <div className={`btn-nav ${Clicked ? 'active' : ''}`}>
            <a href="#about" id={ hash === '#about' ? 'selected' : '' } onClick={handlerClick} rel="noreferrer" >Sobre mi</a>
            <a href="#projects" id={ hash === '#projects' ? 'selected' : '' } onClick={handlerClick} rel="noreferrer" >Proyectos</a>
            <a href="#skills" id={ hash === '#skills' ? 'selected' : '' } onClick={handlerClick} rel="noreferrer" >Habilidades</a>
            <a href="#contact" id={ hash === '#contact' ? 'selected' : '' } onClick={handlerClick} rel="noreferrer" >Contáctame</a>
            <a href="https://blog-armandocode.vercel.app/" id='btn-blog' target='_blank' rel="noreferrer" ><FaEye />Mi Blog</a>
          </div>

          <div className="burger">
            <BurgenButton clicked={ Clicked } handleClick={ handlerClick } />
          </div>
      
      </>
  );
}
