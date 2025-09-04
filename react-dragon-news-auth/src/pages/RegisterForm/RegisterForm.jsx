import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const RegisterForm = () => {
  const { registerUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    // different way to access form data
    const form = new FormData(e.currentTarget);

    const userName = form.get("name");
    const photoUrl = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");
    console.log(userName,photoUrl,email,password);

    registerUser(email, password)
      .then((userCredential) => console.log(userCredential.user))
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Register your account</h1>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input md:w-3xs focus:outline-0"
                    placeholder="name"
                  />
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    name="photoURL"
                    className="input md:w-3xs focus:outline-0"
                    placeholder="photo URL"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input md:w-3xs focus:outline-0"
                    placeholder="email"
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input md:w-3xs focus:outline-0"
                    placeholder="password"
                    required
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
              <p className="text-center font-poppins text-xs">
                Already have an account ?{" "}
                <Link to={"/loginForm"}>
                  <button className="text-green-300 font-semibold cursor-pointer">
                    Login
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

export default RegisterForm;
