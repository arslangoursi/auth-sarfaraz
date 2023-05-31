import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const responseMessage = (response) => {
    navigate("/dashboard", {
      replace: true,
      state: { user: response },
    });
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
      <div className="main__container">
        <div className="main__container__form">
          <div className="main__container__form__heading">Lets get started</div>
          <div className="main__container__form__subheading">
            Login to your account below or signup for an amazing experience
          </div>
          <GoogleLogin
            onSuccess={responseMessage}
            onError={errorMessage}
            shape="pill"
            auto_select={false}
            redirect_uri="/dashboard"
            ux_mode="popup"
          />
        </div>
      </div>
    </>
  );
}
