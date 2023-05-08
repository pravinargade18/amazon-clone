import { useEffect, useRef, useState } from "react";
import { secondHeaderItems } from "../../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import SideBarContent from "./SideBarContent";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const HeaderBottom = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const ref = useRef();
  const [showSideBar, setShowSideBar] = useState(false);

  const showSideBarHandler = () => {
    setShowSideBar(true);
  };
  const hideSideBarHandler = () => {
    setShowSideBar(false);
  };

  const name = userInfo.username.split(" ")[0].charAt(0).toUpperCase() + userInfo.username.split(" ")[0].slice(1);
 
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setShowSideBar(false);
      }
    });
  }, [ref]);
  return (
    <div className="w-full px-4 h-[36px]  bg-amazon_light text-white flex items-center ">
      {
        <ul className="flex items-center gap-2 text-sm tracking-wide">
          <li
            onClick={showSideBarHandler}
            className="headerHover flex items-center gap-1"
          >
            <GiHamburgerMenu className="h-5 w-5" /> All
          </li>
          {secondHeaderItems.map((item) => {
            return (
              <li key={item.id} className="headerHover">
                {item.title}
              </li>
            );
          })}
        </ul>
      }
      {/* sidebar starts here */}
      {showSideBar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-[rgba(0,0,0,.8)] bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0 }}
              className=" w-[350px] h-full bg-white transition-all  duration-500"
            >
              <div className="w-full bg-amazon_light text-white py-[12.5px] px-6 flex items-center gap-2">
                {userInfo?.image ? (
                  <img
                    src={userInfo.image}
                    alt="userImage"
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <RiAccountCircleFill className="w-6 h-6" />
                )}
                <h3 className="font font-titleFont font-semibold text-lg tracking-[1px]">
                  Hello, {name ? name : "Sign in"}
                </h3>
              </div>
              <SideBarContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & books"
                three="Amazon Appstore"
              />
              <SideBarContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideBarContent
                title="Programs & Features"
                one="Gift Cards"
                three="International Shopping"
                two="Amazon live"
              />
              <SideBarContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact Us"
              />
              <span
                className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
                onClick={hideSideBarHandler}
              >
                <GrClose />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
