import React, { Component } from "react"
import './Porta.css'
import Presente from "./Presente"

export default class Porta extends Component {

    state = {
        selecionada: false,
        aberta: false,
    }

    setSelecionada(){
       this.setState({selecionada: !this.state.selecionada})
   
    }

    setAberta(){
        this.setState({aberta: true})
    }

    selecionarClasse(classePadrao){
        if(classePadrao == 'porta'){
            let classes = classePadrao
            classes += this.state.aberta ? ' aberta' : ''
            return classes
        }

        let classes = classePadrao
        classes += this.state.selecionada  && !this.state.aberta ? ' selecionada' : ''
        return classes
    }
    

    render(){
        
        return (
        <div className="areaPorta" >
            <div className={this.selecionarClasse('molduraPorta')}>
                {this.props.premiada && this.state.aberta ? <Presente/> : ''}
            </div>
            <div className={this.selecionarClasse('porta')} onClick={e => this.setSelecionada()}>
                <div className={this.selecionarClasse('numero')}>{this.props.numero}</div>
                <div className={this.selecionarClasse('fechadura')}
                onClick={e => this.setAberta()}></div>
            </div>
        </div>

        )
    }
}