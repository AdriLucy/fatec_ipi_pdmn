import React from 'react'
import Imagem from './Imagem'

const ListaImagem = ({pics, imgStyle}) => {
  return (
        pics.map((pic, key) => (
            <Imagem
                imgStyle={imgStyle}
                key={key}
                url={pics.src.small}
                alt={pics.alt} 
            />
        ))
  )
}

export default ListaImagem