import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebaseConfig/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import "./Login.css";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify({ email: user.email }));
        console.log(user.email);
        window.location.href = "/";
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    e.preventDefault();
  };
  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        localStorage.setItem("user", JSON.stringify({ email: user.email }));
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="body">
      <div className="contain my-5">
        <h2 className="log">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="username">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" />
          </div>
        </form>
        <div className="d-grid col-8 mx-auto mt-3">
          <button onClick={handleGoogleSignin} className="btn btn-secondary">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
