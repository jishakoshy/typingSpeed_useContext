// Login.tsx
import { useUser } from './UserContext';

const Login = () => {
  const { setUsername } = useUser();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

export default Login;
