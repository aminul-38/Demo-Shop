import Header from "../component/Header/Header";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

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
