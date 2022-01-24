import React, { useState } from 'react';

const AddNewTodo = ({addTodo}) => {
    const [ todos, setTodos ] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        addTodo(todos)
        setTodos('')
    }

    return (
        <form onSubmit={ formSubmit }>
            <label htmlFor='todo'>Add New ToDo</label>
            <input type='text' id='todo' value={todos} onChange={ (e) => setTodos(e.target.value)} />
            <input type='submit'  />
        </form>
    );
};

export default AddNewTodo;