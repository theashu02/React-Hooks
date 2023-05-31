import { useState } from "react";

const App1 = () => {
  const [name, setName] = useState();
  const changeName = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <p>{name}</p>
        <button onClick={changeName}>click me</button>
      </form>
    </div>
  );
};

export default App1;
