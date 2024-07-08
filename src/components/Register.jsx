import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userName = prompt("Please enter your name:");
      if (userName) {
        await updateProfile(result.user, {
          displayName: userName,
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        <h5>
          Already have an account? <Link to={"/login"}>Login</Link>
        </h5>
        <div className="or-divider">
          <span>or</span>
        </div>
        <button onClick={handleGoogleSignUp} className="google-button">
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
