import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home.js';
import { Login } from '../pages/login/Login.js';
import { Cadastro } from '../pages/cadastro/Cadastro.js';
import { Profile } from '../pages/chooseProfile/Profile.js';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/login"  element={<Login />} />
                <Route path="/cadastro"  element={<Cadastro />} />
                <Route path="/profile"  element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;