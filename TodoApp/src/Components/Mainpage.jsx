function Mainpage() {
  return (
    <>
      <form className="flex flex-row items-center justify-center h-screen">
        <input
          type="text"
          placeholder="Enter your task"
          className="border border-gray-300 rounded-md p-2 mr-4 w-64"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    </>
  );
}

export default Mainpage;
