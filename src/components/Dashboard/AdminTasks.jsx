import React from "react";

const AdminTasks = () => {
  return (
    <div
      className="w-full h-80 p-5 bg-[#1c1c1c] mt-5 overflow-auto rounded"
      id="admintasks"
    >
      <div className="bg-red-400 mb-4 p-4 flex justify-between rounded ">
        <h3>Name</h3>
        <h3>Title</h3>
        <h3>Status</h3>
      </div>
      <div className="bg-green-400 mb-4 p-4 flex justify-between rounded ">
        <h3>Name</h3>
        <h3>Title</h3>
        <h3>Status</h3>
      </div>
      <div className="bg-blue-400 mb-4 p-4 flex justify-between rounded ">
        <h3>Name</h3>
        <h3>Title</h3>
        <h3>Status</h3>
      </div>
      <div className="bg-yellow-400 mb-4 p-4 flex justify-between rounded ">
        <h3>Name</h3>
        <h3>Title</h3>
        <h3>Status</h3>
      </div>
      <div className="bg-violet-400 mb-4 p-4 flex justify-between rounded ">
        <h3>Name</h3>
        <h3>Title</h3>
        <h3>Status</h3>
      </div>
    </div>
  );
};

export default AdminTasks;
