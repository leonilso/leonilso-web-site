import React from 'react';
import './ExperienciaCard.css';

function ExperienciaCard({ profissao, anos, descricao }) {
  return (
    <div className="experiencia-card">
        <div className="experiencia-header">
            <h3>{profissao}</h3>
        </div>
        <p id='anos'>{anos}</p>
        <p>{descricao}</p>
    </div>
  );
}

export default ExperienciaCard;