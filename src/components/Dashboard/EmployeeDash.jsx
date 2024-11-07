import React from "react";
import TaskList from "./TaskList";

const EmployeeDash = () => {
  return (
    <div>
      <div className="p-10 mx-10">
        <div className=" flex items-end justify-between">
          <h1 className="text-2xl font-medium">
            Hello,
            <br />
            <span className="text-3xl font-semibold">Paras👋</span>
          </h1>
          <button className="bg-red-600  hover:bg-red-500 text- font-medium text-white px-5 py-2 rounded-full">
            Log out
          </button>
        </div>
      </div>
      <div className="flex mt-10 justify-between gap-5 screen">
        <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400 ml-5">
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-3xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-3xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-3xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400 mr-5">
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-3xl font-medium">New Task</h3>
        </div>
      </div>
      <TaskList></TaskList>
    </div>
  );
};

export default EmployeeDash;
