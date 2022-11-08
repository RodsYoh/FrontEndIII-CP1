import { useState } from 'react'
import './style.css'
import { Card } from './Card'

function App() {

    const [novoNome, setNovoNome] = useState('')
    const [novaCor, setNovaCor] = useState('')
    const [formularioErro, setFormularioErro] = useState(false)
    
    const [listaCores, setListaCores] = useState([
        // {
        //     novoNome: 'Rodrigo Araújo',
        //     novaCor: ' 	#FFDAB9'
        // },
        // {
        //     novoNome: 'Matheus Almeida',
        //     novaCor: '#00BFFF'
        // },
        // {
        //     novoNome: 'Maiara Pontes',
        //     novaCor: '#EE82EE'
        // }
    ])

    function cadastroCor(event) {

        event.preventDefault()

        const novoCadastroCor = {

        }

        if (novoNome === '' || novaCor === '') {

            setFormularioErro(true)

        } else {

            setFormularioErro(false)

            setListaCores([...listaCores, novoCadastroCor])

            setNovoNome('')
            setNovaCor('')
        }
    }

    return (
        <html lang="en">
            <main className="checkpoint">

            <div className="tittle-wrapper">
                <h1>Cores Favoritas</h1>
            </div>
            <form className={formularioErro ? 'form-error' : ''} onSubmit={event => cadastroCor(event)}>
                <div className='dados'>
                <div>
                    <label htmlFor="novoNome">Nome</label>
                    <input id="novoNome" name="novoNome" type="text" value={novoNome} placeholder="Preencha o nome" onChange={event => setNovoNome(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="novaCor">Cor</label>
                    <input id="novaCor" name="novaCor" type="color" value={novaCor} onChange={event => setNovaCor(event.target.value)} />
                </div>
                </div>
                <button type='submit'>Cadastrar cor</button>
            </form>
            <h1>Lista de Cores</h1>
            <section>
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

            {
                formularioErro ? (
                    <span>Preencha todos os campos</span>
                ) : null
            }

        </main>
    </html>
    )
}

export default App