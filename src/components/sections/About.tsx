import { Text, Grid, Image } from "@nextui-org/react";

import foto from '../../static/images/foto.jpg'


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

                <Grid.Container justify='center' css={{ mt: 100 }} className='container-sections'>

                    <Grid 
                        xs={12} 
                        sm={6} 
                        css={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}  
                        data-aos="fade-right">
                        <Text >
                        👨‍💻 21 años. Soy de <strong>Costa Rica</strong>. Estoy apunto de terminar mi carrera en Ingeniería de Informática
                            de la Universidad Hispanoamericana. Nunca me he conformado con lo que me aporta la Universidad siendo una persona
                            autodidacta para especializarme en el área de <em>Desarrollo web</em>. Tengo experiencia como desarrollador, pero 
                            todavía no e tenido la ocasión de trabajar en ningún sitio. Por lo que, actualmente me encuentro en busca de una 
                            oportunidad laboral.
                        </Text>
                    </Grid>

                    <Grid xs={12} sm={6} data-aos="fade-left">
                    <Image
                        width={350}
                        height={450}  
                        src={foto}
                        alt="Default Image"
                        objectFit="cover"
                    />
                    </Grid>

                </Grid.Container>

            </section>

        </>
    )

}