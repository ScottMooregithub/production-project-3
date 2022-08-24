import React, { useState } from "react";
// import {graphql} from "react-apollo";
// import { createUser } from "../utils/API";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";
import { useSnackbar } from "notistack";

const SignupForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  //use mutations
  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);

      enqueueSnackbar("You have successfully signed up!", { variant: "success" });
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
    <div className="pt-6">
      <h1 className="uppercase text-xl tracking-widest">
        Initiate and Set Your Intention
      </h1>
      <form
        className="mt-6 flex flex-col lg:flex-row items-center gap-4"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          className="bg-white border-[3px] border-green py-1 px-8 text-center text-dark focus:outline-none w-full lg:w-auto"
          name="username"
          onChange={handleInputChange}
          value={userFormData.username}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-white border-[3px] border-green py-1 px-8 text-center text-dark focus:outline-none w-full lg:w-auto"
          name="email"
          onChange={handleInputChange}
          value={userFormData.email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-white border-[3px] border-green py-1 px-8 text-center text-dark focus:outline-none w-full lg:w-auto"
          name="password"
          onChange={handleInputChange}
          value={userFormData.password}
          required
        />
        <button
          type="submit"
          className="uppercase bg-green text-lightGrey py-[7px] px-14 w-full lg:w-auto"
        >
          Create
        </button>
      </form>
      <p className="mt-2 text-red">{errorMessage}</p>
    </div>
  );
};

export default SignupForm;
// export default LoginForm(
//   graphql(addUser, { name: "addUserName" }),
//   graphql(allUser, { name: "allUserName" })
// )(addUser);
