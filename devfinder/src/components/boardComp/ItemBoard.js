import React from 'react'

function ItemBoard({dev}){
    let obj=JSON.parse(dev)
    //console.log(typeof obj)

    return(
        <li>
            <div>{obj.name}</div>  
            <div>{obj.git}</div>
            <div>{obj.techs}</div>
        </li>
    );
}

export default ItemBoard