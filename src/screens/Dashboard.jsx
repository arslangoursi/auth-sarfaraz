import { useAtom } from "jotai";
import { userAtom } from "../global/userAtom";

export default function Dashboard() {
  const [user] = useAtom(userAtom);
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
      <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Welcome {user?.displayName}
      </div>
    </div>
  );
}
