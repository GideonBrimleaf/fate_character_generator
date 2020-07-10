import React from "react";
import { auth } from "./fire";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </>
  );
};

export default Home;