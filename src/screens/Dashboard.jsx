import { Link, useLocation } from "react-router-dom";

export default function Dashboard() {
  const user = useLocation().state?.user;
  console.log(user);
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
      {/* <img
        src={user?.photoURL}
        alt={user?.displayName}
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
        Welcome {user?.displayName}
      </div>
      <Link
        to="/"
        onClick={() => {
          setUser(null);
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
      </Link> */}
    </div>
  );
}
