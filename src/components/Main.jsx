import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import Logout from "./Logout";

const Main = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        {user ? (
          <div>
            <h3>Welcome, {user.displayName || user.email}</h3>
            <Logout />
          </div>
        ) : (
          <div>
            <h3>Firebase Auth App</h3>
            <p>Please login or register to continue.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
