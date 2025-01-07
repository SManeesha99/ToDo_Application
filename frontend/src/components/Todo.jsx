import React, {useState} from "react";

const Todo = () => {

  const [task, setTask] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const addTask = () => {
    if(!taskTitle || !taskDescription){
      alert("Task Title or Task Description cannot be empty");
    }
    else{
      setTask([...task, {title: taskTitle, description: taskDescription}]);
      setTaskTitle("");
      setTaskDescription("");

    }
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

        {/* task list */}
        <ul className="list-group mt-4">
          {task.map((t, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              <h5>{t.title}</h5>
              <p>{t.description}</p>
              <button
              className="btn btn-warning btn-sm me-2">
              Edit
              </button>
              <button
              className="btn btn-danger btn-sm me-2">
              Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
