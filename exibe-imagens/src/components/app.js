//react arrow funcion componen export: rafce
// ap07(exibe-imagens): encerra a apostila
import React from 'react'
import Busca from './Busca'
//import { createClient } from 'pexels'
import env from 'react-dotenv'
import ListaImagem from './ListaImagem.js'
import PexelsLogo from './PexelsLogo.js'
import pexelsClient from '../utils/pexelsClient.js'
export default class App extends React.Component {

  //pexelsClient = null

  state = {
    pics: []
  }

  //componentDidMount(){
    //console.log(env.PEXELS.KEY)
    //console.log(window.env.PEXELS_KEY)
    //this.pexelsClient = createClient(env.PEXELS_KEY)
  //}

  //onBuscaRealizada = (termo) => {
    //this.pexelsClient.photos.search({
      //query: termo
    //})
    //.then((pics) =>{
      //this.setState({pics: pics.photos})
    //})
  //}

  onBuscaRealizada = async (termo) => {
    const result = await pexelsClient.get('/search', {
      params: {
        query: termo
      }
    })
    this.setState({pics: result.data.photos})
  }

  render(){
    return (
      <div
        className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
          <div className="col-12">
            <PexelsLogo />
          </div>

          <div className='col-12'>
            <h1>Exibir uma lista de...</h1>
          </div>

          <div className='col-12'>
            <Busca onBuscaRealizada={this.onBuscaRealizada}/>
          </div>

          <div className='col-12'>
            <div className='grid'>
              <ListaImagem
              imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'} 
                pics={this.state.pics} 
              />
            </div>
          </div>

      </div>
    )
  }
}