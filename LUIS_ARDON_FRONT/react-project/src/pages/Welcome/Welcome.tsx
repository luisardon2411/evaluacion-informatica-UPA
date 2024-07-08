import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import './welcome.css'

const Welcome = () => {
  return (
    <>
      <Helmet>
        <title> Bienvenido </title>
      </Helmet>

      <motion.div
        className='container' id='container-main' >

        <div className='container-title'>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-sm text-gray-500'>Te damos la bienvenida a
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className='text-7xl'>Prueba <span className='text-7xl text-gray'>Técnica</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='text-md text-thin'> En la pagina principal, encontraras lo siguiente
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="buttons-container">
            <NavLink to='/formulario' className="button button-primary">
              Formulario
            </NavLink>
            <NavLink to='/reportes' className="button button-secondary">
              Reportes
            </NavLink>
          </motion.div>
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

export default Welcome
