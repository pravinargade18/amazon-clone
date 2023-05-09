import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingOverlay from "../UI/LoadingOverlay";

const Layout = () => {

  const {userDataLoading,userInfo} =useSelector(state=>state.auth);
  console.log(userInfo.username);
  return (
    <>
    <Header/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>

    
    { userDataLoading && <LoadingOverlay/> }



    </>
    
  )
}

export default Layout;