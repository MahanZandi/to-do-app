import { React , useState} from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from './navBar'
import MyInput from './myInput';
import ToDoList from './toDoList';


function App() {
    const [inputText , setinputText] = useState("");
    const list = localStorage.getItem('text') 
    const [todos , setTodos] = useState(list ? JSON.parse(list) : []); //task lists لیست تسک های ما
    const [errorText , setErrorText] = useState("");
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return ( 
        <div className={`min-h-screen font-sans tilt-in-top-1`}>
            <NavBar t={t}/>
            <h1 className=' text-gray-200 font-sans text-[64px] sm:text-[106px] flex justify-center pt-[40px] pb-[30px] '>
                {t('header')}
            </h1>            
            <MyInput 
            todos={todos} 
            setTodos={setTodos} 
            inputText={inputText} 
            setinputText={setinputText}
            setErrorText={setErrorText}
            t={t}
            />
            <p className=' text-gray-50 text-4xl flex justify-center  '>{errorText}</p>
            <ToDoList todos={todos} setTodos={setTodos}/>
        </div>
     );
}

export default App;
