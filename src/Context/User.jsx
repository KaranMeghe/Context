import { createContext, useState } from "react";

const UserContext = createContext();

function Provider({ children }) {
  const [users, setUsers] = useState([]);

  function setUserLogin(user, password) {
    const userData = { userName: user, userPassword: password };
    if (user && password) {
      setUsers([...users, userData]);
    }
    return users;
  }

  const valuToShare = {
    setUserLogin,
    users,
  };

  return (
    <UserContext.Provider value={valuToShare}>{children}</UserContext.Provider>
  );
}

export default UserContext;
export { Provider };
