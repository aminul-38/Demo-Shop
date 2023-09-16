import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Screen/shop/Home";
import Product from "./Screen/shop/Product";
import About from "./Screen/shop/About";
import Signup from "./Screen/user/Signup";
import Login from "./Screen/user/Login";
import Cart from "./Screen/user/Cart";
import ErrorRouter from "./Screen/errorRouter/errorRouter";
import PrivateRoute from "./Screen/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/product"
        element={
          <Layout>
            <Product />
          </Layout>
        }
      />
      <Route
        path="/about us"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Layout>
              <Cart />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route path="*" element={<ErrorRouter />} />
    </Routes>
  );
}

export default App;
