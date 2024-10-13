import React from 'react';
import { Link } from 'react-router-dom';
function LoginPage() {
    return ( 
        <div className='min-h-screen'>
            <h1>Login Page</h1>
            <form action="">
                <Link to='/ToDoApp'>Login</Link>
            </form>
        </div>
     );
}

export default LoginPage;
