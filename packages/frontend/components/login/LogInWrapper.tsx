import React, {useState} from "react";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik, FormikValues} from "formik";
import formStyles from '@/pages/signup/signupstyles.module.css';
import globalStyles from "@/styles/utils.module.css";
import {Button} from "antd";
import {useAuth} from "@/lib/auth";

export const LogInWrapper: React.FC = ({todos, setTodos}) => {
    const LogInSchema = Yup.object().shape({
        email: Yup.string()
            .email('Formato de email inválido')
            .required('Utilice su email para iniciar sesión'),
        password: Yup.string()
            .min(8, 'Su contraseña no puede ser menor a 8 caracteres')
            .required('Olvido ingresar su contraseña')
    })
    const {authState, login} = useAuth();

    const handleLogin = (values: FormikValues) => {
        login(values.email, values.password)
    }

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
                    onSubmit={handleLogin}
                >
                    {
                        ({errors, touched, handleSubmit, isSubmitting}) => (
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
                                    <Button className={formStyles.formButton} type="submit" onClick={()=>handleSubmit()} loading={isSubmitting}>Ingresar</Button>
                                </Form>
                            </div>
                        )
                    }
                </Formik>
            </div>
        </>

    )
}

