import React, { useState } from "react";
import Auth from "../../utils/auth";
// import {graphql} from "react-apollo";
// importing mutations
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../../utils/mutations";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  // initialize mutation
  // const [loginUser, { error }] = useMutation(LOGIN_USER);
  const [loginUser] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const { data } = await loginUser({
        variables: { ...userFormData },
      });
      Auth.login(data.login.token);

      // if (!response.ok) {
      //   throw new Error("something went wrong!");
      // }

      // const { token, user } = await response.json();
      // console.log(user);
      // Auth.login(token);
    } catch (err) {
      setErrorMessage("Something went wrong, please try again!");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <h1 className="uppercase text-xl tracking-widest">
        Enter and Bare Your Soul
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="my-6 flex flex-col lg:flex-row items-center gap-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="bg-white border-[3px] border-green py-1 px-8 text-center text-dark focus:outline-none w-full"
          name="email"
          onChange={handleInputChange}
          value={userFormData.email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-white border-[3px] border-green py-1 px-8 text-center text-dark focus:outline-none w-full"
          name="password"
          onChange={handleInputChange}
          value={userFormData.password}
          required
        />
        <button
          type="submit"
          className="uppercase bg-green text-lightGrey py-[7px] px-14 w-full lg:w-auto"
        >
          Enter
        </button>
      </form>
      <p className="mt-2 text-red">{errorMessage}</p>
    </div>
  );
};

// export default LoginForm;
export default LoginForm;
// (graphql(loginUser, {name: "addUserName"}),
//                           graphql(allUser, {name: "allUserName"}))(loginUser)