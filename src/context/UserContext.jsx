import { createContext, useState } from "react";

//create the context
const UserContext = createContext();

//create the provider

//using "composition" to pass JSX Elements as props
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "default first name",
    lastName: "default last name",
  });

  // can add additional functions here and add them to the value object in the return statement, e.g.
  const updateUserFirstName = (firstName) => {
    setUser((prevState) => {
      return { ...prevState, firstName };
    });

    //this is better than
    // setUser({ ...user }, (user.firstName = firstName));
    // because otherwise you can't guarantee that the state is up to date
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUserFirstName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
