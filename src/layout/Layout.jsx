import Header from "../component/Header/Header";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
