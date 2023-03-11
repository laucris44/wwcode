const fs = require('fs');
const path = require('path');

//console.log(__dirname);
//console.log(__filname);

const readFile = async (nombreArchivo) => {
    try {
        const filePath = path.resolve(`${__dirname}/${nombreArchivo}`);
        const data = await fs.promises.readFile(filePath, 'utf-8');
        console.log(data);
        
    }catch(error){
        console.log(error);
    }
}

const writeFile = async (nombreArchivo, data) => {
    try {
        const filePath = path.resolve(`${__dirname}/${nombreArchivo}`);
       //let data = ;
        const archivo = await fs.promises.writeFile(filePath, data)
        console.log("archivo creado");
        
    }catch(error){
        console.log(error);
    }
}

//writeFile("archivoCreado2.txt","Estoy escribiendo un archivo");
//readFile("archivoCreado.txt");

const fetchApi = require('./utils/api');
//const {gretings ,fetchApi} = fetchApi;

fetchApi('https://rickandmortyapi.com/api/character')
   .then((data) => console.log(data));