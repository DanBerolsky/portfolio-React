import React,{useState,useEffect} from 'react'
import './index.css'

const Avatar = () => {

  const [darkState, setDarkState] = useState(false);
  
  const toggleTheme = () => {
      let cardColor     = '#fff';
      let bodyColor     = '#e5e7eb';
      let textPrimary   = '#000';
      let textSecondary = '#777';
      if(!darkState){
        cardColor     = '#444';
        bodyColor     = '#222';
        textPrimary   = '#fff';
        textSecondary = '#ccc';
      }
      document.documentElement.style.setProperty('--card-color', cardColor);
      document.documentElement.style.setProperty('--body-color', bodyColor);
      document.documentElement.style.setProperty('--body-color', bodyColor);
      document.documentElement.style.setProperty('--text-primary-color', textPrimary);
      document.documentElement.style.setProperty('--text-secondary-color', textSecondary);
      setDarkState(!darkState)

  };
  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--card-color');
    console.log(`--card-color: ${color}`);
  }, [])

  return (
      <div className="avatar-card card">
          <div className='avatar-card__background-image'>
              <img src="./back.png" alt="background_image" />
              <ion-icon onClick={toggleTheme} name="contrast"></ion-icon>
          </div>
          <img className='avatar-card__img' src="./img.jpeg" alt="Dan" />
          <h5 className='avatar-card__name'>Dan Berolsky</h5>
          <div className='avatar-card__info'>
          <span role="img" aria-labelledby="cohete">🚀</span> Software Engineer | Open Source Enthusiast | Vue.js | Python | Kotlin | AWS | React | Node.js <span role="img" aria-labelledby="cohete">🚀</span>
          </div>
          <a href="./Currículum-Dan-Berolsky.pdf" className='btn-blue btn-resume' download="Currículum-Dan-Berolsky.pdf">
            <ion-icon name="download-outline"></ion-icon> <span>Download Resume</span>
          </a>
      </div>
  );
}

export default Avatar;
