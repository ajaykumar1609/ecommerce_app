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

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/checkout" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
