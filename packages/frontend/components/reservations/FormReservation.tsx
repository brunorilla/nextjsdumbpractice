import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik, FormikValues} from "formik";
import formStyles from "@/pages/signup/signupstyles.module.css";
import globalStyles from '@/styles/utils.module.css';
import {Button} from "antd";
import {ServiceEnum} from "@/types/ServiceEnum";
import {ToastContainer, toast} from "react-toastify";
import * as Yup from "yup";
import DatePickerField from "@/components/reservations/DatePickerField";


const serviceLabels = {
    [ServiceEnum.LAUNDRY]: "Lavarropas",
    [ServiceEnum.SUM]: "SUM",
    [ServiceEnum.DRYER]: "Secadora",
};


export const FormReservation: React.FC = () => {
    const submit = (values: FormikValues)=> {
        console.log(values);
        toast.info(JSON.stringify(values));
    }

    const LogInSchema = Yup.object().shape({
        service: Yup.string()
            .oneOf(Object.values(ServiceEnum), 'Elija un servicio')
            .required('El servicio es requerido'),
        date: Yup.date()
            .required('Olvidó ingresar la fecha de su reserva')
    })



    return (
        <div className={globalStyles.wrapper}>
        <Formik initialValues={
            {
                service: "",
                date: "",
                time: "",
            }}
                onSubmit={submit}
                validationSchema={LogInSchema}
        >
            {
                ({errors, touched, handleSubmit, isSubmitting}) => (
                    <div className={formStyles.formContainer}>
                        <Form>
                            <div className={formStyles.formGroup}>
                                <label className={formStyles.formLabel} htmlFor="service">Servicio</label>
                                <Field
                                    className={formStyles.formSelect}
                                    placeholder={"Laundry"}
                                    name="service"
                                    as="select"
                                    id={"service"}
                                >
                                    <option value="">Servicio</option>
                                    {Object.values(ServiceEnum)
                                        .filter((value) => typeof value === "number")
                                        .map((value) => (
                                            <option key={ServiceEnum[value]} value={ServiceEnum[value]}>
                                                {serviceLabels[value]}
                                            </option>
                                        ))}
                                </Field>
                                <ErrorMessage className={formStyles.formError} name="service"/>
                            </div>
                            <div className={formStyles.formGroup}>
                                <label className={formStyles.formLabel}
                                       htmlFor="date">Fecha y hora</label>
                                <Field name="date" component={DatePickerField} showTime={{ minuteStep: 30 }} format="YYYY-MM-DD HH:mm" />
                                <ErrorMessage className={formStyles.formError}
                                              name={"date"}></ErrorMessage>
                            </div>
                            <Button data-testid={"submitbtn"} className={formStyles.formButton} type="submit"
                                    onClick={() => handleSubmit()} loading={isSubmitting}>Generar Reserva</Button>

                        </Form>
                    </div>
                )
            }
        </Formik>
        <ToastContainer/>
        </div>
    )

}



