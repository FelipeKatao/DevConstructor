import React from 'react'
import devfelipe  from './img/Felipe.jpg'

function BarsFlat(props){
    return(
    <li>
        <header>
            <img src={devfelipe} alt="dev"/>
            <div className='user-info'>
                <strong>{props.title}</strong>
                <span>Tecnologias: {props.techs} </span>
            </div>
        </header>
    </li> 
    );
}

export default BarsFlat