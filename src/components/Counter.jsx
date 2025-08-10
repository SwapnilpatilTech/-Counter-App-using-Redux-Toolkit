import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
   <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
  <div className="w-[55rem] h-[30rem] flex flex-col justify-around items-center shadow-lg rounded-2xl gap-10 px-15 py-10 bg-white/80 backdrop-blur-md border border-white/30">
    
    <h1 className="text-5xl font-bold text-gray-800">{count}</h1>

    <div className="flex gap-6">
      <button
        className="px-6 py-3 text-lg rounded-lg bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 hover:scale-105 transform transition"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="px-6 py-3 text-lg rounded-lg bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 hover:scale-105 transform transition"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  </div>
</div>

  )
}

export default Counter