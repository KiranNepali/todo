import React, { useState } from "react";

export const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const handleNameChange = (event) => {
    console.log(event.target.value);
  };
  const handleDateChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="flex justify-between mb-10">
      <input
        onChange={handleNameChange}
        className="p-1 px-10 rounded-md bg-[#4F4A45] outline-none"
        type="text"
        placeholder="Enter your task..."
      />
      <input
        onChange={handleDateChange}
        className="p-1 rounded-md bg-[#4F4A45] outline-none"
        type="date"
        placeholder=""
      />
      <button
        onClick={() => onNewItem("A", "B")}
        className="bg-[#33c329] px-4 rounded-md"
      >
        Add
      </button>
    </div>
  );
};
