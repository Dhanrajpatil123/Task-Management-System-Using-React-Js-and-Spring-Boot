import React, { useEffect, useState } from "react";
import { getTask, deleteTask } from "../ServiceAPI/API";
import { useNavigate } from "react-router-dom";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTask();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks(); // Refresh list after deleting
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/edit/${id}`); // ✅ Redirect to the edit page
  };

  return (
    <div className="container">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="btn btn-danger m-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(task.id)} // ✅ Pass task ID to edit
                  className="btn btn-success m-2"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
