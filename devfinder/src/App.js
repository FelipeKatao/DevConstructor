import React,{useState} from 'react';
import './Css/bodyStyle.css'
import FormDev from './components/forms/FormDev'
import DashBoard from './components/boardComp/DashBoard'

function App() {
  let [devs,addDevs]=useState([])

  function addDevsHandrler(){
    let copy=Array.from(devs);
    copy.push("felipe catao")
    addDevs(copy)
  }
  return (
    <>
    <h1>DevConstructor Webkit</h1>
    <FormDev onSubmit={addDevsHandrler}></FormDev>
    <DashBoard basedata={devs}/>
    </>
  );
}

export default App
