import './App.css';
// import Navbar from './components/navbar';
import User from './components/User';
function App() {
  const users = [
    {name: "mohammad", age: 18},
    {name: "ali", age: 16},
    {name: "reza", age: 22},
    {name: "ahmad", age: 25}
  ]
  return (
    <div className="App">
      {users.map((user, index)=> {
        return <User key={index} name={user.name} age={user.age}/>
      })}
    </div>
  );
}
export default App;
