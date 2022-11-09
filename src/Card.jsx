import './style.scss'

export function Card(props) {
const {cor} = props
    return (
        <div className="Card" style={{backgroundColor:cor.novaCor, width: '15vw', padding: '2px 0px 0.5px 5px', margin: '5px auto 5px auto'}}>
                <h1>{cor.novoNome}</h1>
                <p>{cor.novaCor}</p>
        </div>
    )
}