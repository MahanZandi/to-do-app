import { React , useState} from 'react';
import '../src/index.css';
import '../src/style.css';
import Header from './header';
import MyInput from './myInput';
import ToDoList from './toDoList';

function App() {
    const [inputText , setinputText] = useState(""); 
    const [todos , setTodos] = useState([]); //task lists لیست تسک های ما
    const [errorText , setErrorText] = useState("");
    const [firstTheme , setFirstTheme] = useState(" bg-gradient-to-r from-neutral-600 to-cyan-950");
    const [secendTheme , setSecendTheme] = useState("bg-gradient-to-r from-sky-600 to-green-500");
    const [theredTheme , setTheredTheme] = useState("bg-gradient-to-r from-slate-100 to-cyan-500");

    return ( 
        <div className='min-h-screen bg-gradient-to-r from-neutral-600 to-cyan-950'>
            <Header
            setFirstTheme={setFirstTheme}
            setSecendTheme={setSecendTheme}
            setTheredTheme={setTheredTheme}
            />
            <MyInput 
            todos={todos} 
            setTodos={setTodos} 
            inputText={inputText} 
            setinputText={setinputText}
            setErrorText={setErrorText}
            />
            <p className=' text-gray-50 text-4xl flex justify-center  '>{errorText}</p>
            <ToDoList todos={todos} setTodos={setTodos}/>
        </div>
     );
}

export default App;
