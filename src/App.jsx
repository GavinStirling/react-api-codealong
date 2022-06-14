import { useState, useEffect } from "react";
import "./App.scss";
import CardContainer from "./components/CardContainer/CardContainer";
import RangeInput from "./components/RangeInput/RangeInput";
import RadioButtons from "./components/RadioButtons/RadioButtons";

const App = () => {
  const [users, setUsers] = useState([]);
  const [noOfUsers, setNoOfUsers] = useState(7);
  const [gender, setGender] = useState("All");

  const getUsers = async (userNumber, userGender) => {
    let url = "https://randomuser.me/api";
    if (userNumber) {
      url += `?results=${userNumber}&gender=${userGender}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    setUsers(data.results);
  };

  const handleNoOfUsers = (event) => {
    setNoOfUsers(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  // getUsers() causes an infinite loop

  // useEffect()
  // - A function -> The code which you want to run
  // - An Array -> Dependency Array --> When you want to run the function

  // [] -> Component is loaded --> Mounting
  // [Dependency] -> Component is reloaded when the dependency is changed

  useEffect(() => {
    getUsers(noOfUsers, gender);
  }, [noOfUsers, gender]);

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <RangeInput
        label="No. of Users"
        id="range_input"
        onChange={handleNoOfUsers}
        value={noOfUsers}
      />
      <RadioButtons
        onChange={handleGender}
        selected={gender}
        options={["All", "Male", "Female"]}
      />
      <CardContainer cards={users} />
    </div>
  );
};

export default App;
