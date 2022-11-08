import React from 'react'
import './index.css'

const Info = () => {
    return (
        <div className="info-card card">
            <div className='info-card__item'>
                <ion-icon name="location-sharp"></ion-icon>
                <div className='info-card__item-container'>
                    <div>Based in :</div>
                    <div>Argentina</div>
                </div>
            </div>
            <div className='info-card__item'>
                <ion-icon name="logo-github"></ion-icon>
                <div className='info-card__item-container'>
                    <div>Github :</div>
                    <div>
                        <a className='contact-link' href="https://github.com/DanBerolsky"></a>
                        <ion-icon className='link-icon' name="link-outline"></ion-icon>
                        <div>DanBerolsky</div>
                    </div>
                </div>
            </div>
            <div className='info-card__item'>
                <ion-icon name="logo-linkedin"></ion-icon>
                <div className='info-card__item-container'>
                    <div>LinkedIn :</div>
                    <div>
                        <a className='contact-link' href="https://www.linkedin.com/in/dan-berolsky/"></a>
                        <ion-icon name="link-outline" className='link-icon'></ion-icon>
                        <div>Dan Berolsky</div>
                    </div>
                </div>
            </div>
            <div className='info-card__item'>
                <ion-icon name="code-sharp"></ion-icon>
                <div className='info-card__item-container'>
                    <div>Dev :</div>
                    <div> Dan Berolsky</div>
                </div>
            </div>
            <div className='info-card__item'>
                <ion-icon name="mail-sharp"></ion-icon>
                <div className='info-card__item-container'>
                    <div>Email :</div>
                    <div>
                        <a className='contact-link' href="https://mail.google.com/mail/?view=cm&fs=1&to=berolskydan@gmail.com"></a>
                        <ion-icon className='link-icon' name="link-outline"></ion-icon>
                        <div>berolskydan@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
