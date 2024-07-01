import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext(null);

const ContextProvider = (props) => {
    const [todo, settodo] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [value, setvalue] = useState({ id: null, todo: "" });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo));
    }, [todo]);

    const inputhandler = (e) => {
        setvalue({ ...value, todo: e.target.value });
    };

    const submithandler = (e) => {
        e.preventDefault();
        if (value.todo) {
            if (value.id !== null) {
                // Update existing todo
                const updatedTodos = todo.map((to) =>
                    to.id === value.id ? { ...to, todo: value.todo } : to
                );
                settodo(updatedTodos);
            } else {
                // Add new todo
                settodo([...todo, { id: Date.now(), todo: value.todo }]);
            }
            setvalue({ id: null, todo: "" });
        }
    };

    return (
        <TodoContext.Provider value={{ setvalue, value, todo, settodo, inputhandler, submithandler }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default ContextProvider;
