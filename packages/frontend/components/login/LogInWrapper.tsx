import React, {useEffect, useState} from "react";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik, FormikValues} from "formik";
import formStyles from '@/pages/signup/signupstyles.module.css';
import globalStyles from "@/styles/utils.module.css";
import {Button} from "antd";
import {useAuth} from "@/lib/auth";
import {useRouter} from 'next/router';
import {ToastContainer, toast} from 'react-toastify';
import { userNotFoundErrorMsgRegExp} from "@/globals";


export const LogInWrapper: React.FC = ({todos, setTodos}) => {
    const LogInSchema = Yup.object().shape({
        email: Yup.string()
            .email('Formato de email inválido')
            .required('Utilice su email para iniciar sesión'),
        password: Yup.string()
            .min(8, 'Su contraseña no puede ser menor a 8 caracteres')
            .required('Olvido ingresar su contraseña')
    })


    const router = useRouter();

    const {authState, login} = useAuth();


    const handleLogin = async (values: FormikValues) => {
        const errorMessage = await login(values.email, values.password)
        if (errorMessage && userNotFoundErrorMsgRegExp.test(errorMessage)) {
            toast.error("Credenciales inexistentes. Cree una cuenta");
        } else if(errorMessage) {
            toast.error(errorMessage)
        } else {
            toas.success("Bienvenido");
        }

    }

    useEffect(() => {
        if (authState.isAuthenticated) {
            router.push('/');
        }
    }, [authState.isAuthenticated, router]);


    return (
        <>
            {authState.isAuthenticated ? (
                <p>Ya se encuentra logueado...redirigiendo</p>
            ) : (
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
                                            <Field className={formStyles.formInput} name={"email"} id={"email"} aria-label={"Email"}></Field>
                                            <ErrorMessage className={formStyles.formError}
                                                          name={"email"}></ErrorMessage>
                                        </div>
                                        <div className={formStyles.formGroup}>
                                            <label className={formStyles.formLabel}
                                                   htmlFor="password">Contraseña</label>
                                            <Field className={formStyles.formInput} name={"password"}
                                                   type={"password"} id={"password"}></Field>
                                            <ErrorMessage className={formStyles.formError}
                                                          name={"password"}></ErrorMessage>
                                        </div>
                                        <Button  data-testid={"submitbtn"} className={formStyles.formButton} type="submit"
                                                onClick={() => handleSubmit()} loading={isSubmitting}>Ingresar</Button>
                                    </Form>
                                </div>
                            )
                        }
                    </Formik>
                </div>)}
            <ToastContainer/>
        </>

    )
}

