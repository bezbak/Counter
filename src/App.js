import { useState } from "react";
import Charmander from './img/Charmander.png'
import pica from './img/pica.png'
import Charizard from './img/Charizard.webp'
import dead from './img/dead.jpg'
import './style.css'
function App() {
  const [state, setState] = useState(1);
  return (
    <div className="app">
      
      <button onClick={()=>{
        
        if(state>100){
          setState('Max Level')
        }else{
          setState(state+1)
        }
      }}><img src={state === 0 ? dead: state < 100 && state>0 ? Charmander :state >=100 ? Charizard: state<0 ? pica : Charizard}  alt=""/>
      </button>
      <h1>{state}</h1>
      <div className={'box'}>
      <button onClick={()=>{
        if (state < 0){
        setState(-1)}
        else{
          setState(state-1)
        }
      }}>-</button>
      <button onClick={()=>{
        if(state *2 >100){
          setState('Max Level')
        }else if(state*2<-1){
          setState(-1)
        }else{
        setState(state*2)

        }
      }}>x2</button>
       <button onClick={()=>{
        setState(1)
      }}>reset</button>
      </div>
      
    </div>
  );
}

export default App;
