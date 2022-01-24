import React, { useEffect, useState } from 'react';
import AddNewTodo from './addNewTodo';

const TodoList = () => {
    const [ todos, setTodos ] = useState([
        {text: 'Pay bills', id: 1},
        {text: 'Do your homework', id: 2},
        {text: 'Feed the dog', id: 3},
    ]);

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos, 
            {text, id: Math.random()}
        ]);
    }

    

    useEffect(() => {
        console.log(todos)
    }, [todos]);  //This second parameter include data that run this function, absense of it will cause function to run on every state change.

    useEffect(() => {
        console.log(count)
    }, [count]); //Use two different use effect hooks for different state element

    return (
        <div >
            <ul>
                {todos.map ((todo) => {
                    return (
                        <li key={todo.id}>{ todo.text }</li>
                    )
                })}
            </ul>

            <AddNewTodo addTodo={ addTodo }/>
            <button onClick={() => setCount(count + 1) }>Score: {count}</button>
        </div>
    )
};

export default TodoList;