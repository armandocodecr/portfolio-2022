import { Text, Grid, Image } from "@nextui-org/react";

import foto from '../../static/images/foto.jpg'


export const AboutSection = () => {

    return (
        <>
            <section className="container-about containers" id="about">
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

                <Grid.Container justify='center' css={{ mt: 100 }} className='container-sections items-center'>
                    <Grid 
                        xs={12} 
                        sm={6} 
                        className="relative flex flex-col justify-center items-center gap-5"  
                        data-aos="fade-right">
                        <Text className="px-5">
                            👨‍💻 22 años. Soy de <strong>Costa Rica</strong>. Desde que era pequeño la tecnología y los computadores
                            siempre me han llamado la atención. Hoy en día, después de estar años preparandome, estoy viviendo mis primeras
                            experiencias profesionales como <em className="text-yellow-400">Desarrollador de Software,</em>.
                        </Text>
                        <Text className="px-5">
                            Personalmente, <p className="text-orange-400 inline">soy una persona al que le sastiface ser resoluctivo</p>. Lo cual hace que me genere mucha sastifacción
                            ver cómo mis aplicaciones reducen la carga de trabajo de distintas áreas de la empresa a la cual trabajo actualmente.
                        </Text>
                        <Text className="px-5">
                            Una de mis mayores virtudes es que soy una persona que <p className="text-blue-400 inline">siempre busca adaptarse a distintas situaciones o retos que se
                            presenten</p>. Soy capáz de aprender y resolver lo que me proponga por mi propia cuenta, ya que para mi el aprendizaje constante
                            es una de las capacidades más necesarias para crecer y ser valioso dentro de la industria del <em className="text-yellow-400">Desarrollador de Software.</em>
                        </Text>
                    </Grid>

                    <Grid xs={12} sm={6} data-aos="fade-left">
                    <Image
                        width={350}
                        height={450}  
                        src={foto}
                        alt="Default Image"
                        objectFit="cover"
                        className="pt-10"
                    />
                    </Grid>

                </Grid.Container>

            </section>

        </>
    )

}