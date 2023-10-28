import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home.js';
import { Login } from '../pages/login/Login.js';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/login"  element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;