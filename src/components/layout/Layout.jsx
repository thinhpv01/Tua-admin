import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from '../Routes';
import Sidebar from '../sidebar/Sidebar';
import TopNav from '../topNav/TopNav';
import ThemeAction from '../../redux/actions/ThemeAction';
import './layout.css';

const Layout = () => {
    const dispatch = useDispatch();
    const themeReducer = useSelector((state) => state.ThemeReducer);
    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');
        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');
        dispatch(ThemeAction.setMode(themeClass));
        dispatch(ThemeAction.setColor(colorClass));
    }, [dispatch]);
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                        <Sidebar {...props} />
                        <div className="layout__content">
                            <TopNav />
                            <div className="layout__content-main">
                                <Routes />
                            </div>
                        </div>
                    </div>
                )}
            />
        </BrowserRouter>
    );
};

export default Layout;
