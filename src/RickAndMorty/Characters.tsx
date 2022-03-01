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
        <div className="divBox" data-testid={'test-components'}>
            <h1 className="h1Text">{props.name}</h1>
            <img className="imgClass" src={props.pic} alt={'Pic of character'}/>
            <ul>
                <li>Location: {props.location}</li>
                <li>Species:  {props.species}</li>
                <li>Status:   {props.status}</li>
            </ul>
        </div>
    )
}