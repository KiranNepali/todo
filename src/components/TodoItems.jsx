import React from "react";
import { TodoItem } from "./ToDoItem";

export const TodoItems = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.date} />
      ))}
    </>
  );
};
