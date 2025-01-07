import React, { useState } from "react";
import Swal from "sweetalert2";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [editTaskIndex, setEditTaskIndex] = useState(null);

  // Add a new task
  const addTask = () => {
    if (!taskTitle || !taskDescription) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Task Title or Task Description cannot be empty",
        background: "#2d2d2d",
        color: "#fff",
      });
      return;
    }

    setTasks([...tasks, { title: taskTitle, description: taskDescription, completed: false }]);
    setTaskTitle("");
    setTaskDescription("");
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Task added successfully",
      timer: 1500,
      showConfirmButton: false,
      background: "#2d2d2d",
      color: "#fff",
    });
  };

  // Edit a task
  const editTask = () => {
    if (!taskTitle || !taskDescription) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Task Title or Task Description cannot be empty",
        background: "#2d2d2d",
        color: "#fff",
      });
      return;
    }

    const updatedTasks = [...tasks];
    updatedTasks[editTaskIndex] = { 
      title: taskTitle, 
      description: taskDescription, 
      completed: tasks[editTaskIndex].completed 
    };

    setTasks(updatedTasks);
    setEditTaskIndex(null);
    setTaskTitle("");
    setTaskDescription("");

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Task updated successfully",
      timer: 1500,
      showConfirmButton: false,
      background: "#2d2d2d",
      color: "#fff",
    });
  };

  // Open modal for editing a task
  const openEditModal = (index) => {
    setEditTaskIndex(index);
    setTaskTitle(tasks[index].title);
    setTaskDescription(tasks[index].description);
  };

  // Delete a task
  const deleteTask = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this task?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      confirmButtonColor: "#198754",
      cancelButtonColor: "#dc3545",
      background: "#2d2d2d",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        setTasks(tasks.filter((_, i) => i !== index));
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Task deleted successfully",
          timer: 1500,
          showConfirmButton: false,
          background: "#2d2d2d",
          color: "#fff",
        });
      }
    });
  };

  // Toggle completion status
  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="min-vh-100 bg-dark text-white p-4">
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 className="text-center display-4 mb-5">My Todos</h1>

        {/* Add Task Button */}
        <div className="mb-4 text-center">
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#taskModal"
            onClick={() => {
              setEditTaskIndex(null);
              setTaskTitle("");
              setTaskDescription("");
            }}
          >
            Add New Task
          </button>
        </div>

        {/* Task List */}
        <div className="list-group">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div
                key={index}
                className="list-group-item bg-secondary bg-opacity-25 text-white d-flex align-items-center gap-3 rounded-3 mb-2"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompletion(index)}
                  className="form-check-input"
                />
                <div className="flex-grow-1">
                  <h5 className={`mb-1 ${task.completed ? "text-decoration-line-through text-success" : "text-light"}`}>
                    {task.title}
                  </h5>
                  <p className={`mb-0 small ${task.completed ? "text-secondary" : "text-light"}`}>
                    {task.description}
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => openEditModal(index)}
                    data-bs-toggle="modal"
                    data-bs-target="#taskModal"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-secondary">No tasks found.</p>
          )}
        </div>

        {/* Task Modal */}
        <div
          className="modal fade"
          id="taskModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h5 className="modal-title">{editTaskIndex === null ? "Add Task" : "Edit Task"}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Task Title</label>
                  <input
                    type="text"
                    className="form-control bg-secondary text-white border-secondary"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control bg-secondary text-white border-secondary"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-success"
                  onClick={editTaskIndex === null ? addTask : editTask}
                  data-bs-dismiss="modal"
                >
                  Save Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;