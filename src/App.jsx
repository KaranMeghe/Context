import { useContext, useState } from "react";
import UserContext from "./Context/User";

function App() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [greet, setGreet] = useState("");

  const { setUserLogin, users } = useContext(UserContext);

  console.log(users);

  const greetMessage = () => {
    userName
      ? setGreet(`Welcome to HELL , ${userName}`)
      : setGreet("Please Enter Field");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserLogin(userName, userPassword);
    setUserName("");
    setUserPassword("");
    greetMessage();
  };

  return (
    <form
      style={{ width: "100vw", margin: "0 auto", textAlign: "center" }}
      onSubmit={handleSubmit}
    >
      <p>Login</p>
      <label htmlFor="userName">Username</label>
      <input
        id="userName"
        type="text"
        value={userName}
        style={{ padding: "5px 20px", margin: "10px" }}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={userPassword}
        style={{ padding: "5px 20px", margin: "10px" }}
        onChange={(e) => setUserPassword(e.target.value)}
        placeholder="Password"
      />

      <button style={{ backgroundColor: "#fff", color: "#000" }}>Submit</button>

      <p>{greet}</p>
    </form>
  );
}

export default App;
