import React from 'react'
import './index.css'

const Avatar = () => {
    return (
        <div className="avatar-card card">
            <div className='avatar-card__background-image'>
                <img src="./back.png" alt="background_image" />
            </div>
            <img className='avatar-card__img' src="./img.jpeg" alt="Dan" />
            <h5 className='avatar-card__name'>Dan Berolsky</h5>
            <div className='avatar-card__info'>
            ⚡ Software Engineer | Open Source Enthusiast | PHP | Laravel | JavaScript | React | Node.js ⚡
            </div>
            <button className='btn-blue'><i className="fa-thin fa-file-export"></i> Download Resume</button>
        </div>
    );
}

export default Avatar;
