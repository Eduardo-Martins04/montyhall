import React, { Component } from "react"
import Porta from "../Components/Porta"

import './App.css'

export default class App extends Component {

    state = {
        jogoIniciado: false,
        totalDePortas: 3,
        portaSelecionada: null,
    }

    setTotalDePortas(e) {
        this.setState({ totalDePortas: e.target.value })
    }

    setPortaSelecionada(e) {
        this.setState({ portaSelecionada: e.target.value })

    }

    setJogoIniciado(e, iniciar) {
        e.preventDefault()
        this.setState({ jogoIniciado: iniciar })

    }

    renderizarPortas() {
        const portas = []
        for (let i = 1; i <= this.state.totalDePortas; i++) {
            portas.push(<Porta numero={i} index={i} premiada={this.state.portaSelecionada === i} />)
        }

        return portas.map((porta, index) => {
            return (
                porta
            )
        })
    }

    verificarEntradas(e){
        const portaSelecionada = parseFloat(this.state.portaSelecionada)
        const totalDePortas = this.state.totalDePortas

        if(portaSelecionada > totalDePortas){
            alert('A porta premiada não pode ser maior que o total de portas')
            return false
        } else if(!portaSelecionada){
            alert('Selecione qual será a porta premiada')
            return false
        } else {
            this.setJogoIniciado(e, true)
        }
    }

    render() {
        return (
            <div id="app">
                <h1>Problema de Monty Hall</h1>

                <form className="form">
                    {!this.state.jogoIniciado && (
                        <div>
                            <label htmlFor="totalDePortas">Quantas Portas? </label>
                            <input type="text" id="totalDePortas"
                                onChange={e => this.setTotalDePortas(e)} value={this.state.totalDePortas} />
                        </div>
                    )}

                    {!this.state.jogoIniciado && (
                        <div>
                            <label htmlFor="portaSelecionada">Qual porta é premiada? </label>
                            <input type="text" id="portaSelecionada"
                                onChange={e => this.setPortaSelecionada(e)} />
                        </div>
                    )}

                    {!this.state.jogoIniciado && (
                        <button onClick={e => this.verificarEntradas(e)}>Iniciar</button>
                    )}

                    {this.state.jogoIniciado && (
                        <button onClick={e => this.setJogoIniciado(e, false)}>Reiniciar</button>
                    )}
                    

                </form>

                <div className="portas">
                    {this.state.jogoIniciado && (
                        this.renderizarPortas()
                    )}
                </div>
            </div>
        )
    }
}