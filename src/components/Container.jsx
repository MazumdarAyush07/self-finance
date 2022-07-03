import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Loader } from "./Loader";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";

export const Container = () => {
  const { user, loading, error } = useContext(GlobalContext);
  useEffect(() => {}, [user, loading]);
  return loading ? (
    <Loader />
  ) : user ? (
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <AddTransaction />
      <TransactionList />
    </div>
  ) : (
    <div style={{ textAlign: "center" }}>Login to manage transactions!</div>
  );
};
