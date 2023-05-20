import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import Google from "../assets/google.png";
import { app } from "../global/firebase";
import { useAtom } from "jotai";
import { userAtom } from "../global/userAtom";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default function Login() {
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);
  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <>
      <div className="main__container">
        <div className="main__container__form">
          <div className="main__container__form__heading">Lets get started</div>
          <div className="main__container__form__subheading">
            Login to your account below or signup for an amazing experience
          </div>
          <button
            onClick={signInWithGoogle}
            className="main__container__form__button"
          >
            <img src={Google} className="main__container__form__button__icon" />
            <div className="main__container__form__button__label">
              Continue with google
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
