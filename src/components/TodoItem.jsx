import React from "react";

export const TodoItem = ({ todoDate, todoName, onDeleteClick }) => {
  // let todoDate = "2023-12-3";
  // let todoName = "Homework";
  return (
    <div className="flex justify-center flex-col ">
      <div className="bg-[#4F4A45] mb-5 flex justify-between items-center p-4 rounded-md">
        <p>{todoName}</p>
        <p>{todoDate}</p>
        <button
          onClick={() => onDeleteClick(todoName)}
          className="bg-[#f6461e] px-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
