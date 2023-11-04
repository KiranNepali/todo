import { useState } from "react";
import { AddTodo } from "./components/AddToDo";
// import { TodoItems } from "./components/TodoItems";
import { TodoItems } from "./components/TodoItems";

function App() {
  const intodoItems = [
    {
      name: "Do Homwork",
      date: "2023-12-18",
    },
    {
      name: "Buy milk",
      date: "2023-12-18",
    },
    {
      name: "Play game",
      date: "2023-12-18",
    },
  ];

  const [todoItems, setTodoItems] = useState(intodoItems);
  const handleNewItem = (itemName, itemDate) => {
    console.log(`NEW ITEM: ${itemName} DATE : ${itemDate}`);
  };
  return (
    <>
      <div className="w-full h-screen bg-[#6C5F5B] flex justify-center flex-col text-white   p-5">
        <h1 className="flex justify-center items-center font-bold tracking-widest mb-10">
          TODO APP
        </h1>
        <AddTodo onNewItem={handleNewItem} />
        <TodoItems todoItems={todoItems} />
      </div>
    </>
  );
}

export default App;
