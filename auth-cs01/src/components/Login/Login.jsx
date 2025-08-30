import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signinUser, googleSignin,user } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setLoginError("");
    setLoginSuccess("");

    signinUser(email, password)
      .then((result) => {
        setLoginSuccess("user login successfully.");
        // it will reset form data when user login successfully
        e.target.reset();
      })
      .catch((error) => setLoginError("invalid email or password!"));
  };
  
  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        console.log(result.user);
        setLoginSuccess("user login successfully.");
      })
      .catch((error) => setLoginError(error.message));
  };
  // it will navigate to your login page.
  // when client reload the page, login form will appear for a second(it is a little problem)
  useEffect(() => {
      if(user) navigate(location.state);
  },[user])
  return (
    <div className="w-full rounded-lg border border-amber-50 p-2">
      <h1 className="text-center text-3xl font-bold">Login now!</h1>
      <form onSubmit={handleLogin} className="flex flex-col space-y-3">
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="Email"
          required
        />
        <label className="label">Password</label>
        <input
          type="text"
          name="password"
          className="input w-full"
          placeholder="Password"
          required
        />
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button className="btn btn-neutral mt-4">Login</button>
        {loginError && <small className="text-red-300">{loginError}</small>}
        {loginSuccess && (
          <small className="text-green-300">{loginSuccess}</small>
        )}
      </form>
      <div>
        <p>
          Signin with{" "}
          <button onClick={handleGoogleSignin} className="btn text-primary">
            Google
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
