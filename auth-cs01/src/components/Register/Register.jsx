import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, email, password, confirmPassword);
    if (password.length < 6) {
      setError("password must be six character or longer!");
      return;
    }
    if (password !== confirmPassword) {
      setError("password didn't match!");
      return;
    }
    // empty the error
    setError("");
    // createUser is a promise
    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error.message));
  };
  return (
    <div className="w-full rounded-lg border border-amber-50 p-2">
      <h1 className="text-center text-3xl font-bold">Register now!</h1>
      <form onSubmit={handleRegister} className="flex flex-col space-y-3">
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="name"
        />
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
        <label className="label">Confirm Password</label>
        <input
          type="text"
          name="confirmPassword"
          className="input w-full"
          placeholder="Confirm Password"
          required
        />
        {error && <small className="text-red-300">{error}</small>}
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button className="btn btn-neutral mt-4">Register</button>
      </form>
    </div>
  );
};

export default Register;
