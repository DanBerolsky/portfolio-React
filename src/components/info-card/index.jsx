import React from 'react'
import './index.css'
import ReactGA from 'react-ga4';

const contactGithubEvent = ()=>{
    ReactGA.event({
        category: 'contactLinkGithub',
        action: 'contactLinkGithub',
      }); 
}

const contactLinkedinEvent = ()=>{
    ReactGA.event({
        category: 'contactLinkLinkedin',
        action: 'contactLinkLinkedin',
      }); 
}

const contactGmailEvent = ()=>{
    ReactGA.event({
        category: 'contactLinkGmail',
        action: 'contactLink_Gmail',
      }); 
}

const Info = () => {
    function goToGmail(){
        let url = "https://mail.google.com/mail/?view=cm&fs=1&to=berolskydan@gmail.com"
        if ("ontouchstart" in document.documentElement) {
            url = "mailto:berolskydan@gmail.com"
        }
        return url
    }

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
                    <div onClick={contactGithubEvent}>
                        <a target="blank" className='contact-link' aria-label="Github" href="https://github.com/DanBerolsky"><span>&nbsp;</span></a>
                        <ion-icon className='link-icon' name="link-outline"></ion-icon>
                        <div>DanBerolsky</div>
                    </div>
                </div>
            </div>
            <div className='info-card__item'>
                <ion-icon name="logo-linkedin"></ion-icon>
                <div className='info-card__item-container'>
                    <div>LinkedIn :</div>
                    <div onClick={contactLinkedinEvent}>
                        <a target="blank" className='contact-link' aria-label="Linkedin" href="https://www.linkedin.com/in/dan-berolsky/"><span>&nbsp;</span></a>
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
                    <div onClick={contactGmailEvent}>
                        <a target="blank" className='contact-link' aria-label="Gmail" href={goToGmail()}><span>&nbsp;</span></a>
                        <ion-icon className='link-icon' name="link-outline"></ion-icon>
                        <div>berolskydan@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
