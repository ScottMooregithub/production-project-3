import React from "react";
//set apollo.router and client
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
//pages
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SigninAndSignupPage from "./pages/SigninAndSignupPage";
import MagicMarkPage from "./pages/MagicMarkPage";
import LightWorkerPage from "./pages/LightWorkerPage";
import CashMoneyPage from "./pages/CashMoneyPage";
import SorcerersSpherePage from "./pages/SorcerersSpherePage";

//import authorization
import auth from "./utils/auth";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = auth.getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

//establish apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),

  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin-signup" element={<SigninAndSignupPage />} />
        <Route path="/magic-mark" element={<MagicMarkPage />} />
        <Route path="/light-worker" element={<LightWorkerPage />} />
        <Route path="/cash-money" element={<CashMoneyPage />} />
        <Route path="/sorcerers-sphere" element={<SorcerersSpherePage />} />
      </Routes>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
