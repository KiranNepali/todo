import React from "react";
import { TodoItem } from "./ToDoItem";

export const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </>
  );
};
