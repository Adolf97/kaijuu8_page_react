import React from 'react';
import '../Hojas-de-estilo/SectionManga.css';
import banner from '../Images/kaiju-no-8-banner.webp';

export default function SectionManga() {
  return (
    <div id="manga" className="section--manga__container">
      <div className="section--manga__titles">
        <h1 className="section--manga__title">Kaijuu No. 8: Manga</h1>
        <h5 className="section--manga__subtitle">"Los defenderé a todos con mi vida"</h5>
      </div>
      <div className="section--manga__info__container">
        <div className="info--text">
          <span className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in dicta vel autem provident exercitationem hic consequuntur architecto! Laudantium, eos! Totam, sunt doloremque. Iure atque mollitia debitis quo, ipsam provident.
          </span>
          <span className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in dicta vel autem provident exercitationem hic consequuntur architecto! Laudantium, eos! Totam, sunt doloremque. Iure atque mollitia debitis quo, ipsam provident.
          </span>
          <button className="btn__info--text"><a href="https://mangaplus.shueisha.co.jp/titles/200053" target="_blank" rel="noreferrer">Leer el manga</a></button>
        </div>
        <div className="info--image">
          <img
            src={banner} 
            alt="Banner Kaijuu No.8" 
          />
        </div>
      </div>
    </div>
  )
}
