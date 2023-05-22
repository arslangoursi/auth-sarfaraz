import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";
import { isProcessingAtom, userAtom } from "../global/userAtom";
import { useEffect, useState } from "react";

import Google from "../assets/google.png";
import { app } from "../global/firebase";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);
  const [disabled, setDisabled] = useState(false);
  const [isProcessing, setIsProcessing] = useAtom(isProcessingAtom);

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const signInWithGoogle = async () => {
    setDisabled(true);
    setIsProcessing(true);
    await signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/dashboard", { replace: true });
        setDisabled(false);
        setIsProcessing(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setDisabled(false);
      });
  }, []);

  return (
    <>
      <div className="main__container">
        <div className="main__container__form">
          {isProcessing ? (
            <div className="main__container__form__processing">
              Authenticating...
            </div>
          ) : (
            <>
              <div className="main__container__form__heading">
                Lets get started
              </div>
              <div className="main__container__form__subheading">
                Login to your account below or signup for an amazing experience
              </div>
              <button
                onClick={signInWithGoogle}
                disabled={disabled}
                className="main__container__form__button"
              >
                <img
                  src={Google}
                  className="main__container__form__button__icon"
                />
                <div className="main__container__form__button__label">
                  Continue with google
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
