import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
        console.log('logged_in')
      })
      .catch((error) => alert(error.message));
  };

  const signOut = e =>{
    e.preventDefault();

    auth
      .signOut()
      .then((auth)=>{
        history('/login');
        console.log('logged_out')
      })
      .catch((error)=> alert(error.message))
  }
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to='/'>
        {/* <img className="login_logo" src="amazon.png" alt="amazon_logo" /> */}
        <span className="login_logo">Shoppe</span>
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="text"
            value={password}
            onChange={(p) => setPassword(p.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login_signIn_button"
          >
            Sign in
          </button>
        </form>
        <div className="login_privacyPolicy">
          <input type="checkbox" />
          <small>By clicking this you agree to our privacy and policy</small>
        </div>
        <button onClick={register}>Create Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
