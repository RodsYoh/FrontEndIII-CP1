import './style.scss'

export function Card(props) {

    return (
        <div className="Card" style={{background-color:"${props.card.cor}"}}>
            <div className="card-body">
                <h1>{props.card.nome}</h1>
            </div>
        </div>
    )
}