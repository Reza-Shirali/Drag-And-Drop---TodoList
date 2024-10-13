import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

function CreateTask({ tasks, setTasks }) {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.length < 3)
      return toast.error("A task must have more than 3 characters");
    if (task.name.length > 100)
      return toast.error("A task must not be more than 100 characters");

    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });

    toast.success("Task created");

    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center flex-col gap-2 sm:gap-0 sm:flex-row">
      <input
        value={task.name}
        type="text"
        className="border-2 outline-none font-black text-lg border-yellow-500 bg-transparent rounded-md sm:mr-4 h-12 w-80 sm:w-96 px-2"
        onChange={(e) =>
          setTask({ ...task, id: uuidv4(), name: e.target.value })
        }
      />
      <button className="md:relative w-80 sm:w-auto bg-yellow-400 font-black hover:bg-yellow-300 transition-all ease-in-out duration-200 delay-75 rounded-md p-2 text-3xl ">
        create
      </button>
    </form>
  );
}

export default CreateTask;
