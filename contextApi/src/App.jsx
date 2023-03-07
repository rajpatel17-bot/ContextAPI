// import { useContext } from 'react';
import './App.css'
import Comp1 from './components/Comp1'
// import { DataContext } from './context/DataProvider';
import useGlobalData from './hooks/useGlobalData';

function App() {
  // consumer
  const { counter, setCounter } = useGlobalData();

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
      <Comp1 />
    </div>
  );
}

export default App;
