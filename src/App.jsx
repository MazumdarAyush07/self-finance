import React from "react";
import { Header } from "./components/Header";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";
import { Container } from "./components/Container";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Container />
    </GlobalProvider>
  );
}

export default App;
