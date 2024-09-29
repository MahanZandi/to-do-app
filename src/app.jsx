import { React } from 'react';
import '../src/index.css';
import '../src/style.css';
import Header from './header';
import MyInput from './myInput';

function App() {
    return ( 
        <div className='min-h-screen bg-gradient-to-r from-neutral-600 to-cyan-950'>
            <Header/>
            <MyInput/>
            
        </div>
     );
}

export default App;
