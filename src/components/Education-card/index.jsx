import React from 'react';
import './index.css'

const Education = () => {
    return (
        <div className='education-card card'>
            <h5 className='education-card__title'>Education</h5>
            <div className='education-card__body'>
                <div></div>
                <span>Agosto De 2020 - Julio De 2022</span>
                <h5>ORT Argentina</h5>
                <span>TECNICATURA SUPERIOR EN ANÁLISIS DE SISTEMAS</span>
            </div>
            <div className='education-card__body'>
                <div></div>
                <span>Agosto De 2020 - Actualidad</span>
                <h5>Universidad de Buenos Aires</h5>
                <span>Ingeniería en Informática</span>
            </div>
        </div>
    );
}

export default Education;
