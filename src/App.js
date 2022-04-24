import React, { useState } from 'react'
import Courses from './components/Courses';
import LoginForm from './components/LoginForm';

function App() {

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    //check here if entered details are correct or not
    setUser(
      {
        email: details.email
      }
    );
  }

  const Logout = () => {
    console.log("Logout")
    setUser({ email: "" });
  }
  return (
    <div className="App">
      {(user.email !== "") ? (

        // <div className="courses-container">
        //   <h1 className="courses-text">COURSES</h1>
        //   <button className="courses-button button">COA</button>
        // </div>
        <Courses />

      ) : (<LoginForm Login={Login} error={error} />)}
    </div>
  );
}
export default App;
