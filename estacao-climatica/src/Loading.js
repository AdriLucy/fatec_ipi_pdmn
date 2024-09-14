//rcc
import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
    <div className="d-flex flex-column justify-content-center align-itens-center border rouded p-3">
        <div
            className='spinner-border text-primary'
            style={{width: '3rem', height: '3rem'}}>
            <span className="visually-hidden">carregando</span>
        </div>
        <p Classname='text-primary mt-3'> {this.props.mensagem || "Carregando"}
        </p>

    </div>
    )
  }
}

Loading.defaultProps = {
    mensagem: 'Carregando'
}
