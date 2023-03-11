//const fetch = require('node-fetch');

const fetchApi = async (url) => {
    try {
        const res = await fetch (url);
        const {results} = await res.json()
        return results.map(({id, name,gender}) => ({id, name, gender}))
    } catch (error){
        console.log(error);
    }
}

const gretings = () => {
    console.log ("hello there!")
}

//export const gretings =() => {}
module.exports= fetchApi