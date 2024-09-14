//react class component: rcc
import React, { Component } from 'react'
//imrd
import ReactDOM from 'react-dom'

export default class EstacaoClimatica extends Component {
    timer = null
    
    state = {
        data: null
    }

    constructor(props){
        super(props)
        console.log("EC:constructor")
    }

    componentDidMount(){
        console.log('EC:ComponentDidMount')
        this.terminal = setInterval(() => {
            const dataAtual = new Date().toLocaleTimeString()
            this.setState({data: dataAtual})
            //this.state.data = dataAtual
        }, 1000)

    }

    componentWillUnmount(){
        console.log("EC:ComponentDidUnMount")
        clearInterval(this.timer)
    }

    componentDidUpdate(){
        console.log("EC:ComponentDidUpdate")
    }

  render() {
    console.log("EC:Render")
    return (
        <div className='card'>
        <div className='card-body'>
          <div
            style={{height: '6rem'}} 
            className='d-flex align-items-center rounded mb-2'>
              <i className={`fa-solid fa-5x ${this.props.icone}`}></i>
              <p className='w-75 ms-3 text-center fs-1'>{this.props.estacao}</p>
          </div>
          <p className='text-center'>
            {
              this.props.latitude ?
                `Coordenadas: ${this.props.latitude},${this.props.longitude}. Data: ${this.state.data}`
              :
                //this.props.mensagemDeErro ?
                //  this.props.mensagemDeErro
                //:
                  'Clique no botão para saber a sua estação climática'
            }
          </p>
          <button
            onClick={this.props.obterLocalizacao} 
            className='btn btn-outline-primary w-100 mt-2'>
            Qual a minha estação?
          </button>
          <button
            className='btn btn-outline-danger w-100 mt-2'
            onClick={() => {
              ReactDOM.unmountComponentAtNode(
                document.querySelector('#root')
              )
            }}>
            Unmount
          </button>
        </div>
      </div>
    )
  }
}
