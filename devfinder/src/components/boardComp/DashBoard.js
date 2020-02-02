import React from 'react'
import ItemBoard from './ItemBoard'


function DashBoard({basedata}){

    return(
        <div id="dashBoard">
            <div id="contDash">
        <ul>
           
            {basedata.map(basedata => (
                         <ItemBoard key={basedata} dev={basedata}/>
                    ))}
        </ul>
        </div>
        </div>
    );
}

export default DashBoard