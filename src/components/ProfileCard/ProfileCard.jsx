import { useContext } from "react";
import UserContext from "../../context/UserContext";

const ProfileCard = () => {
  const { user, updateUserFirstName } = useContext(UserContext);

  return (
    <div>
      <label for="firstName">First name: </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={(e) => updateUserFirstName(e.target.value)}
      />
      <p>User first name: {user.firstName}</p>
      <p>User last name: {user.lastName}</p>
    </div>
  );
};

export default ProfileCard;
