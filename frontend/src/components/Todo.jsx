import React, { useState } from "react";
import Swal from "sweetalert2";

const Todo = () => {
  const [task, setTask] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState("");
  const [editTaskDescription, setEditTaskDescription] = useState("");
  const [editTaskCompleted, setEditTaskCompleted] = useState(false);

  const addTask = () => {
    if (!taskTitle || !taskDescription) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Task Title or Task Description cannot be empty",
      })
    }
    else {
      setTask([...task, { title: taskTitle, description: taskDescription, isCompleted: false }]);
      setTaskTitle("");
      setTaskDescription("");

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Task added successfully",
        timer: 1500,
        showConfirmButton: false,
      })

    }
  };

  const editTask = () => {
    if (!editTaskTitle || !editTaskDescription) {
      alert("Task Title or Task Description cannot be empty");
      return;
    }

    const updatedTask = [...task];
    updatedTask[editTaskIndex] = {
      title: editTaskTitle,
      description: editTaskDescription,
      isCompleted: editTaskCompleted,
    };

    setTask(updatedTask);
    setEditTaskIndex(null);
    setEditTaskTitle("");
    setEditTaskDescription("");
    setEditTaskCompleted(false);

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Task updated successfully",
      timer: 1500,
      showConfirmButton: false,
    })

  };

  const openUpdatedModal = (index) => {
    setEditTaskIndex(index);
    setEditTaskTitle(task[index].title);
    setEditTaskDescription(task[index].description);
    setEditTaskCompleted(task[index].isCompleted);
  };

  const deleteTask = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this task?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTask = [...task];
        updatedTask.splice(index, 1);
        setTask(updatedTask);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Task deleted successfully",
          timer: 1500,
          showConfirmButton: false,
        })
      }
    });

  };

  const toggleCompletion = (index) => {
    const updatedTask = [...task];
    updatedTask[index].isCompleted = !updatedTask[index].isCompleted;
    setTask(updatedTask);
  };

  return (
    <>
      <div className="container ">
        <h1 className="text-center mt-3">Todo Application</h1>
        <button
          type="button"
          className="btn btn-primary mt-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Task
        </button>

        {/* add task modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Task
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="task-tittle" className="col-form-label">
                      Task Tittle:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="task-tittle"
                      value={taskTitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="task-desc" className="col-form-label">
                      Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="task-desc"
                      value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={addTask}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* edit task modal */}
        <div
          className="modal fade"
          id="editTaskModal"
          tabindex="-1"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="editModalLabel">
                  Edit Task
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="edit-task-tittle" className="col-form-label">
                      Task Tittle:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edit-task-tittle"
                      value={editTaskTitle}
                      onChange={(e) => setEditTaskTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="edit-task-desc" className="col-form-label">
                      Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="edit-task-desc"
                      value={editTaskDescription}
                      onChange={(e) => setEditTaskDescription(e.target.value)}
                    ></textarea>
                  </div>
                  {/* <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="edit-task-completed"
                      checked={editTaskCompleted}
                      onChange={(e) => setEditTaskCompleted(e.target.checked)}
                    />
                    <label className="form-check-label" for="edit-task-completed">
                      Task Completed
                    </label>
                  </div> */}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={editTask}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* task list */}
        <ul className="list-group mt-4">
          {task.map((t, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={index}
            >
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => {
                    const updatedTask = [...task];
                    updatedTask[index].completed = !t.completed;
                    setTask(updatedTask);
                  }}
                />
              </div>
              <h5>{t.title}</h5>
              <p>{t.description}</p>
              <button
                className="btn btn-warning btn-sm me-2"
                data-bs-toggle="modal"
                data-bs-target="#editTaskModal"
                onClick={() => openUpdatedModal(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm me-2"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
