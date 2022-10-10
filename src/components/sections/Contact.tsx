import React, { FormEvent, useRef } from "react";

import { Text, Grid, Input, Textarea, Button, FormElement } from "@nextui-org/react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import emailjs from '@emailjs/browser'

import AnimationContact from '../../images/AnimationContact.json'

export const ContactSection = () => {

    const form = useRef(null!);

    const sendEmail = ( e: React.ChangeEvent<HTMLFormElement> ) => {
        e.preventDefault();

        emailjs.sendForm('service_mjdizoo', 'template_2ktds7n', form.current, '1PbewP3nsEHNkgYL5')
        .then( response => {
            console.log(response);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su correo ha sido enviado exitosamente',
                showConfirmButton: false,
                timer: 1500
              });
        } )
        .catch( error => {
            console.log(error)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Ha ocurrido un problema al enviar el correo',
                showConfirmButton: false,
                timer: 1500
              });
        } )

        e.target.reset()
    }

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

                    <Grid xl={6} lg={6} md={12} sm={12} xs={12} css={{ display: 'flex', justifyContent: 'center'}}>

                            <form ref={form} onSubmit={sendEmail}>
                                <Input size="lg" className="Input" label="Correo electrónico" placeholder="mail@example.com" name="user-email" />
                                
                                <Input size="lg" className="Input" label="Nombre completo" placeholder="John Artur" name="user-name" />
                                
                                <Textarea size="lg" className="Input" label="Mensaje" placeholder="Escribe tu mensaje..." rows={5} name="message-user"/>
                                
                                <Button type="submit" css={{ width: '65%' }} shadow color="gradient"  > Contáctame ahora </Button>
                            </form>
                        
                    </Grid>
                </Grid.Container>

            </section>
        
        </>
    )

}