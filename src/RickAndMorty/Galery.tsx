import Characters from "./Characters";
import {useEffect, useState} from "react";

interface MortyData {
    name : string,
    id: number,
    image: string,
    location: {
        name: string
    },
    status: string,
    species: string
}
interface MortyInfo {
    next: string | null,
    prev: string | null
}

export default function Gallery() {

    const [filter, setFilter] = useState('')
    const [page, setPage] = useState(1)
    const [characters, setCharacters] = useState([] as Array<MortyData>)
    const [info,setInfo] = useState({} as MortyInfo)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }
                throw new Error("Schade, Marmelade")})
                    .then(data => {
                        setCharacters(data.results)
                        setInfo(data.info)
                        setFilter('')
                    })
                    .catch()
            },
        [page])



    return (
        <div>
        <input data-testid= "search-field" type={'text'} placeholder={'Search for your favorite Character'}
               onChange={entry => {setFilter(entry.target.value)}} className={'gallerySearch'}/>
            {info.next && <button onClick={() => setPage(page+1)}>To other Characters</button> }
            {info.prev && <button onClick={() => setPage(page-1)}>Back to ye olde ones</button> }
        <div className="majorBox">
            {characters.length>0
                ?
                characters.filter(char => char.name.toLowerCase().includes(filter.toLowerCase())).map(character =>
                <div data-testid={'gallery-item'}>
                    <Characters
                    name={character.name}
                    key={character.id}
                    pic={character.image}
                    location={character.location.name}
                    status={character.status}
                    species={character.species}/>
                </div>)

                :
                <div>I'm tired of beeing at your service...</div>}
            </div>
        </div>)
}

