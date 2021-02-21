import data from "./data";
import List from "./List";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="min-h-screen bg-blue-100 py-10 flex flex-col">
      <div className="text-center py-3 ">
        <h1 className="text-4xl font-bold text-purple-500 ">Hello!</h1>
        <p className="mt-2 text-2xl text-purple-700 font-semibold">
          {people.length} birthdays today
        </p>
      </div>
      {/* list components */}
      <div className="p-5 border border-gray-300 mx-auto text-center rounded-lg mt-2 bg-white shadow-md">
        <List people={people} />
        <button
          className="bg-purple-200 text-purple-700 font-bold text-base px-6 py-2 rounded-lg mt-3 hover:bg-purple-700 hover:text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-md"
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
