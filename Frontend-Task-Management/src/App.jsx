import { useState, useEffect } from "react";
import "./App.css";
import TaskList from "./component/TaskList";
import TaskForm from "./component/TaskForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getTask } from "./ServiceAPI/API";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await getTask();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Router>
      <div>
        <h1 className="text-center py-5 text-primary">
          Task Management System
        </h1>

        <Routes>
          <Route path="/" element={<TaskList fetchTasks={fetchTasks}></TaskList>}></Route>

          <Route path="/add" element={<TaskForm fetchTasks={fetchTasks}></TaskForm>} />

          <Route path="/edit/:id" element={<TaskForm fetchTasks={fetchTasks}></TaskForm>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
