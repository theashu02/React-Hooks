import { useState } from "react";

// use state hooks

const App = () => {
  const [name, setName] = useState(true);
  const changeName = () => {
    setName(!name);
  };

  //   const [name, setName] = useState("omen");
  //   const changeName = ()=> {
  //     setName("atom")
  //   }
  //   pass {name} in paragraph tag to chane name one time

  return (
    <div className="App">
      <p>{name ? "Omen Atom" : "SimpL Shot"} is my BGMI name</p>
      {/* to change the name on click create a button */}
      <button onClick={changeName}>click me</button>
    </div>
  );
};

export default App;
