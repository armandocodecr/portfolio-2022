import * as Yup from 'yup'

export const yupObject =  Yup.object({
    email: Yup.string()
            .email('Este correo no es válido')
            .required('Este campo es requerido'),
    userName: Yup.string()
            .min(2, 'El nombre debe contener dos o más carácteres.')
            .max(35, 'El nombre debe contener 35 o menos carácteres.')
            .required('Este campo es requerido'),
    message: Yup.string()
            .min(5, 'El nombre debe contener dos o más carácteres.')
            .required('Este campo es requerido'),
})