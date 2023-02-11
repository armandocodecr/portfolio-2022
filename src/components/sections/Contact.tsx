import { useRef } from "react";

import { Text, Grid, Button } from "@nextui-org/react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import emailjs from '@emailjs/browser'
import { Formik, Form } from "formik"

import AnimationContact from '../../static/images/AnimationContact.json'
import { MyTextInput } from "../formComponents/myTextInput";
import { InitialValues, yupObject } from "../../services";

// interface messageValues {
//     email: string;
//     userName: string;
//     message: string;
// }

export const ContactSection = () => {

    const form = useRef(null!);

    const sendEmail = () => {

            emailjs.sendForm('service_mjdizoo', 'template_2ktds7n', form.current, '1PbewP3nsEHNkgYL5')
            .then( response => {
                console.log(response);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Su correo ha sido enviado exitosamente',
                    showConfirmButton: false,
                    timer: 2500
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
            } );

            return;
        
    }

    const allValuesNotEmpty = ( values : any ) => {
        for (const key in values) {
          if (values[key] === '') {
            return false;
          }
        }
        return true;
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

                        <Formik
                            initialValues={ InitialValues }
                            onSubmit={ (values) => {
                                // Nothing
                            } }
                            validationSchema={ yupObject } 
                        >

                        {
                            ({ handleReset, values }) =>  (
                                <Form ref={form} noValidate>
                                    <MyTextInput 
                                        size="lg" 
                                        type='email' 
                                        className="Input" 
                                        label="Correo electrónico" 
                                        placeholder="mail@example.com" 
                                        name="email" 
                                    />

                                    <MyTextInput 
                                        size="lg" 
                                        className="Input" 
                                        label="Nombre completo" 
                                        placeholder="John Artur" 
                                        name="userName" 
                                    
                                        />

                                    <MyTextInput 
                                        size="lg" 
                                        className="Input" 
                                        label="Mensaje" 
                                        placeholder="Escribe tu mensaje..." 
                                        rows={5} 
                                        name="message" 
                                        istextarea="true"
                                    />

                                    <Button 
                                        type="submit" 
                                        css={{ width: '65%', zIndex: 0 }} 
                                        shadow 
                                        color="gradient"
                                        onClick={() => {
                                            if( allValuesNotEmpty(values) ){
                                                sendEmail();
                                                handleReset();
                                            }
                                        }}  
                                    > 
                                        Contáctame ahora 
                                    </Button>
                                </Form>
                            )
                        }

                        </Formik>
                        
                    </Grid>
                </Grid.Container>

            </section>
        
        </>
    )

}