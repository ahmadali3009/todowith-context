import React from 'react'
import { useContext } from 'react'
import { TodoContext } from './context/todocontext'

const Input = () => {
  const { value, inputhandler } = useContext(TodoContext);
    
  return (
      <input 
          type="text" 
          placeholder="Enter todo" 
          value={value.todo}
          onChange={inputhandler}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
      />
  )
}

export default Input
