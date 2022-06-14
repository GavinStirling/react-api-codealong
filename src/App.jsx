import "./App.scss";

import { useState } from "react";

import Button from "./components/Button/Button";
import Profiles from "./components/Profiles/Profiles";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const url = "https://randomuser.me/api/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data.results);
    console.log(data.results);
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button label="Generate Random Users" onClick={getUsers} />

      {
        users && <Profiles users={users} />
      }
    </div>
  );
};

export default App;
