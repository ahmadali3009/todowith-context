import { useContext, useEffect } from 'react';
import { TodoContext } from './context/todocontext';
import './App.css';
import Input from './input';
import Button from './button';

function App() {
    const { todo, setvalue , settodo } = useContext(TodoContext);
    
    const dhandler = (e) => {
      e.preventDefault();
      const id = parseInt(e.target.value, 10); // Ensure id is a number
      const updatedtodos = todo.filter((t) => t.id !== id);
      console.log("deletion", updatedtodos);
      settodo(updatedtodos);
  };

    const handler = (e) => {
        const id = parseInt(e.target.value, 10); // Parse the id if it's an integer
        const foundTodo = todo.find((to) => to.id === id);
        if (foundTodo) {
            setvalue(foundTodo); // Set the value to the found todo
        } else {
            setvalue({ id: null, todo: "not found" });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Todo App</h1>
                <Input />
                <Button />
                <ul className="mt-4 space-y-2">
                    {todo.map((to) => (
                        <li key={to.id} className="bg-gray-200 p-2 rounded flex items-center">
                        <span className="flex-1">{to.todo}</span>
                        <div className="space-x-2">
                            <button 
                                value={to.id} 
                                onClick={handler} 
                                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
                            >
                                U
                            </button>
                            <button 
                                value={to.id} 
                                onClick={dhandler} 
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
                            >
                                X
                            </button>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
