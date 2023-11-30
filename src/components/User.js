const User = (props)=> {
    return (<h2>{props.name}:{props.age}</h2>)
}
export default User;
{/* <div className="App">
      {classes.map((clas, index)=> {
        return <Course key={index} name={clas.name} finished={clas.finished}/>
      })}
    </div> */}
    // const users = [
    //   {name: "mohammad", age: 18},
    //   {name: "ali", age: 16},
    //   {name: "reza", age: 22},
    //   {name: "ahmad", age: 25}
    // ];
    // const classes = [
    //   {name: "html", finished: true},
    //   {name: "javascript", finished: false},
    //   {name: "css", finished: true},
    //   {name: "bootstap", finished: false},
    //   {name: "react", finished: true},
    //   {name: "python", finished: false}
    // ]