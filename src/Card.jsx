import './style.css'

export function Card(props) {

    return (
        <div className="Card" style={{backgroundColor:props.card.novaCor}}>
            <div className="card-body">
                <h1>{props.card.novoNome}</h1>
                <p>{props.card.novaCor}</p>
            </div>
        </div>
    )
}