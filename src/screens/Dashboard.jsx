import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const user = useLocation().state?.user;

  function decodeJwtResponse(jwtResponse) {
    const tokenParts = jwtResponse.split(".");
    const header = atob(tokenParts[0]);
    const payload = atob(tokenParts[1]);

    return {
      header: JSON.parse(header),
      payload: JSON.parse(payload),
    };
  }

  function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);

    const id = responsePayload.payload.sub;
    const fullName = responsePayload.payload.name;
    const givenName = responsePayload.payload.given_name;
    const familyName = responsePayload.payload.family_name;
    const imageUrl = responsePayload.payload.picture;
    const email = responsePayload.payload.email;

    return {
      id,
      fullName,
      givenName,
      familyName,
      imageUrl,
      email,
    };
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
      }}
    >
      <img
        src={handleCredentialResponse(user)?.imageUrl}
        alt={handleCredentialResponse(user)?.fullName}
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          marginBottom: "1em",
        }}
      />
      <div
        style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}
      >
        Welcome {handleCredentialResponse(user).fullName}
      </div>
      <Link
        to="/"
        onClick={() => {
          console.log(document.cookie);
          document.cookie.split(";").forEach((c) => {
            document.cookie = c
              .replace(/^ +/, "")
              .replace(
                /=.*/,
                "=;expires=" + new Date().toUTCString() + ";path=/"
              );
          });
        }}
        style={{
          marginTop: "1em",
          padding: ".5em 1em",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#242424",
          textDecoration: "none",
        }}
      >
        Logout
      </Link>
    </div>
  );
}
