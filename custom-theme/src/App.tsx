import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NewComponent from "./component/NewComponent";
import AppLayout from "./layout/app-layout";

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <AppLayout />
    </div>
  );
}

export default App;
