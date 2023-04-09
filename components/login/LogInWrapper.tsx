import React, {useState} from "react";
import styles from '../layout.module.css';
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import formStyles from '@/pages/signup/signupstyles.module.css';
import globalStyles from "@/styles/utils.module.css";

export const LogInWrapper: React.FC = ({todos, setTodos}) => {
    const LogInSchema = Yup.object().shape({
        email: Yup.string()
            .email('Formato de email inválido')
            .required('Utilice su email para iniciar sesión'),
        password: Yup.string()
            .min(8, 'Su contraseña no puede ser menor a 8 caracteres')
            .required('Olvido ingresar su contraseña')
    })

    return (
        <>
            <div className={globalStyles.wrapper}>
                <div className={globalStyles.displayFlex}>
                    <h1 className={globalStyles.formTitles}>Bienvenido</h1>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={LogInSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    {
                        ({errors, touched}) => (
                            <div className={formStyles.formContainer}>
                                <Form>
                                    <div className={formStyles.formGroup}>
                                        <label className={formStyles.formLabel} htmlFor="email">Email</label>
                                        <Field className={formStyles.formInput} name={"email"}></Field>
                                        <ErrorMessage className={formStyles.formError} name={"email"}></ErrorMessage>
                                    </div>
                                 <div className={formStyles.formGroup}>
                                        <label className={formStyles.formLabel} htmlFor="password">Constraseña</label>
                                        <Field className={formStyles.formInput} name={"password"} type={"password"}></Field>
                                        <ErrorMessage className={formStyles.formError} name={"password"}></ErrorMessage>
                                    </div>
                                    <button className={formStyles.formButton} type="submit">Ingresar</button>
                                </Form>
                            </div>
                        )
                    }
                </Formik>
            </div>
        </>

    )
}

