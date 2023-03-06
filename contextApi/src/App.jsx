import { useState } from 'react'
import './App.css'
import Comp1 from './components/Comp1'

function App() {
  const [counter, setCounter] = useState(0);

  const incr = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  }

  const desc = (e) => {
    e.preventDefault();
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <h1> Parent Component: {counter} </h1>
      <button onClick={desc}>Decrement</button>
      <button onClick={incr} >Increment</button>
      <Comp1 counter={counter} />
    </div>
  );
}

export default App
