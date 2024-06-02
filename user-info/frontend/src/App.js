import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Form</h1>
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>
        <div className="display-info">
          <h2>Entered Information:</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
