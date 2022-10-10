import { Text } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Styles.css'

export const Footer = () => {

    return(
        <>
            <Text color="secondary" weight='bold' 
            css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%",}}>
                Web developer by Armando Cortés Murillo. ©2022. All rights reserved.
            </Text>
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
        </>
    )

}