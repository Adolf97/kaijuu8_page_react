import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../Hojas-de-estilo/SectionAnime.css';
import anime_img from '../Images/anime-img.webp';

export default function SectionAnime() {
  return (
    <div id="anime" className="section--anime__container">
      <div className="section--anime__titles">
        <h1 className="section--anime__title">Kaijuu No. 8: Anime</h1>
      </div>
      <div className="section--anime__info__container">
      <div className="anime__info--image">
          <img
            src={anime_img} 
            alt="Anime Kaijuu No.8" 
          />
        </div>
        <div className="anime__info--text">
          <span className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in dicta vel autem provident exercitationem hic consequuntur architecto! Laudantium, eos! Totam, sunt doloremque. Iure atque mollitia debitis quo, ipsam provident.
          </span>
          <span className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in dicta vel autem provident exercitationem hic consequuntur architecto! Laudantium, eos! Totam, sunt doloremque. Iure atque mollitia debitis quo, ipsam provident.
          </span>
          <NavLink className="btn__anime__info--text" to="./Error404">Ver el anime</NavLink>
        </div>
      </div>
    </div>
  )
}
