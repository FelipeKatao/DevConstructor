import React from 'react'
import './item.css'
function ItemBoard({dev}){
    let obj=JSON.parse(dev)
    //console.log(typeof obj)

    return(
        <li className='itemboard'>
            <div className='titleCard'>{obj.name}</div>  
            <div className='gitCard'>GitHub:{obj.git}</div>
            <div className='techsCard'>Techs:{obj.techs}</div>
        </li>
    );
}

export default ItemBoard