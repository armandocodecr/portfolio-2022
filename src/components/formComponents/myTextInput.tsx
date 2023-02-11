import { ErrorMessage, useField } from 'formik'

import { Input, Textarea } from "@nextui-org/react";

interface Props {
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    className: string,
    type?: 'text' | 'email',
    label: string,
    placeholder: string,
    name: string
    istextarea?: string,
    rows?: number
}

export const MyTextInput = ({ size, rows, ...props }: Props) => {

    const [ field ] = useField(props);

    return (
        <>

            {
                !props.istextarea ? (
                    <>
                        <Input size={ size } { ...field } { ...props } />
                        <ErrorMessage name={ props.name } component='span' />
                    </>
                )
                : (
                    <>
                        <Textarea size={ size } rows={rows} { ...field } { ...props } />
                        <ErrorMessage name={ props.name } component='span' />
                    </>
                )
            }
        
        </>
    )

}