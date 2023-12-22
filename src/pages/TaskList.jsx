import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "./Private";
import People from "../Components/People";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [draggedTask, setDraggedTask] = useState(null);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/Task?email=${user?.email}`);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/Task/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));

      // Show SweetAlert notification
      Swal.fire({
        icon: "success",
        title: "Task deleted successfully!",
        showConfirmButton: false,
        timer: 2000, // 2 seconds
      });
    } catch (error) {
      console.error("Error deleting task:", error);
      Swal.fire({
        icon: "error",
        title: "Error deleting task",
        text: error.message,
      });
    }
  };

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = async (status) => {
    if (draggedTask) {
      try {
        // Update the status of the dragged task on the server
        await axios.put(`http://localhost:5000/Task/${draggedTask._id}`, {
          status,
        });

        // Update the status of the dragged task locally
        const updatedTasks = tasks.map((task) =>
          task._id === draggedTask._id ? { ...task, status } : task
        );
        setTasks(updatedTasks);

        // Reset draggedTask state
        setDraggedTask(null);

        // Show SweetAlert notification
        Swal.fire({
          icon: "success",
          title: "Task status updated successfully!",
          showConfirmButton: false,
          timer: 2000, // 2 seconds
        });
      } catch (error) {
        console.error("Error updating task status:", error);
        Swal.fire({
          icon: "error",
          title: "Error updating task status",
          text: error.message,
        });
      }
    }
  };

  const renderTasks = (taskList) => {
    return taskList.map((task) => (
      <div
        key={task._id}
        draggable
        onDragStart={() => handleDragStart(task)}
        className="card w-72 mt-1 bg-base-100 shadow-xl"
      >
        <div className="card-body">
          <h1 className="card-title ml-10 mb-4">Task : {task.taskName}</h1>
          <div className="flex">
            <button
              onClick={() => handleDelete(task._id)}
              className="btn ml-16 btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
    <div className="grid grid-cols-3 w-full gap-10 mb-40">
      <div className="" onDrop={() => handleDrop("TO-DO")} onDragOver={handleDragOver}>
        <h2 className="text-xl font-semibold text-center py-2 bg-blue-300">
          To-Do
        </h2>
        {renderTasks(tasks.filter((task) => task.status === "TO-DO"))}
      </div>
      <div className="" onDrop={() => handleDrop("On Going")} onDragOver={handleDragOver}>
        <h2 className="text-xl font-semibold text-center py-2 bg-blue-300">
          On going
        </h2>
        {renderTasks(tasks.filter((task) => task.status === "On Going"))}
      </div>
      <div className="" onDrop={() => handleDrop("Completed")} onDragOver={handleDragOver}>
        <h2 className="text-xl font-semibold text-center py-2 bg-blue-300">
          Completed
        </h2>
        {renderTasks(tasks.filter((task) => task.status === "Completed"))}
      </div>
    </div>
    <h1 className="font-bold text-4xl text-center">This Website is For Whom ??</h1>
      <People></People>
    </>
  );
};

export default TaskList;
