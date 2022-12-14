import { useState } from 'react'
import './style.scss'
import { Card } from './Card'

function App() {

    const [novoNome, setNovoNome] = useState('')
    const [novaCor, setNovaCor] = useState('')
    const [formularioErro, setFormularioErro] = useState(false)

    const [listaCores, setListaCores] = useState([
        {
            novoNome: 'Pêssego',
            novaCor: ' 	#FFDAB9'
        },
        {
            novoNome: 'Ciano',
            novaCor: '#00BFFF'
        },
        {
            novoNome: 'Magenta',
            novaCor: '#EE82EE'
        }
    ])

    function cadastroCor(event) {

        event.preventDefault()

        const novoCadastroCor = {
            novaCor: novaCor,
            novoNome: novoNome
        }

        if (novoNome === '' || novaCor === '' || novoNome.length<3) {

            setFormularioErro(true)

        } else {

            setFormularioErro(false)

            setListaCores([...listaCores, novoCadastroCor])

            setNovoNome('')
            setNovaCor('')
        }
    }

    return (
        <html lang="en" className="color-change-5x">
            <main className="checkpoint">

                <div className="tittle-wrapper">
                    <h1>Cores Favoritas</h1>
                </div>
                <form className={formularioErro ? 'form-error' : ''} onSubmit={event => cadastroCor(event)}>
                    <div className='dados'>
                        <div>
                            <label htmlFor="novoNome">Nome da cor:  </label>
                            <input id="novoNome" name="novoNome" type="text" value={novoNome.trim()} placeholder='Nome da cor (min. 3 letras).' onChange={event => setNovoNome(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="novaCor">Cor:  </label>
                            <input id="novaCor" name="novaCor" type="color" value={novaCor.toUpperCase()} onChange={event => setNovaCor(event.target.value)} />
                        </div>
                    </div>
                    <button type='submit'>Cadastrar cor</button>
                </form>
                {
                    formularioErro ? (
                        <span>Preencha corretamente os campos</span>
                    ) : null
                }
                <h1>Lista de Cores</h1>
                <section class="listaDeCores">
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
        </html>
    )
}

export default App