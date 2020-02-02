import React,{useState} from 'react'


function FormDev({ onSubmit }){

    const[newId, setId]=useState('')
    const[newGit,setGit]=useState('')
    const[newtech,settech] = useState('')

    function setNewId({target}){
        setId(target.value)
    }
    function setNewGit({target}){
        setGit(target.value)
    }
    function setTech({target}){
        settech(target.value)
    }
    function addDevs(e){
        e.preventDefault()
        onSubmit(JSON.stringify({'name':[newId],'git':[newGit],'techs':[newtech]}))
    }
    return (
        <div id="formComp">
            <form onSubmit={addDevs}>
            <br/>
                <label>Nome do Dev</label><br/>
                <br/><input type='text' name="nameDev" onChange={setNewId}></input><br/>
                <br/><label>GitHub</label><br/>
                <br/><input type='text' name="gitDev" onChange={setNewGit}></input><br/>
                <br/><label>Tecnpologias</label><br/>
                <br/><input type='text' name="techs" onChange={setTech}></input><br/>
                <br/><input type='submit' name="Cadastrar"></input><br/>
            </form>
        </div>
    );
}

export default FormDev