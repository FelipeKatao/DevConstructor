import React from 'react'
import ItemBoard from './ItemBoard'


function DashBoard({basedata}){

    return(
        <ul id="dashBoard">
           
            {basedata.map(basedata => (
                         <ItemBoard key={basedata} dev={basedata}/>
                    ))}
        </ul>
    );
}

export default DashBoard