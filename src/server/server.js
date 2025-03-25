const express = require('express');
const path = require('path');

const startServer = (option) => {
    const {port, public_path="public"} = option;
    console.log(port)
    console.log(public_path)

    const app = express()

    //para poder usar middleware se usa la funcion use
    app.use(express.static(public_path))
    //contenido estatico disponible en la carpeta public

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
    
}

module.exports = {
    startServer
}