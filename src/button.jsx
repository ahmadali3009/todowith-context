import React from 'react'
import { useContext } from 'react'
import { TodoContext } from './context/todocontext'
const Button = () => {
  const { submithandler, value } = useContext(TodoContext);

  return (
      <button 
          onClick={submithandler}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors"
      >
          {value.id ? "Update Todo" : "Add Todo"}
      </button>
  )
}

export default Button
