import React from 'react';
import 'tachyons';

const Card = ({ name, gender, height, id, birthYear }) => {
  return (
    <div className="dib br5 ma3 grow bw2 shadow-5 card" data-name={`${name.toLowerCase()}`}>
      <div className="character-img">
        <img src={`${process.env.PUBLIC_URL}/img/${id}.jpg`} alt={name} />
      </div>
      <div className="character-info">
        <h4 id="name" className="f3">{name}</h4>
        <p id="gender"><b>gender:</b>{gender}</p>
        <p id="height"><b>height:</b>{height}</p>
        <p id="birth-year"><b>birth year:</b>{birthYear}</p>
      </div>
    </div>
  )
}

export default Card;
