import { useState } from 'react'
//import './style.scss'
import { Card } from './Card'

export default function App() {

    const [novoNome, setNovoNome] = useState(setNovoNome)
    const [novaCor, setNovaCor] = useState(setNovaCor)
    const [formularioErro, setFormularioErro] = useState(false)
    const [listaCores, setListaCores] = useState([
        {
            nome: 'Rodrigo Araújo',
            cor: ' 	#FFDAB9'
        },
        {
            nome: 'Matheus Almeida',
            cor: '#00BFFF'
        },
        {
            nome: 'Maiara Pontes',
            cor: '#EE82EE'
        }
    ])

    function novaCorLista(event) {

        event.preventDefault()

        const novaCor = {
            nome: novoNome,
            cor: novaCor
        }

        if (novoNome === '' || novaCor === '') {

            setFormularioErro(true)

        } else {

            setFormularioErro(false)

            setListaCores([...listaCores, novaCor])

            setNovoNome('')
            setNovaCor('')
        }

        //console.log(opcao)

    }

    return (

        <main className="checkpoint">

            <div className="tittle-wrapper">
                <h1>Produtos</h1>
                {/* <button onClick={addNewProduct}>Adicionar novo produto</button> */}
            </div>

            <form className={formularioErro ? 'form-error' : ''} onSubmit={event => novaCorLista(event)}>

                <div>
                    <label htmlFor="novoNome">Nome</label>
                    <input id="novoNome" type="text" value={novoNome} onChange={event => setNovoNome(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="novaCor">Foto</label>
                    <input id="novaCor" type="color" value={novaCor} onChange={event => setNovaCor(event.target.value)} />
                </div>

                <button type='submit'>Cadastrar cor</button>
            </form>

            {
                formularioErro ? (
                    <span>Preencha todos os campos</span>
                ) : null
            }

            <section className='products'>
                {
                    listaCores.map(
                        cor => {
                            return (
                                <Card
                                    cor={cor}
                                />
                            )
                        }
                    )
                }
            </section>

        </main>

    )

}