import Google from "../assets/google.png";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../global/userAtom";

export default function Login() {
  const [user, setUser] = useAtom(userAtom);
  return (
    <>
      <div className="main__container">
        <div className="main__container__form">
          <div className="main__container__form__heading">Lets get started</div>
          <div className="main__container__form__subheading">
            Login to your account below or signup for an amazing experience
          </div>
          <Link
            to="/dashboard"
            onClick={() => setUser({ name: "John Doe", email: "" })}
            className="main__container__form__button"
          >
            <img src={Google} className="main__container__form__button__icon" />
            <div className="main__container__form__button__label">
              Continue with google
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
