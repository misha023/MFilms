import React from 'react';
import './FilmsRender.css';

function FilmsRender({ card_id, name, title }) {
    const imagePath = `${process.env.PUBLIC_URL}/img/${card_id}.webp`;
    const cardStyles = {
        background: `url(${imagePath})`
    }

    return (
      <div className="film-card">
          <div className="card-img" style={cardStyles}></div>
          <h4 className="card-name">{name}</h4>
          <h5 className="card-title">{title}</h5>
      </div>
    );
}

export default FilmsRender;
