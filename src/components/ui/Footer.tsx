import { Text } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Styles.css'

export const Footer = () => {
  
  const date = new Date().getFullYear();

  return(
      <>
          <Text id="footer-text" weight='bold' css={{ color: "#fff" }}>
              Web developer <span>Armando Cortés Murillo</span>.&nbsp;{date}
          </Text>
          <div className="container-icons-footer">
          <a href='https://github.com/armandocodecr' target='_blank' rel="noreferrer">
            <FaGithub className='iconos-navbar' id='git' />
          </a>
          <a href='https://www.linkedin.com/in/armandocode/' target='_blank' rel="noreferrer">
            <FaLinkedin className='iconos-navbar' id='linkedin' />
          </a>
          <a href='https://twitter.com/Armando_Code' target='_blank' rel="noreferrer">
            <FaTwitter className='iconos-navbar' id='twitter' />
          </a>
        </div>
      </>
  )

}