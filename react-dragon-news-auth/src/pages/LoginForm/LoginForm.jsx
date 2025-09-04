import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const LoginForm = () => {
  const { signinUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    // different way to access form data
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"));
    const email = form.get("email");
    const password = form.get("password");

    signinUser(email, password)
      .then((userCredential) => console.log(userCredential.user))
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <Navbar />
      <div className="hero mt-8">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input md:w-3xs focus:outline-0"
                    placeholder="Email"
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input md:w-3xs focus:outline-0"
                    placeholder="Password"
                    required
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <p className="text-center font-poppins text-xs">
                Don't have an account ?{" "}
                <Link to={"/registerForm"}>
                  <button className="text-red-400 font-semibold cursor-pointer">
                    Register
                  </button>
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
