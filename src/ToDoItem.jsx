import React from 'react';
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
function ToDoItem({text , todo , todos , setTodos}) {

    const deletehandler = () => {
        const data = todos.filter((el) => el.id !== todo.id)
        setTodos(data)
        localStorage.setItem('text', data)
    }

    const completeHandeler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item , completed: !item.completed
                }
            }
            return item;
        }))
    };

    return ( 
        <ul className='flex justify-center text-sm sm:text-base '>
            <div className={`${todo.completed ? "completed" : ""} todo `}>
                <li className={` text-gray-100 pl-3 `}> {text} </li>
                <div className='pl-6'>
                    <button onClick={completeHandeler} className='bg-gray-100 m-1 p-2 rounded-[50%] standard-button text-[18px] sm:text-[30px]'><TiTick  /></button>
                    <button onClick={deletehandler} className='bg-gray-200 m-1 p-2 rounded-[50%] standard-button text-[18px] sm:text-[30px] '><MdDelete /></button>
                </div>
            </div>
        </ul>
     );
}

export default ToDoItem;