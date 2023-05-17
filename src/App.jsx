import { NavLink } from "react-router-dom";
import "./App.css";
import Google from "./assets/google.png";
function App() {
  return (
    <>
      <div className="main__container">
        <NavLink to="/Other" className="google__auth__btn">
          <div className="google__auth__btn__logo">
            <img src={Google}></img>
          </div>
          <div className="google__auth__btn__text">Continue with google</div>
        </NavLink>
      </div>
    </>
  );
}

export default App;
