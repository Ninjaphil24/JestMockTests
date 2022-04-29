import axios from "axios"

const swapiGetter = (id)=>
axios
    .get('https://swapi.dev/api/people/'+id+'/')
    .then((res)=>res.data.name)
    .catch((err)=>console.error(err))

export default swapiGetter

console.log(swapiGetter(1))
