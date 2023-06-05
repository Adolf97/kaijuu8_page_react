import React from 'react';
import '../Hojas-de-estilo/Tomos.css';

export default function Tomos(props) {
  return (
    <div className="tomos__card">
      <div className="tomos--img__container">
        <img
          src={require(`../Images/tomo-${props.numero}.webp`)}
          alt={`Tomo ${props.numero}`}
        />
      </div>
      <div className="tomos--info__container">
        <span>{`Tomo número ${props.numero}`}</span>
        <button><a target={'_blank'} rel="noreferrer" href="https://tiendapanini.com.mx/catalogsearch/result/?q=Kaiju+8">Comprar</a></button>
      </div>
    </div>
  )
}
