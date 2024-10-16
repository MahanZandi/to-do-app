import { React  } from 'react';
import Clock from './clock';

function MyInput({setinputText , inputText , todos , setTodos , setErrorText , t }) {

    const inputTextHandler = (e) => {
        setinputText(e.target.value)
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText){
            const data = [
                ...todos,
                { text: inputText, completed: false, id: Date.now()}
            ]
            setTodos(data);
            localStorage.setItem("text" , JSON.stringify(data))
            setinputText("");
            setErrorText("");
        }else {
            setErrorText("Please Enter a task ...")
        }
    }

    

    return ( 
        <div className='text-sm sm:text-base tilt-in-top-1'>
            <form className='container ' action="">
                <div className='mx-auto px-10 sm:px-0 sm:w-[400px] md:w-[500px] lg:w-[600px] jello-horizontal flex justify-center'>
                    <input value={inputText} onChange={inputTextHandler} className=' flex grow-[9] h-[40px]  border-none outline-none text-gray-100 rounded-l-2xl bg-[#181a1a] myInput p-4' placeholder={t('addTask')} type="text" />
                    <button onClick={submitTodoHandler}
                        className=' h-[40px] grow-[1] sm:text-base box-border bg-zinc-100 rounded-r-2xl standard-button' type='submit' >{t('addBtn')}
                    </button>
                </div>
            </form>
            <Clock/>
        </div>
     );
}

export default MyInput;
