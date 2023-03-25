import React,{useState} from 'react'
import './index.css'
import ReactGA from 'react-ga4';

const Avatar = () => {

  const [darkState, setDarkState] = useState(false);
  const [iconligthState, SeticonligthState] = useState("dark_mode");
  
  const toggleTheme = () => {
    ReactGA.event({
      category: 'Dark_Mode',
      action: 'toggle_Theme',
      label: iconligthState,
    });  

      let cardColor     = '#fff';
      let bodyColor     = '#e5e7eb';
      let textPrimary   = '#000';
      let textSecondary = '#777';
      if(!darkState){
        cardColor     = '#444';
        bodyColor     = '#222';
        textPrimary   = '#fff';
        textSecondary = '#ccc';
        SeticonligthState("light_mode");
      }else{
        SeticonligthState("dark_mode");
      }
      document.documentElement.style.setProperty('--card-color', cardColor);
      document.documentElement.style.setProperty('--body-color', bodyColor);
      document.documentElement.style.setProperty('--body-color', bodyColor);
      document.documentElement.style.setProperty('--text-primary-color', textPrimary);
      document.documentElement.style.setProperty('--text-secondary-color', textSecondary);
      setDarkState(!darkState)

  };
  
  const downloadResume = ()=>{
    //console.log("downloadResume");
    ReactGA.event({
      category: 'downloadResume',
      action: 'BtnDownloadResume',
    }); 
  }   

  return (
      <div className="avatar-card card">
          <div className='avatar-card__background-image'>
              <img src="./back.png" alt="background_image" />
              <span onClick={toggleTheme} name="contrast" className="material-symbols-outlined">{iconligthState}</span>
          </div>
          <img className='avatar-card__img' src="./img.avif" alt="Dan" />
          <h5 className='avatar-card__name'>Dan Berolsky</h5>
          <div className='avatar-card__info'>
          <span role="img" aria-labelledby="cohete">🚀</span> Software Engineer | Open Source Enthusiast | Vue.js | Python | Kotlin | AWS | React | Node.js <span role="img" aria-labelledby="cohete">🚀</span>
          </div>
          <a href="./Currículum-Dan-Berolsky.pdf" onClick={downloadResume} className='btn-blue btn-resume' download="Currículum-Dan-Berolsky.pdf">
            <span className="material-symbols-rounded">download</span> <span>Download Resume</span>
          </a>
      </div>
  );
}

export default Avatar;
