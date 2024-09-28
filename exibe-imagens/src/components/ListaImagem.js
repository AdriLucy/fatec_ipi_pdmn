import React from 'react'
import Imagem from './Imagem'

const ListaImagem = ({pics, imgStyle}) => {
  return (
        pics.map((pic, key) => (
            <Imagem
                imgStyle={imgStyle}
                key={key}
                url={pic.src.small}
                alt={pic.alt} 
            />
        ))
  )
}

export default ListaImagem