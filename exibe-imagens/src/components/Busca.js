import React, { Component } from 'react'
//rcc react orientado a classe
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class busca extends Component {

    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (evento) => {
        console.log(evento.target.value)
    }


  render() {
    return (
      <div className='flex flex-column'>
        <span
            className='p-input-icon-left w-full'>
                <i className="pi pi-search"></i>
                <InputText
                    className='w-full'
                    onChange={this.onTermoAlterado}
                    placeholder={this.props.dica}
                
                />

        </span>

      </div>
    )
  }
}

Busca.defaultProps = {
    dica: 'Digite algo que deseja ver...'
}
