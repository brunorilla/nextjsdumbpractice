import {DatePicker} from "antd";
import { FieldProps} from "formik";

const DatePickerField = ({ field, form, ...props }: FieldProps) => {
    const { name } = field;
    const { setFieldValue } = form;

    const handleChange = (value: any) => {
        setFieldValue(name, value);
    };

    return (
        <DatePicker
            {...props}
            value={field.value}
            onChange={handleChange}
            onBlur={() => form.setFieldTouched(name, true)}
        />
    );
};


export default DatePickerField