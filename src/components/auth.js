import React, { useState } from "react";
import { auth } from "../config/Firebase-Config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
    } catch (error) {
      console.log(error.message);
    }

    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <input
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={userData.email}
      />
      <input
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={userData.password}
      />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Auth;
