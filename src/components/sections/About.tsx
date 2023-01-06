import { Text, Grid, Image } from "@nextui-org/react";

import computer from '../../images/computer.json'
import Lottie from "lottie-react";
import foto from '../../images/foto.jpg'


export const AboutSection = () => {

    return (
        <>
            <section className="container-about containers" id="about">
                <hr />
                <div className="text-section">
                    <Text
                        h1
                        size={80}
                        css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                        }}
                        weight="bold"
                    >
                        Sobre mi
                    </Text>
                </div>

                <Grid.Container gap={2} justify='center' css={{ mt: 100 }} className='container-sections'>

                    <Grid xs={12} sm={6} css={{ position: 'relative' }}>
                        <Text css={{ position: 'relative', top: '30%' }}>
                            Tengo 21 años, y soy de <strong>Costa Rica</strong>. Actualmente estoy en mi último curso de la carrera de Ingeniería en informática en
                            la Universidad Hispanoamericana, y cada día trato de expandir mi conocimiento sobre este mundo.
                        </Text>
                    </Grid>

                    <Grid xs={12} sm={6}>
                    <Image
                        width={320}
                        height={400}  
                        src={foto}
                        alt="Default Image"
                        objectFit="cover"
                    />
                    </Grid>

                    <Grid xs={12} sm={6} id='prueba'>
                        <Lottie animationData={computer} className='animation'/>
                    </Grid>

                    <Grid xs={12} sm={6} css={{ position: 'relative' }}>
                        <Text css={{ position: 'relative', top: '50%' }}>
                            Apasionado por la tecnología, la programación y el diseño. Nunca conformandome con lo que me aporta la Universidad siendo una persona
                            autodidacta en busca de especializarme en <em>Desarrollo web</em>.
                        </Text>
                    </Grid>

                </Grid.Container>

            </section>

        </>
    )

}