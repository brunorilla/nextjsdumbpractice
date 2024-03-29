import React from "react";

import {Formik, Form, Field, ErrorMessage, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {UnitsEnum} from "@/types/UnitsEnum";
import styles from '@/styles/Home.module.css';
import formstyles from './signupstyles.module.css';
import globalStyles from '@/styles/utils.module.css';
import {Button} from "antd";
import {NewUser} from "@/types/User";
import {createNewUser} from "@/lib/mutations";
import {ToastContainer, toast} from "react-toastify";
import {FormSubmissionError} from "@/lib/utils";

const SignUpForm: React.FC = () => {

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'El nombre debe tener 5 caracteres como mínimo')
            .max(50, 'Utilice menos de 50 caracteres para el nombre')
            .required('El nombre es requerido'),
        surname: Yup.string()
            .min(2, 'El apellido debe tener 5 caracteres como mínimo')
            .max(50, 'Utilice menos de 50 caracteres para el nombre')
            .required('El apellido es requerido'),
        password: Yup.string()
            .min(8, 'Utilice 8 caracteres como mínimo')
            .required('La contraseña es requerida'),
        email: Yup.string()
            .email('Formato de email inválido')
            .required('El email es requerido'),
        unit: Yup.string()
            .oneOf(Object.values(UnitsEnum), 'Unidad inexistente')
            .required('La unidad es requerida'),
    });

    const handleSubmit = async (values: NewUser) => {
        try {
            const response = await createNewUser(values);
            if (response.status === 201) {
                return response.data;
            } else {
                throw new FormSubmissionError(response.response.data.error);
            }
        } catch (error) {
            console.error(error);
            throw new FormSubmissionError('Error al crear usuario.');
        }
    };

    const onSubmit = async (values: NewUser) => {
        try {
            const data = await handleSubmit(values);
            toast.success('Usuario creado');
            console.log('Created user:', data);
        } catch (error) {
            if (error instanceof FormSubmissionError) {
                toast.error(error.message);
            } else {
                console.error(error);
                toast.error('An unexpected error occurred.');
            }
        }
    };


    return (
        <div className={globalStyles.wrapper}>
            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    password: '',
                    email: '',
                    unit: '',
                    isDue: false,
                }}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
            >
                {({errors, touched, handleSubmit, isSubmitting,}) => (
                    <div className={formstyles.formContainer}>
                        <Form>
                            <div className={formstyles.formGroup}>
                                <label className={formstyles.formLabel} htmlFor="name">Nombre</label>
                                <Field className={formstyles.formInput} name="name"/>
                                <ErrorMessage className={formstyles.formError} name="name"/>
                            </div>
                            <div className={formstyles.formGroup}>
                                <label className={formstyles.formLabel} htmlFor="surname">Apellido</label>
                                <Field className={formstyles.formInput} name="surname"/>
                                <ErrorMessage className={formstyles.formError} name="surname"/>
                            </div>
                            <div className={formstyles.formGroup}>
                                <label className={formstyles.formLabel} htmlFor="password">Contraseña</label>
                                <Field className={formstyles.formInput} name="password" type="password"/>
                                <ErrorMessage className={formstyles.formError} name="password"/>
                            </div>
                            <div className={formstyles.formGroup}>
                                <label className={formstyles.formLabel} htmlFor="email">Email</label>
                                <Field className={formstyles.formInput} name="email" type="email"/>
                                <ErrorMessage className={formstyles.formError} name="email"/>
                            </div>
                            <div className={formstyles.formGroup}>
                                <label className={formstyles.formLabel} htmlFor="unit">Unidad</label>
                                <Field className={formstyles.formSelect} placeholder={"4A"} name="unit" as="select">
                                    <option value="">Unidad a la que pertenece</option>
                                    {Object.values(UnitsEnum).map((unit) => {
                                        return (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        )
                                    })}
                                </Field>
                                <ErrorMessage className={formstyles.formError} name="unit"/>
                            </div>
                            <Button loading={isSubmitting} onClick={() => handleSubmit()}
                                    className={formstyles.formButton} type="submit">Registrarse</Button>
                        </Form>
                    </div>
                )}
            </Formik>
            <ToastContainer/>
        </div>
    );
}

const SignUpWrapper: React.FC = () => {
    return <div className={styles.main}>
        <h1 className={globalStyles.formTitles}>Regístrese</h1>
        <SignUpForm/>
    </div>
}


const SignUp: React.FC = () => {
    return <SignUpWrapper/>
}

export default SignUp;