import { useAuthContext } from "../contexts/authContext";

function UserDetails() {
  const { user } = useAuthContext();

  return (
    <input
      type="text"
      name="usename"
      id="username"
      defaultValue={user.username}
    />
  );
}

export default UserDetails;
