import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import SignupForm from "../components/SignupForm/SignupForm";

const SigninAndSignupPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4">
      <div className="mt-6 md:mt-0">
        <h1 className="uppercase text-3xl text-dark tracking-widest">
          Ask and you shall recieve
        </h1>
      </div>

      <div className="my-14">
        <div className="bg-lightGrey border-[3px] border-dark px-10 py-16 text-center">
          <LoginForm />
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SigninAndSignupPage;
