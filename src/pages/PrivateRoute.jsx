import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
   const {username}=useSelector(state=>state.auth.userInfo);
  return (
    <>
        {
            username ? <Outlet/> :<Navigate to='/sign-in'/>
        }
    </>
   
  )
}

export default PrivateRoute;