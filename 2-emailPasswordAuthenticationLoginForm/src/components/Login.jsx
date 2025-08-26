import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");
  // this is a way to get the email without submitting the form
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // reset loginError and success
    setLoginError("");
    setSuccess("");

    // Sign in a user with an email address and password
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user.emailVerified) {
          setSuccess("user successfully login");
        } else {
          alert("Please verify your mail!");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  // password reset or forget password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    // validate the email
    if (!email) {
      console.log("Please provide an email");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log("Please provide a valid email");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => alert("please check your email"))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a onClick={handleForgetPassword} className="link link-hover">
                    Forgot password?
                  </a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              {loginError && (
                <p className="text-xl text-orange-600">{loginError}</p>
              )}
              {success && <p className="text-xl text-green-600">{success}</p>}
              <p className="mt-2">
                New to this website! Pleases{" "}
                <Link to="/register" className="btn btn-info">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
