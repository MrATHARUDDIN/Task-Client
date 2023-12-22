import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "./Private";

const AddTask = () => {
  const { register, handleSubmit,reset, } = useForm();
  const {user} = useContext(AuthContext)
  const onSubmit = async (data) => {
    data.status = "TO-DO";
    data.user = user?.email;
    console.log(data);
    try {
      // Make a POST request using Axios
      const response = await axios.post("http://localhost:5000/Task", data);
      // Check if the request was successful (you might want to check the actual response status code)
      if (response.status === 200) {
        Swal.fire({
          title: "Task Added Successfully!",
          icon: "success",
        });

        reset();
      }
    } catch (error) {
      // Handle errors here
      console.error("Error adding task:", error);

      // Display a SweetAlert for the error
      Swal.fire({
        title: "Error",
        text: "There was an error adding the task. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="grid justify-center mb-32">
      <div className="text-3xl font-bold justify-center grid mt-10 mb-10">
        Create Task/Add Task
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Task Name:</label>
          <input
            {...register("taskName", { required: "Task name is required" })}
            className="input input-bordered bg-gray-50 w-[40rem]"
          />
        </div>
        <div className="form-control">
          <label>Task Deadline:</label>
          <input
            type="date"
            {...register("taskdeadline", {
              required: "Task deadline is required",
            })}
            className="input input-bordered bg-gray-50 w-[40rem]"
          />
        </div>
        <div className="form-control">
          <label>Task Description:</label>
          <textarea
            {...register("taskDescription")}
            className="input input-bordered bg-gray-50 w-[40rem] h-32"
          />
        </div>
        <div className="form-control">
          <label>Priority:</label>
          <select
            {...register("priority")}
            className="select-bordered bg-gray-50 w-[40rem]"
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn justify-center bg-green-400 mt-5 text-white"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
