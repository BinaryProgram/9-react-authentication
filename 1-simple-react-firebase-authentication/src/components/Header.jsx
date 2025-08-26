import React from 'react';
import Home from './Home';
import Login from './Login';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
            <div className='flex gap-5  justify-center items-center w-2xs'>
               <Link to='/'>Home</Link>
               <Link to='/login'>Login</Link>
            </div>
        
    );
};

export default Header;