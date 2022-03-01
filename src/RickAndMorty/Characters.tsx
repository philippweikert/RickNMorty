interface CharactersProps{
    name : string,
    key: number,
    pic: string,
    location: string,
    status: string,
    species: string
}

export default function Characters(props : CharactersProps){

    return(
        <div className="divBox">
            <h1 data-testid={'character-name'} className="h1Text">{props.name}</h1>
            <img data-testid={'character-image'} className="imgClass" src={props.pic} alt={'Pic of character'}/>
            <ul>
                <li data-testid={'character-location'}>Location: {props.location}</li>
                <li data-testid={'character-species'}>Species: {props.species}</li>
                <li data-testid={'character-status'}>Status: {props.status}</li>
            </ul>
        </div>
    )
}