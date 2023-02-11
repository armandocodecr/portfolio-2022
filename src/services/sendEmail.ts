import emailjs from '@emailjs/browser'
import Swal from "sweetalert2";

export const sendEmail = ( form: React.MutableRefObject<never> ) => {

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