import { useState } from "react";
import app from "../firebase/firebase.init";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => console.log(error.message));
  };
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        {user ? (
          <button
            onClick={handleGoogleSignOut}
            className="btn bg-[#1e90ff] p-10 text-2xl hover:border-amber-200"
          >
            Google SignOut
          </button>
        ) : (
          <div className="flex gap-2"> 

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-[#1e90ff] p-10 text-2xl hover:border-amber-200"
          >
            Google SignIn
          </button>
          <button
            onClick={handleGithubSignIn}
            className="btn bg-[#ff6347] p-10 text-2xl hover:border-green-300 "
          >
            Github SignIn
          </button>

          </div>
        )}
      </div>

      {user && (
        <div className="mt-12">
          <h1>User : {user.displayName}</h1>
          <h2>Email : {user.email}</h2>
          <img src={user.photoURL} alt="user photo" className=" w-40" />
        </div>
      )}
    </div>
  );
};

export default Login;
