import React from 'react';
import ReactGA from 'react-ga4';

const itemProyectEvent = (repoName)=>{
    ReactGA.event({
        category: 'itemProyectEvent'+repoName,
        action: 'itemProyectEvent'+repoName,
        label: repoName,
      }); 
}

function item(props) {
    return (
        <a onClick={()=>itemProyectEvent(props.name)} target="blank" href={props.html_url} className='proyects__item card'>
            <div>
                <div className='proyects__item-title-container'>
                    <ion-icon name="folder-open-outline"></ion-icon>
                    <h6 className='item__proyect-name'> {props.name}</h6>
                </div>
                <div className='item__proyect-info'><p>{props.description}</p></div>
            </div>

            <div className='item__proyect-branches'>
                <div>
                    <ion-icon name="star-outline"></ion-icon>
                    <span>{props.stargazers_count}</span>
                    <ion-icon name="git-branch-sharp"></ion-icon>
                    <span>{props.forks}</span>
                </div>
                <div>
                    <span className='repo-language-color' style={{background: props.languageColor}}>&nbsp;</span>
                    <span>{props.language}</span>
                </div>
            </div>

        </a>
    )
}

export default item