import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../firebase";
import { db } from "../firebase";
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [user, loading, error] = useAuthState(auth);

  // Actions
  const getTransactions = async () => {
    if (!user) return;
    let txs = await getDocs(
      query(collection(db, "transactions"), where("uid", "==", user.uid))
    );
    txs = txs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch({
      type: "GET_TRANSACTION",
      payload: txs,
    });
  };

  async function deleteTransaction(id) {
    const tx = await doc(db, "transactions", id);
    deleteDoc(tx);
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  async function addTransaction(transaction) {
    const newTx = {
      uid: user.uid,
      amount: transaction.amount,
      tag: transaction.tag,
    };
    try {
      const docRef = await addDoc(collection(db, "transactions"), newTx);
      newTx.id = docRef.id;
      dispatch({
        type: "ADD_TRANSACTION",
        payload: newTx,
      });
    } catch (error) {
      console.error(error);
    }
  }

  const logInUser = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    getTransactions();
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        user,
        loading,
        error,
        logInUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
