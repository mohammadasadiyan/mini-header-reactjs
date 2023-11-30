import './App.css';
import { useState } from 'react';
// import Navbar from './components/navbar';
// import User from './components/User';
// import Course from './components/Course';
function App() {
  const [value, getValue] = useState(0)
  const [inputValue, getInputValue] = useState("")
  const [color, setColor] = useState("red");
  return (
    <div className='App'>
      <button onClick={()=> {getValue(value + 1)}}>increase</button>
      <button onClick={()=> {getValue(value - 1)}}>decrease</button>
      <button onClick={()=> {getValue(0)}}>set to 0</button>
      <h1>{value}</h1>
      <br></br>
      <input type='text' onChange={(event)=> {getInputValue(event.target.value)}}></input>
      <h3>{inputValue}</h3>
      <br></br>
      {/* change color */}
      <button onClick={()=> {setColor(color === "red" ? "green" : "red")}}>change color</button>
      <h2 style={{color: color}} >mohammad asadiyan</h2>
    </div>
  );
}
export default App;
