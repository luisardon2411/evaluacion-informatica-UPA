/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from 'yup';
import Formulario from '../../pages/Formulario/Formulario'
import { useFormik } from 'formik';
import { useAxios } from '../../hooks/UseAxios';



const validationSchema = yup.object().shape({
    name: yup.string().required('El nombre es requerido').matches(/^[a-zA-Z\s]*$/, 'El nombre solo puede contener letras'),
    email: yup.string().email('El correo electrónico es invalido, verifica que cumpla con xxxxx@xxxx.xx').required('El correo electrónico es requerido'),
    phone: yup.string().required('El telefono es requerido').matches(/^[0-9]+$/, 'El telefono solo puede contener numeros'),
    birthdate: yup.string().matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Fecha debe tener el formato dd/mm/YYYY').required('Fecha de nacimiento es requerida'),
})

const FormularioContainer: React.FC = () => {

    const axios = useAxios();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            birthdate: '',
            anios: 0
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const { name, email, phone, birthdate } = values;

                const body = {
                    nombre: name,
                    fecha: birthdate,
                    correo_electronico: email,
                    telefono: Number(phone),
                }

                const { data } = await axios.post('/api/v1/guardar_usuario', body);
                alert(data.response);
                formik.resetForm();
            } catch (error: any) {
                console.log(error);
                alert(error.response.data.error || 'Ocurrio un error al guardar el usuario');
            }
        }
    })

    return (
        <Formulario formik={formik} />
    )
}

export default FormularioContainer