import { Link } from "react-router-dom";
import app from "../../firebaseConfig/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const cartItem = JSON.parse(localStorage.getItem("cartProduct")) || [];
  const userEmail = JSON.parse(localStorage.getItem("user"));
  console.log(userEmail);
  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("user");
        localStorage.removeItem("cartProduct");
        alert("Your are loged out!");
        window.location.href = "/";
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <>
      <div className="container Nav mt-3 p-2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon mx-3"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item mx-2">
                  <Link to="/" className=" fw-bolder btn" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    to="/product"
                    className="fw-bolder btn"
                    aria-current="page"
                  >
                    Product
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    to="/about us"
                    className="fw-bolder btn"
                    aria-current="page"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    to="/cart"
                    className="btn fw-bolder position-relative"
                    aria-current="page"
                  >
                    Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartItem.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </li>

                {userEmail ? (
                  <li className="nav-item mx-2">
                    <a
                      onClick={handleLogout}
                      className="fw-bolder btn"
                      aria-current="page"
                      href="#"
                    >
                      Logout
                    </a>
                  </li>
                ) : (
                  <li className="nav-item mx-2">
                    <Link
                      to="/login"
                      className="fw-bolder btn"
                      aria-current="page"
                    >
                      Login
                    </Link>
                  </li>
                )}
                <li className="nav-item mx-2">
                  <Link
                    to="/register"
                    className="fw-bolder btn"
                    aria-current="page"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
