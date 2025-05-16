// Profile.tsx
import { useUser } from './UserContext';

const Profile = () => {
  const { username } = useUser();

  return <h2>Welcome, {username}!</h2>;
};

export default Profile;
