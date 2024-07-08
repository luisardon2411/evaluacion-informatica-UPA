import { FormikProps } from 'formik'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

import './formulario.css'
import '../Welcome/welcome.css'

import { useState } from 'react'

const Formulario: React.FC<{ formik: FormikProps<{ name: string; email: string; phone: string; birthdate: string; anios: number }> }> = ({ formik }) => {

  const [age, setAge] = useState<number | null>(formik.values.anios);

  const calculateAge = (birthdate: string) => {
    const [day, month, year] = birthdate.split('/').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };


  return (
    <>
      <Helmet>
        <title> Formulario - Guardar Usuario </title>
      </Helmet>

      <motion.div
        className='container' id='container-main' >

        <div className='container-title'>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-sm text-gray-500'>Formulario para almacenar usuario
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className='text-7xl'>Guardar <span className='text-7xl text-gray'>Usuario</span>
          </motion.h1>
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          onSubmit={formik?.handleSubmit} className='form' >

            <div className='input-group'>
              <label htmlFor="name" className={`${formik.touched.name && formik.errors.name ? 'label label-error' : 'label'}`}>Nombre</label>
              <input
                type="text"
                name="name"
                id='name'
                placeholder="Nombre"
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                value={formik?.values.name}
                className={`${formik.touched.name && formik.errors.name ? 'input input-error' : 'input'}`} />
              {formik.touched.name && formik.errors.name && <span className='error'>{formik.errors.name}</span>}
            </div>

            <div className='input-group'>
              <label htmlFor="email" className={`${formik.touched.email && formik.errors.email ? 'label label-error' : 'label'}`}>Correo</label>
              <input
                type="email"
                name="email"
                id='email'
                placeholder="Correo"
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                value={formik?.values.email}
                className={`${formik.touched.email && formik.errors.email ? 'input input-error' : 'input'}`} />
              {formik.touched.email && formik.errors.email && <span className='error'>{formik.errors.email}</span>}
            </div>

            <div className='input-group'>
              <label htmlFor="phone" className={`${formik.touched.phone && formik.errors.phone ? 'label label-error' : 'label'}`}>Telefono</label>
              <input
                type="text"
                name="phone"
                id='phone'
                placeholder="Telefono"
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                value={formik?.values.phone}
                className={`${formik.touched.phone && formik.errors.phone ? 'input input-error' : 'input'}`} />
              {formik.touched.phone && formik.errors.phone && <span className='error'>{formik.errors.phone}</span>}
            </div>

            <div className='input-group'>
              <label htmlFor="birthdate" className={`${formik.touched.birthdate && formik.errors.birthdate ? 'label label-error' : 'label'}`}>
                Fecha de Nacimiento
              </label>
              <input
                type="text"
                name="birthdate"
                id='birthdate'
                placeholder="Fecha de Nacimiento"
                onChange={(e) => {
                  formik.handleChange(e);
                  if (e.target.value.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
                    calculateAge(e.target.value);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.birthdate}
                className={`${formik.touched.birthdate && formik.errors.birthdate ? 'input input-error' : 'input'}`}
              />
              {formik.touched.birthdate && formik.errors.birthdate && <span className='error'>{formik.errors.birthdate}</span>}
            </div>

            <div className='input-group'>
                  <label htmlFor="age" className='label'>
                    Edad
                  </label>
                  <input
                    type="text"
                    name="age"
                    id='age'
                    placeholder="Edad"
                    value={age !== null ? age.toString() + ' años' : ''}
                    readOnly
                    className='input'
                  />
                </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="buttons-container">
              <button aria-label='enviar' type='submit' className={`button ${formik.isValid ? 'button-primary' : 'button-disabled'} `} disabled={!formik.isValid} >
                Guardar usuario
              </button>

            </motion.div>

          </motion.form>
        </div>

        <motion.div className='container-image'>
          <div className='image-wrapper'>
            <img src='business.jpg' className='isometric-image' alt='Welcome' />
            <div className="overlay"></div>
          </div>
        </motion.div>

        {/* Esferas decorativas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="spheres">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{ yoyo: Infinity, duration: 1, delay: 0.5 }}
            className="sphere sphere-1"></motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{ yoyo: Infinity, duration: 1, delay: 0.5 }}
            className="sphere sphere-2"></motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{ yoyo: Infinity, duration: 1, delay: 0.5 }}
            className="sphere sphere-3"></motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Formulario