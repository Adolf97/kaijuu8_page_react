import React from 'react';
import '../Hojas-de-estilo/SectionMangaMx.css';
import Tomos from './Tomos';

export default function SectionManga(props) {
  return (
    <div className="section--mangaMx__container">
      <div className="section--mangaMx__titles">
        <h1 className="section--mangaMx__title">Tomos disponibles en México</h1>
      </div>
      <div className="section--mangaMx__info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maiores perspiciatis provident voluptate ducimus voluptatem quidem reprehenderit ea est. Minima, nemo quia. Cumque asperiores impedit perferendis? Ad beatae enim saepe!
      </div>
      <div className="section--mangaMx__tomos">
        <Tomos
          numero="uno"
        />
        <Tomos
          numero="dos"
        />
        <Tomos
          numero="tres"
        />
        <Tomos
          numero="cuatro"
        />
        <Tomos
          numero="cinco"
        />
        <Tomos
          numero="seis"
        />
      </div>
    </div>
  )
}