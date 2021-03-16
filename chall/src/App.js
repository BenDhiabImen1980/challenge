
import './App.css';
import {useState,useEffect} from 'react'
import Timer from './time/Timer';
import Mastercard from './Mastercard';

function App() {
  const [color, setColor] = useState("#282c54")
  const [count, setCount] = useState(0)
  

  const Handleclickcolor=()=>{
    setColor('#'+Math.random().toString(16).substr(2,6))
  }

  const Handleclickplus=()=>{
    setCount(count+1)
  }
  const Handleclickmoins=()=>{
    setCount(count-1)
  }
  const Handleclickreset=()=>{
    setCount(0)
  }
  useEffect(() => {

    document.body.style.backgroundColor=color

  }, [color])

  return (
    <div className="App-header">
     
      
        <p>{count}</p>
        <div className="container">
        <button onClick ={()=>Handleclickplus()} >Like 👍</button>
        <button onClick ={()=>Handleclickmoins()}>Dislike 😒  </button>
        <button onClick ={()=>Handleclickreset()}>reset 👌</button>
        <button onClick={()=>Handleclickcolor()}>change background color</button>
       </div>
       <Timer/>
       <Mastercard />
    </div>
  );
}

export default App;
