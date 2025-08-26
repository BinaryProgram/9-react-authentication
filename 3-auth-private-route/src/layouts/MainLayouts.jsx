import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const MainLayouts = () => {
    return (
        <>
            <Nav/>
            <div className='flex justify-center mt-5'>

            <Outlet/>
            </div>
        </>
    );
};

export default MainLayouts;