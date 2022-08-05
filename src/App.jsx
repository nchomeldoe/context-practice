import { UserProvider } from "./context/UserContext";
import Profile from "./containers/Profile/Profile";
import "./App.css";

const App = () => {
  const user = {
    firstName: "Nat",
    lastName: "Robbins",
  };

  return (
    <UserProvider>
      <div className="app">
        <h1>Hello</h1>
        <Profile />
      </div>
    </UserProvider>
  );
};

export default App;
