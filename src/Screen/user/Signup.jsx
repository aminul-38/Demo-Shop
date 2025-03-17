import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebaseConfig/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Signup = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(
      auth,
      email,
      password,
      username,
      confirmPassword
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify({ email: user.email }));
        console.log(user);
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
    <div className="container mt-3 p-3">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card text-bg-secondary bg-opacity-50">
            <div className="card-header text-center">
              <h2>Sign Up</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="username">Username</label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label for="email">Email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label for="password">Password</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label for="confirmPassword">Confirm Password</label>
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                  />
                </div>
                <div className="d-grid gap-2 col-4 mx-auto mt-4">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
              <div className="d-grid col-6 mx-auto mt-3">
                <button
                  onClick={handleGoogleSignin}
                  className="btn btn-secondary"
                >
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
