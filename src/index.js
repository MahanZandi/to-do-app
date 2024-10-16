import HomePage from './HomePage.jsx';
import LoginPage from './loginPage.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import '../src/style.css';
import './i18n.jsx';
import { BrowserRouter , Routes , Route , Navigate} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/HomePage' element={<HomePage/>}/>
            <Route path='/LoginPage' element={<Navigate replace to="/"/>}/>
            <Route path='/' element={<LoginPage/>}/>
        </Routes>
    </BrowserRouter>
    , document.querySelector('#root'));