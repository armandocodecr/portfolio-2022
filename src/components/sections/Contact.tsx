import { Text, Grid, Input, Textarea, Button } from "@nextui-org/react";
import AnimationContact from '../../images/AnimationContact.json'
import Lottie from "lottie-react";

export const ContactSection = () => {

    return (
        <>
        
            <section className="container-contact containers" id="contact">

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
                        Contáctame
                    </Text>
                </div>

                <Grid.Container gap={3} justify='center' css={{ mt: 75, paddingBottom: 150 }} id='container-about-buttons'>

                    <Grid xl={6} lg={6} md={12} sm={12} xs={12}>
                        <Lottie animationData={AnimationContact} id='animation-contact' />
                    </Grid>

                    <Grid xl={6} lg={6} md={12} sm={12} xs={12} css={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

                            <Input size="lg" className="Input" label="Correo electrónico" placeholder="mail@example.com" />

                            <Input size="lg" className="Input" label="Nombre completo" placeholder="John Artur" />

                            <Textarea size="lg" className="Input" label="Mensaje" placeholder="Escribe tu mensaje..." rows={5}/>

                            <Button css={{ width: '65%' }} shadow color="gradient"  > Contáctame ahora </Button>
                        
                    </Grid>
                </Grid.Container>

            </section>
        
        </>
    )

}