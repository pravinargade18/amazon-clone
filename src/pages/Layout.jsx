import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <Header/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>

    </>
    
  )
}

export default Layout;