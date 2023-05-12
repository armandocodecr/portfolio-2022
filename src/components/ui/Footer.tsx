import { Text } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Styles.css'

export const Footer = () => {
  
  const date = new Date().getFullYear();

  return(
      <>
          <Text color="secondary" weight='bold' 
          css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%",}}>
              Web developer Armando Cortés Murillo.&nbsp;{date}
          </Text>
          <div className="container-icons-footer">
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
      </>
  )

}