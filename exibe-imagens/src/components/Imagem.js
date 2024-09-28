import React from 'react'
//rafce

const Imagem = ({key, url, alt, imgStyle}) => {
    //const key = props.key
    //const url = props.url
    //const alt = props.alt
    //const {key,url,alt} = props
  return (
    <div
        className={'${imgStyle} flex justify-content-center'}
        key={key}>
        <img
            src={url}
            alt={alt}/>
    </div>
  )
}

export default Imagem