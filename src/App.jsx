function App() {
  return (
    <>
      <div className=" bg-[#6C5F5B] flex justify-center flex-col text-white max-w-[800px] mx-auto mt-28 p-5">
        <h1 className="flex justify-center items-center font-bold tracking-widest mb-10">
          TODO APP
        </h1>
        <div className="flex justify-between mb-10">
          <input
            className="p-1 rounded-md px-[10rem] bg-[#4F4A45] outline-none"
            type="text"
            placeholder="Enter your task..."
          />
          <input
            className="p-1 rounded-md bg-[#4F4A45] outline-none"
            type="date"
            placeholder=""
          />
          <button className="bg-[#33c329] px-4 rounded-md">Add</button>
        </div>
        <div className="flex justify-center flex-col ">
          <div className="bg-[#4F4A45] mb-5 flex justify-between items-center p-4 rounded-md">
            <p>Task 1</p>
            <button className="bg-[#f6461e] px-2 rounded-md">Delete</button>
          </div>
          <div className="bg-[#4F4A45] mb-5 flex justify-between items-center p-4 rounded-md">
            <p>Task 2</p>
            <button className="bg-[#f6461e] px-2 rounded-md">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
