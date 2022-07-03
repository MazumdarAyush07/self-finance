import React, { useContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GlobalContext } from "../context/GlobalState";
import { auth, logout, signInWithGoogle } from "../firebase";

export const Header = () => {
  const { user, loading, error, logInUser } = useContext(GlobalContext);

  useEffect(() => {
    if (loading) {
      return;
    }
  }, [loading, user]);
  return (
    <div className="header">
      <h2>Expense Tracker</h2>
      {!loading &&
        (user ? (
          <button className="header-btn log-out" onClick={logout}>
            Logout
          </button>
        ) : (
          <button className="header-btn" onClick={logInUser}>
            Login with Google
          </button>
        ))}
    </div>
  );
};
