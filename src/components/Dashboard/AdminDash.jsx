import React from "react";
import AdminTasks from "./AdminTasks";

const AdminDash = () => {
  return (
    <div className="w-full h-screen p-7">
      <div className="mt-10 mx-10">
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
      <div className="p-5 mt-10 rounded bg-[#1c1c1c]">
        <form className="flex flex-wrap items-start w-full justify-between">
          <div className="w-1/2">
            <h3 className="mb-0.5 text-gray-300">Assign to</h3>
            <input
              required
              type="number"
              placeholder="Enter employee id"
              className="mb-4 py-1 px-2 w-4/5 border rounded placeholder-gray-300 text-gray-300 outline-none bg-transparent border-gray-400"
            ></input>
            <h3 className="mb-0.5 text-gray-300">Task Title</h3>
            <input
              required
              type="text"
              placeholder="eg- UI/UX design......."
              className="mb-3 py-1 px-2 w-4/5 border rounded  placeholder-gray-300 text-gray-300 outline-none bg-transparent border-gray-400"
            ></input>
            <h3 className="mb-0.5 text-gray-300">Priority</h3>
            <select
              required
              id="dropdown"
              className="border text-gray-300 border-gray-400 rounded mb-3 py-1 px-2 w-4/5 outline-none bg-transparent"
            >
              <option style={{ color: "gray" }} value="" disabled></option>
              <option className="text-black" value="option1">
                High
              </option>
              <option className="text-black" value="option2">
                Moderate
              </option>
              <option className="text-black" value="option3">
                Low
              </option>
            </select>
            <h3 className="mb-0.5 text-gray-300">Deadline</h3>
            <input
              required
              type="date"
              className="border border-gray-400 rounded  py-1 px-2 w-4/5  text-gray-300 bg-transparent outline-none"
            />
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="mb-0.5 text-gray-300">Description</h3>
            <textarea
              placeholder="Write the task description here......."
              className=" border-gray-400 border-[1px] w-full h-44 py-2 px-4  rounded text-gray-300 placeholder-gray-300 outline-none bg-transparent "
            ></textarea>
            <button className="bg-emerald-600  py-3 px-5 rounded mt-5 w-full hover:bg-emerald-400">
              Create
            </button>
          </div>
        </form>
      </div>
      <AdminTasks></AdminTasks>
      <div className="h-10"></div>
    </div>
  );
};

export default AdminDash;
