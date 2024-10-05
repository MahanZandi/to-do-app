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

    return ( 
        <div className={`min-h-screen `}>
            <Header
             
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
