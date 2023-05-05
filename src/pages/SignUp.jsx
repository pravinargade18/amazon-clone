
import { useState } from "react";
import { Link } from "react-router-dom";
import { darkLogo } from "../assets/index";


const Registration = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error Message start
  const [enteredNameError, setEnteredNameError] = useState("");
  const [enteredMailError, setEnteredMailError] = useState("");
  const [enteredPasswordError, setEnteredPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  // Loading State start

  // Handle funtion start
  const nameHandler = (e) => {
    setEnteredName(e.target.value);
    setEnteredNameError("");
  };
  const emailHandler = (e) => {
    setEnteredMail(e.target.value);
    setEnteredMailError("");
  };
  const passwordHandler = (e) => {
    setEnteredPassword(e.target.value);
    setEnteredPasswordError("");
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  // enteredMail validation start
  const validateEmailHandler = (enteredMail) => {
    return String(enteredMail)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Submit button start
  const registrationHandler = (e) => {
    e.preventDefault();
    if (!enteredName) {
      setEnteredNameError("Enter your name");
    }
    if (!enteredMail) {
      setEnteredMailError("Enter your email");
    } else {
      if (!validateEmailHandler(enteredMail)) {
        setEnteredMailError("Enter a valid email");
      }
    }
    if (!enteredPassword) {
      setEnteredPasswordError("Enter your password");
    } else {
      if (enteredPassword.length < 6) {
        setEnteredPasswordError("Password must be at least 6 characters");
      }
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm your password");
    } else {
      if (confirmPassword !== enteredPassword) {
        setConfirmPasswordError("Password not matched");
      }
    }

    if (
      enteredName &&
      enteredMail &&
      validateEmailHandler(enteredMail) &&
      enteredPassword &&
      enteredPassword.length >= 6 &&
      confirmPassword &&
      confirmPassword === enteredPassword
    ) {
      // =========== Firebase Registration End here ===============
      setEnteredName("");
      setEnteredMail("");
      setEnteredPassword("");
      setConfirmPassword("");
      setConfirmPasswordError("");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[370px] mx-auto flex flex-col items-center">
          <Link to="/">
            <img className="w-32" src={darkLogo} alt="darkLogo" />
          </Link>
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your name</p>
                <input
                  onChange={nameHandler}
                  value={enteredName}
                  type="text"
                  className="w-full rounded-md py-1 border border-zinc-400 px-2 text-base  outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {enteredNameError && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {enteredNameError}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">
                  Email or mobile phone number
                </p>
                <input
                  onChange={emailHandler}
                  value={enteredMail}
                  type="enteredMail"
                  className="w-full rounded-md lowercase py-1 border border-zinc-400 px-2 text-base  outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {enteredMailError && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {enteredMailError}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  value={enteredPassword}
                  onChange={passwordHandler}
                  type="enteredPassword"
                  className="w-full rounded-md py-1 border border-zinc-400 px-2 text-base  outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {enteredPasswordError && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {enteredPasswordError}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter password</p>
                <input
                  onChange={confirmPasswordHandler}
                  value={confirmPassword}
                  type="enteredPassword"
                  className="w-full rounded-md py-1 border border-zinc-400 px-2 text-base  outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {confirmPasswordError && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {confirmPasswordError}
                  </p>
                )}
                <p className="text-xs text-gray-600">
                  Password must be at least 6 characters.
                </p>
              </div>
              <button
                onClick={registrationHandler}
                className="w-full py-1.5 text-sm font-normal  bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              >
                Continue
              </button>
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
            <div>
              <p className="text-xs pb-2 text-black">
                Already have an account?{" "}
                <Link to="/sign-in">
                  <span className="text-xs  text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                    Sign in{" "}
                  </span>
                </Link>
              </p>
              <p className="text-xs text-black -mt-2">
                Buying for work?{" "}
                <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                  Create a free business account
                </span>
              </p>
            </div>
          </div>
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

export default Registration;