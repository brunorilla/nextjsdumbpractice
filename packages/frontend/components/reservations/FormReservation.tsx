import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import formStyles from "@/pages/signup/signupstyles.module.css";
import {Button} from "antd";


export const FormReservation: React.FC = () => {
    return (
        <Formik
    >
        {
            ({errors, touched, handleSubmit, isSubmitting}) => (
                <div className={formStyles.formContainer}>
                    <Form>
                        <div className={formStyles.formGroup}>
                            <label className={formStyles.formLabel} htmlFor="service">Servicio</label>
                            <Field className={formStyles.formInput} name={"service"} id={"service"}
                                   aria-label={"Servicio"}></Field>
                            <ErrorMessage className={formStyles.formError}
                                          name={"service"}></ErrorMessage>
                        </div>
                        <div className={formStyles.formGroup}>
                            <label className={formStyles.formLabel}
                                   htmlFor="date">Fecha</label>
                            <Field className={formStyles.formInput} name={"date"} aria-label={"Fecha"}
                                   type={"date"} id={"date"}></Field>
                            <ErrorMessage className={formStyles.formError}
                                          name={"date"}></ErrorMessage>
                        </div>
                        <Button data-testid={"submitbtn"} className={formStyles.formButton} type="submit"
                                onClick={() => handleSubmit()} loading={isSubmitting}>Ingresar</Button>
                    </Form>
                </div>
            )
        }
    </Formik>)

}