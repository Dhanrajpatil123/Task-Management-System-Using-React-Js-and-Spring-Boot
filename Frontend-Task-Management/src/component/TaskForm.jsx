import { useState, useEffect } from "react";
import { addTask, getTaskById, updateTask } from "../ServiceAPI/API";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = ({ fetchTasks }) => {
  const { id } = useParams(); // ✅ Get task ID from URL (edit mode)
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "PENDING",
    dueDate: "",
  });

  useEffect(() => {
    if (id) {
      // ✅ Fetch task if ID is present (edit mode)
      getTaskById(id)
        .then((response) => {
          setTask(response.data);
        })
        .catch((error) => console.error("Error fetching task:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // ✅ Update task if ID exists
        await updateTask(id, task);
      } else {
        // ✅ Add new task
        await addTask(task);
      }
      fetchTasks();
      navigate("/"); // ✅ Redirect back to Task List
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <div className="container">
      <h2>{id ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Task Title"
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="form-control"
            placeholder="Task Description"
          />
        </div>

        <div className="mb-3">
          <select name="status" value={task.status} onChange={handleChange}>
            <option value="PENDING">Pending</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        <div className="mb-3">
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary form-control">
          {id ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
