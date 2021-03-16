import React from 'react'
import {useState,useEffect} from 'react'
import Times from './Times'



  function Timer() {
    const [state, setState] = useState({
        timeMs: 0,
        inter: false
})  
   useEffect(() => {
   const interval= setInterval(
        () => {state.inter && setState({...state,timeMs: state.timeMs + 1000  })},1000)
        return ()=>clearInterval(interval)
   }, )
               
   const start = () => {
        if (! state.inter){
                setState({...state,
                inter: true
            })
        } else {
setState({...state,inter:false})
        }   
        }
  const  reset = () => {
        setState({...state,timeMs: 0, inter: false})
    }   
 
        return (
            <div className='buttons'>
                <Times ms={state.timeMs} />
                <input type='button'
                    value={state.inter ? 'Pause' : 'Start'}
                    className='startButton'
                    onClick={start} />
                <input type='button'
                    value='Reset'
                    className='resetButton'
                    onClick={reset} />
            </div>)
    }


export default Timer