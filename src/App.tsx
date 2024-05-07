import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Registration from "./components/Registration";

function App() {
  const [task, setTask] = useState("Task 1");

  return (
    <>
      <NavBar currentTask={(selectedTask) => setTask(selectedTask)} />
      {task === "Task 1" ? <Login /> : null}
      {task === "Task 2" ? <Registration /> : null}
    </>
  );
}

export default App;
