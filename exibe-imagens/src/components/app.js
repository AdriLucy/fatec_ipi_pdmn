//react arrow funcion componen export: rafce
import React from 'react'
import Busca from './Busca.js'
import { createClient } from 'pexels'
export default class App extends React.Component {

  pexelsClient = null

  componentDidMount(){
    pexelsClient = createClient('')
  }

  onBuscaRealizada = (termo) => {
    console.log(termo)
  }

  render(){
    return (
      <div
        className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
          <div className='col-12'>
            <h1>Exibir uma lista de...</h1>
          </div>
          <div className='col-8'>
            <Busca onBuscaRealizada={this.onBuscaRealizada}/>
          </div>
      </div>
    )
  }
}