# Prueba tecnica de desarrollo UPA
Este proyecto es una API RESTful construida con TypeScript, Express y TypeORM. La API permite la gestión de usuarios con validación de datos, utilizando MySQL como base de datos.
Se utilizo ReactJS para realizar el front-end.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Licencia](#licencia)

## Requisitos

Asegúrate de tener instalado lo siguiente:

- Node.js (v14 o superior)
- MySQL

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/luisardon2411/evaluacion-informatica-UPA.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd LUIS_ARDON_BACK
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno:

    ```env
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=root
    DB_PASSWORD=password
    DB_DATABASE=mi_base_de_datos
    ```

2. Asegúrate de tener una base de datos MySQL configurada y en funcionamiento con los datos especificados en tu archivo `.env`.

## Uso

1. Ejecuta el proyecto en modo desarrollo:

    ```bash
    npm run dev
    ```

2. Para construir y ejecutar el proyecto en modo producción:

    ```bash
    npm run build
    npm run start:prod
    ```

    ## Instalacion Front-End (React & Vite)
   
   Asegúrate de tener instalado lo siguiente:

   - Node.js (v14 o superior)
   - Yarn 1.22 o posterior

  1. Navega hacia el directorio:
     
```bash
    cd LUIS_ARDON_FRONT/react-project
```
2. Instala sus dependencias

```bash
yarn
```

## Uso (Front-end)
1. Ejecutar el siguiente comando


```bash
yarn vite
```

2. Accede a la siguiente ubicación:

```bash
http://localhost:5173/
```


