import { logo } from "../../assets";
import { GoLocation } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { GrSearch } from "react-icons/gr";
import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import HeaderBottom from "./HeaderBottom";
import { allItems } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogOut } from "../../store/authSlice";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase.config";

const Header = () => {
  const dispatch=useDispatch();
  const [showDrowpdown, setShowDrowpdown] = useState(false);
  const userInfo=useSelector(state=>state.auth.userInfo);
  const {totalQuantity}=useSelector(state=>state.amazon);
  
  const dropdownHandler = () => {
    setShowDrowpdown((prevState) => !prevState);
  };

  const logOutHandler=async ()=>{
    try {
      const auth=getAuth(app);
      await signOut(auth);
    } catch (error) {
      console.log('err in logout');
    }
    dispatch(userLogOut());
  }
  const name =
    userInfo.username.split(" ")[0].charAt(0).toUpperCase() +
    userInfo.username.slice(1);
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-2 flex items-center gap-4">
        <Link to="/">
          <div className="headerHover ">
            <img className="w-24 mt-2" src={logo} alt="logo" />
          </div>
        </Link>
        {/* image end here */}
        {/* deliver start here  */}

        <div className="headerHover">
          <GoLocation />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Pune
            </span>
          </p>
        </div>
        {/* deliver end here */}

        {/* dropdown starts */}
        <div className="h-10 rounded-md flex flex-grow relative ">
          {/*  */}
          <span
            className="w-14 flex items-center justify-center h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 rounded-tl-md rounded-bl-md text-sm text-[rgb(44,42,42)]  "
            onClick={dropdownHandler}
          >
            All
            <span>
              <IoMdArrowDropdown />
            </span>
          </span>
          {showDrowpdown && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                {allItems.map((item) => {
                  return (
                    <li
                      key={item.id}
                      title={item.title}
                      className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* dropdown end */}

          {/* input start */}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 border border-slate-50 h-full flex items-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md justify-center ">
            <GrSearch />
          </span>
        </div>
        {/* input end */}

        {/* signin start */}
        <div className="flex flex-col items-start justify-center headerHover">
          {userInfo.username ? (
            <p className=" text-sm text-gray-100 font-medium">
              welcome, {name}
            </p>
          ) : (
            <p className=" text-xs text-lightText font-light">Hello, sign in</p>
          )}
          <p className="flex text-sm font-semibold -mt-1 text-whiteText items-center justify-center">
            Accounts & Lists{" "}
            <span>
              <IoMdArrowDropdown />
            </span>
          </p>
        </div>
        {/* signin end here */}

        {/* orders start here */}
        <div className="flex flex-col items-center justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="flex text-sm font-semibold -mt-1 text-whiteText">
            & Orders
          </p>
        </div>

        {/* orders end */}
        {/* cart start  */}
        <Link to="/cart">
          <div className="flex  items-center justify-center headerHover relative">
            <IoMdCart className="h-7 w-7" />
            <p className="text-xs font-semibold mt-3 text-whiteText">
              Cart{" "}
              <span className="absolute text-xs -top-1 left-6 p-1 h-4 bg-[#f3a847] flex justify-center items-center text-amazon_blue rounded-full ">
                {totalQuantity}
              </span>
            </p>
          </div>
        </Link>
        {userInfo && (
          <div className="flex flex-col justify-center items-center headerHover relative" onClick={logOutHandler}>
            <MdOutlineLogout  />
            <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
              Log out
            </p>
          </div>
        )}
      </div>

      <HeaderBottom />
    </div>
  );
};

export default Header;
