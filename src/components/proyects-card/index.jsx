import React from 'react'
import './index.css'

const Proyects = () => {
    return (
        <div className="proyects-card card">
            <h5>My proyects</h5>
            <div className='proyects'>
                <div className='proyects__item'>
                    <h6 className='item__proyect-name'> Portfolio modelo</h6>
                    <ion-icon name="git-branch-sharp"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                </div>
                
            </div>
            
        </div>
    );
}

export default Proyects;
