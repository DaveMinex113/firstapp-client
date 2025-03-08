import { useEffect } from "react";

const GoogleLogin = () => {
  useEffect(() => {
    window.open("https://firstapp-backend-r28m.onrender.com/auth/google", "_self");
  }, []);

  return <button>Login with Google</button>;
};

export default GoogleLogin;
