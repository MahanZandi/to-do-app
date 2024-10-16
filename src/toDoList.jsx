import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({todos , setTodos}) {
    return ( 
        <div>
            <ul>
                {
                    todos.map((todo) => (
                        <ToDoItem 
                        text={todo.text} 
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        />
                    ))
                }
            </ul>
        </div>
     );
}

export default ToDoList;