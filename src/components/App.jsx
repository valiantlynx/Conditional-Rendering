import React from "react";
import Login from "./Login";

var isLoggedIn = true;

var currentTime = new Date(10010, 11, 1, 13).getHours();

function App() {
  return (
    <div className="container">
      {
        /* {isLoggedIn ? <h1>Hello</h1> : <Login />} */
        currentTime > 12 && <h1>Why are u still working?</h1> //the and wont bother to run the rest of the code if the first part is false.
      }
    </div>
  );
}

export default App;
