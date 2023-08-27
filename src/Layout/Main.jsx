import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <section>
            <Navbar />
            <Outlet />
            <Footer />
        </section>
    );
};

export default Main;