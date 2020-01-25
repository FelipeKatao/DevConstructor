import React,{useState} from 'react';
import MenuObj from './MenuObj'
import BarsFlat from './BarsFlat'
import './Css/bodyStyle.css'

function App() {
  const[counter,setcounter] = useState(0);
  function increment(){
    setcounter(counter+1)
  }
  return (
    <>
    <MenuObj></MenuObj>
    <main>
    <h1>Hello world react!!</h1>
    <h2>{counter}</h2>
    <nav id="mainNav">
    <BarsFlat title="Felipe Katao" techs="Python,JavaScript,React"></BarsFlat>
    <BarsFlat title="Filipe Dechamps" techs="JavaScript,React,React Native"></BarsFlat>
    <BarsFlat title="Paulo Torrens" techs="C,Haskell"></BarsFlat>
    </nav>
    <button onClick={increment}>Add value</button>
    </main>
    </>
  );
}

export default App;
