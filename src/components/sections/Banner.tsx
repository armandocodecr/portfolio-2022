import { Text } from "@nextui-org/react";
import Lottie from "lottie-react";
import Scroll from '../../images/Scroll.json'
import Typewriter from "typewriter-effect";

import { FaFileDownload } from 'react-icons/fa';

export const BannerSection = () => {

    return (
        <>
            <section className="container-home">
                <div className="presentacion">
                    <Text
                        h2
                        css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                        weight="bold"
                    >
                    Hola,
                    </Text>
                    
                    <Text
                        h2
                        weight="bold"
                    >
                    &nbsp;soy
                    </Text>
                    
                    
                    <Text
                        h1
                        size={70}
                        weight="bold"
                    >
                    Armando Cortés Murillo
                    </Text>

                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                            .pauseFor(500)
                            .typeString("Un ingeniero en informática ")
                            .pauseFor(300)
                            .deleteAll()
                            .typeString("Apasionado por el <strong>DESARROLLO WEB</strong> 💻.")
                            .pauseFor(1000)
                            .start();
                        }}
                        options={{
                            loop: true,
                            delay: 50,
                            autoStart: true,
                            wrapperClassName: "text-slate-500 text-xl md:text-2xl",
                        }}
                    />

                    <a href="./download/Curriculum.pdf" rel="noopener noreferrer" target='_blank' id="btn-download-cv"> <FaFileDownload id="icon-download-cv" /> Curriculum</a>
                </div>


                <div className='scrollContainer'>
                        <Lottie animationData={Scroll} className='scrollItem'  />
                </div>

            </section>
        </>
    )

}
