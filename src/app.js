const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {
    console.log('Hola mundo desde app.js')
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//funcion agnostica para la creacion de un servidor autoconvocada
//agnostica porque no tiene nombre
//autoconvocada porque se llama a si misma con los parentesis al ultumo
(async () =>{
    main()
})()