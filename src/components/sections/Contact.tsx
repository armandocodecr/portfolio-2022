import { useRef } from "react";

import { Text, Grid, Button } from "@nextui-org/react";
import Lottie from "lottie-react";
import { Formik, Form } from "formik"

import AnimationContact from '../../static/images/AnimationContact.json'
import { MyTextInput } from "../formComponents/myTextInput";
import { InitialValues, allValuesNotEmpty, sendEmail, yupObject } from "../../services";

export const ContactSection = () => {

    const form = useRef(null!);

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
                                //nothing
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
                                        css={{ width: '40%', zIndex: 0 }} 
                                        shadow 
                                        color="gradient"
                                        onPress={() => {

                                            if( allValuesNotEmpty(values) ){
                                                sendEmail(form);
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