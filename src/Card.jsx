import './style.css'

export function Card(props) {
const {cor} = props
    return (
        <div className="Card" style={{backgroundColor:cor.novaCor}}>
            <div className="card-body">
                <h1>{cor.novoNome}</h1>
                <p>{cor.novaCor}</p>
            </div>
        </div>
    )
}