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

                    <Grid xs={12} sm={6} css={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Text >
                            21 años. Soy de <strong>Costa Rica</strong>. Cursando último año en Ingeniería de Informática
                            en la Universidad Hispanoamericana. Expandiendo mi conocimiento en este mundo.
                            Apasionado por la tecnología, la programación y el diseño. Nunca conformandome con lo que me aporta la Universidad siendo una persona
                            autodidacta en busca de especializarme en <em>Desarrollo web</em>.👨‍💻
                        </Text>
                    </Grid>

                    <Grid xs={12} sm={6}>
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