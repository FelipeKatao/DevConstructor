import React from 'react'

function FormDev(){
    return (
        <div id="formComp">
            <form>
            <br/>
                <label>Nome do Dev</label><br/>
                <br/><input type='text' name="nameDev"></input><br/>
                <br/><label>GitHub</label><br/>
                <br/><input type='text' name="gitDev"></input><br/>
                <br/><label>Tecnpologias</label><br/>
                <br/><input type='text' name="techs"></input><br/>
            </form>
        </div>
    );
}

export default FormDev