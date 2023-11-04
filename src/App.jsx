import { useState } from "react";
import { AddTodo } from "./components/AddToDo";
// import { TodoItems } from "./components/TodoItems";
import { TodoItems } from "./components/TodoItems";
import { Message } from "./components/Message";

function App() {
  // const intodoItems = [
  //   {
  //     name: "Do Homwork",
  //     date: "2023-12-18",
  //   },
  //   {
  //     name: "Buy milk",
  //     date: "2023-12-18",
  //   },
  //   {
  //     name: "Play game",
  //     date: "2023-12-18",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDate) => {
    console.log();
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        date: itemDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item ${todoItemName} deleted.`);
  };
  return (
    <>
      <div className="w-full h-screen bg-[#6C5F5B] flex justify-center flex-col text-white   p-5">
        <h1 className="flex justify-center items-center font-bold tracking-widest mb-10">
          TODO APP
        </h1>
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <Message />}

        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </>
  );
}

export default App;
