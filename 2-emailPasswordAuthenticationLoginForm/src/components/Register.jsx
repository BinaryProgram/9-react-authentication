import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;

    // reset error
    setRegisterError("");
    setSuccess("");
    // regular expression
    const regEx =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    // validation
    if (password.length < 8) {
      setRegisterError("Password should be at least 6 characters or longer!");
      return;
    } else if (!regEx.test(password)) {
      setRegisterError(`password must contain at least one
        capital letter(A-Z), small letter(a-z), digit(0-9)
        special character(*,@,$,& etc)`);
      return;
    } else if (!accepted) {
      setRegisterError("Your must accept our terms and conditions!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setSuccess("user successfully created");
        console.log(user);
        // update profile
        updateProfile(result.user,{
          displayName:name,
          photoURL:'https://example.com/jane-q-user/profile.jpg'
        })
        .then(() => console.log('profile updated')).
        catch();
        
        // send  verification mail
        sendEmailVerification(result.user).then(() =>
          alert("please check your mailbox & verify your account"),
        );
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
    console.log(email, password);
  };
  return (
    <div className="w-full p-2 md:w-1/2">
      <h2 className="text-3xl">Please Register</h2>
      <form onSubmit={handleRegister} className="mt-4 flex flex-col gap-5">
        <input
          type="text"
          name="name"
          className="bg-accent w-full rounded-sm p-3 text-xl font-medium text-[#131313cc]"
          placeholder="your name"
          required
        />
        <input
          type="email"
          name="email"
          className="bg-accent w-full rounded-sm p-3 text-xl font-medium text-[#131313cc]"
          placeholder="please enter your mail"
          required
        />
        <div className="relative">
          <input
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            placeholder="password"
            className="bg-accent w-full rounded-sm p-3 text-xl font-medium text-[#131313cc]"
            required
          />
          <span
            className="absolute top-4 right-5 cursor-pointer text-[#131313]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaRegEyeSlash size="20px" />
            ) : (
              <FaRegEye size="20px" />
            )}
          </span>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">
            <a href="#">Accept our terms and conditions!</a>
          </label>
        </div>
        <button className="btn btn-secondary mt-4 rounded-sm p-10 text-3xl">
          Login
        </button>
        {registerError && (
          <p className="text-xl text-orange-600">{registerError}</p>
        )}
        {success && <p className="text-xl text-green-600">{success}</p>}
        <p>
          Already have an account! please{" "}
          <Link to="/login" className="btn btn-info">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
