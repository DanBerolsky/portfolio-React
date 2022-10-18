import React from 'react'
import './index.css'

const Info = () => {
    return (
        <div className="info-card card">
            <div className='info-card__item'>
                <ion-icon name="location-sharp"></ion-icon>
                <div>
                    <div>Based in :</div>
                    <div>Argentina</div>
                </div>
            </div>
            <div className='info-card__item'>
                <ion-icon name="logo-github"></ion-icon>
                <div>
                    <div>Github :</div>
                    <div>DanBerolsky</div>
                </div>
            </div>
            <div className='info-card__item'>
                <ion-icon name="logo-linkedin"></ion-icon>
                <div>
                    <div>LinkedIn :</div>
                    <div>Dan Berolsky</div>
                </div>
            </div>
            <div className='info-card__item'>
                <ion-icon name="code-sharp"></ion-icon>
                <div>
                    <div>Dev :</div>
                    <div> Dan Berolsky</div>
                </div>
            </div>
            <div className='info-card__item'>
                <ion-icon name="mail-sharp"></ion-icon>
                <div>
                    <div>Email :</div>
                    <div>berolskydan@gmail.com</div>
                </div>
            </div>
        </div>
    );
}

export default Info;
