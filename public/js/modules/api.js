const BASE_URL = 'https://rickandmortyapi.com/api'

export async function getCharacters(page = 1) {
    try{
        const res = await fetch(`${BASE_URL}/character?page=${page}`)
        const data = await res.json();     
        console.log(data.results)   
        return data.results;
    } catch (err){
        throw new Error("No se pudieron obtener los personajes.! ", err);
    }
}