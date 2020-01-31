import React from 'react'

function FormDev({ onSubmit }){

    function addDevs(e){
        e.preventDefault()
        onSubmit(console.log("okay"))
    }
    return (
        <div id="formComp">
            <form onSubmit={addDevs}>
            <br/>
                <label>Nome do Dev</label><br/>
                <br/><input type='text' name="nameDev"></input><br/>
                <br/><label>GitHub</label><br/>
                <br/><input type='text' name="gitDev"></input><br/>
                <br/><label>Tecnpologias</label><br/>
                <br/><input type='text' name="techs"></input><br/>
                <br/><input type='submit' name="Cadastrar"></input><br/>
            </form>
        </div>
    );
}

export default FormDev