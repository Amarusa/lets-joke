import { useState, useRef } from "react";
import useJokes from "../components/useJokes";

export default function Joke() {
  const firstNameRef= useRef(null);
  const lastNameRef =useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");

  const joke = useJokes(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value)
    setLastname(lastNameRef.current.value)
   
  };
  return (
    <div>
      <center>
        <h1>The Joke generator</h1>
        <h2>{joke}</h2>
        <form>
          <input
            placeholder="first name"
            ref={firstNameRef}
            
            
          />
          <input
            placeholder="last name"
            ref={lastNameRef}
          
          />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}
