import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log('The User ---', authUser)
      if (authUser){
        dispatch({
          type: "SET_USER",
          user: auth
        })
      }
      else{
        //logged out
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<div>
            <Header/>
            <Home/>
          </div>} />
          <Route exact path="/checkout" element={<div>
            <Header/>
            <Checkout/>
          </div>} />
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
