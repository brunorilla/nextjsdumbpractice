import React from "react";

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {UnitsEnum} from "@/types/UnitsEnum";
import styles from '@/styles/Home.module.css';

const SignUpForm: React.FC = () => {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'El nombre debe tener 5 caracteres como mínimo')
            .max(50, 'Utilice menos de 50 caracteres para el nombre')
            .required('El nombre es requerido'),
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

    return (
        <Formik
            initialValues={{
                name: '',
                password: '',
                email: '',
                unit: '',
                isDue: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                // handle form submission
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field name="name"/>
                        <ErrorMessage name="name"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password"/>
                        <ErrorMessage name="password"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email"/>
                        <ErrorMessage name="email"/>
                    </div>
                    <div>
                        <label htmlFor="unit">Unit</label>
                        <Field placeholder={"4A"} name="unit" as="select">
                            <option value="">Unidad a la que pertenece</option>
                            {Object.values(UnitsEnum).map((unit) => {
                                console.log(unit);
                                return (
                                    <option key={unit} value={unit}>
                                        {unit}
                                    </option>
                                )
                            })}
                        </Field>
                        <ErrorMessage name="unit"/>
                    </div>

                    <button type="submit">Registrarse</button>
                </Form>
            )}
        </Formik>
    );
}

const SignUpWrapper: React.FC = () => {
    return <div className={styles.main}>
        <h1>Regístrese</h1>
        <SignUpForm/>
    </div>
}


const SignUp: React.FC = () => {
    return <SignUpWrapper/>
}

export default SignUp;