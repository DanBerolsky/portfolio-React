import React, { useEffect, useState } from 'react';
import './index.css';
import ProyectItem from './item.jsx'
import axios from 'axios';
//import { render } from 'react-dom';


const Proyects = () => {

    const [repositories, setRepositories] = useState([]);
    const [repositorieColors, setRepositorieColors] = useState([]);
    
    const getRepositories = () => {
        const url = "https://api.github.com/users/DanBerolsky/repos";
        
        axios.get(url)
        .then(repo => { //color = res.data[repo.language].color
            let data = repo.data;
            if (data.length > 0){
                setRepositories(data);
                getRepositorieColor();
            } 
        })
        .catch(err => err.message);
    };
    
    const getRepositorieColor = ()=>{
        let colorsUrl = "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
    
        axios.get(colorsUrl)
            .then(colorsRes => {
                setRepositorieColors(colorsRes)
            }).catch(err => console.log(err.message))
        
    }

    useEffect(() => {
        getRepositories();
    }, []);
    
    //useEffect(() => {if(repositorieColors!==[]) setColor(repositories)},[repositorieColors])
    
    function setColor(data){
        let salida = data.map((repo) => {
            let color = repositorieColors.data[repo.language].color;
            let item = { name: repo.name,
                        stargazers_count: repo.stargazers_count,
                        language: repo.language,
                        forks: repo.forks,
                        description: repo.description,
                        html_url: repo.html_url, languageColor: color }
            return (item)
        });
        
        setRepositories(salida)
    }
    
    useEffect(() => {
        if (typeof repositorieColors.data === 'object') {
            //console.log(repositorieColors.data)
            setColor(repositories)
        }
    }, [repositorieColors]);
    
    useEffect(() => {}, [repositories]);
    return (
        <div className="proyects-card card">
            <div className='head-container'>
                <h5>My GitHub proyects</h5>
                <a href="https://github.com/DanBerolsky?tab=repositories">See All</a>
            </div>
            <div className='proyects'>
                {repositories.length === 0 && <p>x</p>}
                {     
                    repositories.map((item, i) => {
                        item.key = i
                        return (<ProyectItem {...item}></ProyectItem>)
                    })    
                    
                }
            </div>

        </div>
    );
}

export default Proyects;
