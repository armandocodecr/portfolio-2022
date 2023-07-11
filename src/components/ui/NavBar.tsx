import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { FaGithub, FaLinkedin, FaTwitter, FaEye, FaTwitch } from 'react-icons/fa';

import './Styles.css'
import BurgenButton from './BurgenButton';

export const NavBar = () => {
  
  const { hash } = useLocation()

  const [Clicked, setClicked] = useState(false);

  const handlerClick = () => {
    setClicked(!Clicked)
  }

  return (
      <>

          <div>
            <a href='https://github.com/armandocodecr' target='_blank' rel="noreferrer">
              <FaGithub className='iconos-navbar' id='git' />
            </a>
            <a href='https://www.linkedin.com/in/armandocode/' target='_blank' rel="noreferrer">
              <FaLinkedin className='iconos-navbar' id='linkedin' />
            </a>
            <a href='https://twitter.com/Armando_Code' target='_blank' rel="noreferrer">
              <FaTwitter className='iconos-navbar' id='twitter' />
            </a>
            <a href='https://www.twitch.tv/armandocodecr' target='_blank' rel="noreferrer">
              <FaTwitch className='iconos-navbar' id='twitch' />
            </a>
          </div>

          <div className={`btn-nav ${Clicked ? 'active' : ''}`}>
            <a href="#about" id={ hash === '#about' ? 'selected' : '' } onClick={handlerClick} rel="noreferrer" >Sobre mi</a>
            <a href="#projects" id={ hash === '#projects' ? 'selected' : '' } onClick={handlerClick} rel="noreferrer" >Proyectos</a>
            <a href="#skills" id={ hash === '#skills' ? 'selected' : '' } onClick={handlerClick} rel="noreferrer" >Habilidades</a>
            <a href="#referents" id={ hash === '#referents' ? 'selected' : '' } onClick={handlerClick} rel="noreferrer" >Referentes</a>
            <a href="https://blog-armandocode.vercel.app/" id='btn-blog' target='_blank' rel="noreferrer" ><FaEye />Mi Blog</a>
          </div>

          <div className="burger">
            <BurgenButton clicked={ Clicked } handleClick={ handlerClick } />
          </div>
      
      </>
  );
}
