import './style.css'

export function Card(props) {
const {cor} = props
    return (
        <div className="Card" style={{backgroundColor:cor.novaCor}}>
                <h1>{cor.novoNome}</h1>
                <p>{cor.novaCor}</p>
        </div>
    )
}