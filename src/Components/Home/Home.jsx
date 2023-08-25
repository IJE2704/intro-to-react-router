import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-green-400'>this is home page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;