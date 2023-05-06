import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { darkLogo } from "../assets/index";
import {IoMdArrowDropright} from 'react-icons/io'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase.config";
import {motion} from 'framer-motion'
import { RotatingLines } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../store/authSlice";

const Signin = () => {
  const dispatch=useDispatch();
     const navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmailError, setEnteredEmailError] = useState("");
  const [enteredPasswordError, setEnteredPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [userEmailError, setUserEmailError] = useState('');
  const [userPasswordError, setUserPasswordError] = useState('');
  // Firebase Error

  // Loading State start here

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
    setEnteredEmailError("");
    setUserEmailError("");
  };
  const passwordHandler = (e) => {
    setEnteredPassword(e.target.value);
    setEnteredPasswordError("");
    setUserPasswordError("");
  };
  const LoginHandler = async(e) => {
    e.preventDefault();
    if (!enteredEmail) {
      setEnteredEmailError("Enter your email");
    }
    if (!enteredPassword) {
      setEnteredPasswordError("Enter your password");
    }
    if (enteredEmail && enteredPassword) {
       try {
         setIsLoading(true);
           const auth=getAuth(app);
           const user= await signInWithEmailAndPassword(auth,enteredEmail,enteredPassword);
           dispatch(
             setUserInfo({
               id: user.user.uid,
               username: user.user.displayName,
               image: user.user.photoURL,
               email: user.user.email,
             })
           );
           setIsLoading(false);
           setSuccessMessage("Welcome back...Logged in successfully!");
           setTimeout(() => {
             navigate("/");
           }, 2000);
        //    console.log(user)
      } catch (error) {
        console.log(error.code);
            if (error.code.includes("auth/invalid-email")) {
              setUserEmailError("Invalid email!");
              setIsLoading(false);
            }
            if (error.code.includes("auth/wrong-password")) {
              setUserPasswordError("Wrong password, try again!");
              setIsLoading(false);
            }
       } 
    
    //   console.log(enteredEmail, enteredPassword);
   
      setEnteredEmail("");
      setEnteredPassword("");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <Link to="/">
            <img className="w-32" src={darkLogo} alt="darkLogo" />
          </Link>
          <div className="w-full border border-zinc-200 p-6 rounded-md">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Sign in
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">
                  Email or mobile phone number
                </p>
                <input
                  onChange={emailHandler}
                  value={enteredEmail}
                  className="w-full rounded-md lowercase py-1 border border-zinc-400 px-2 text-base  outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="enteredEmail"
                />
                {enteredEmailError && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {enteredEmailError}
                  </p>
                )}
                {userEmailError && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {userEmailError}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  onChange={passwordHandler}
                  value={enteredPassword}
                  className="w-full rounded-md lowercase py-1 border border-zinc-400 px-2 text-base  outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                />
                {enteredPasswordError && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {enteredPasswordError}
                  </p>
                )}
                {userPasswordError && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {userPasswordError}
                  </p>
                )}
              </div>
              <button
                onClick={LoginHandler}
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              >
                Continue
              </button>
              {isLoading && (
                <div className="flex justify-center">
                  <RotatingLines
                    strokeColor="#febd69"
                    strokeWidth="4"
                    animationDuration="0.75"
                    width="80"
                    visible={true}
                  />
                </div>
              )}
              {successMessage && (
                <div>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-base font-titleFont font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center"
                  >
                    {successMessage}
                  </motion.p>
                </div>
              )}
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By Continuing, you agree to Amazon&apos;s{" "}
              <span className="text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                Conditions of Use{" "}
              </span>
              and{" "}
              <span className="text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                Privace Notice.
              </span>
            </p>
            <p className="text-xs flex items-center  text-gray-600 mt-4 cursor-pointer group">
              <IoMdArrowDropright className=" w-6 " />{" "}
              <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                Need help?
              </span>
            </p>
          </div>
          <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            <span className="w-1/3 text-center">New to Amazon?</span>
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
          </p>
          <Link className="w-full" to="/sign-up">
            <button className="w-full rounded-md py-1.5 mt-4 text-sm font-normal  bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
              Create your Amazon account
            </button>
          </Link>
        </form>
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Conditions of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Help
          </p>
        </div>
        <p className="text-xs text-gray-600">
          © 1996-2023, ReactBd.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Signin;
