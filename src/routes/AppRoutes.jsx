import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home.js';
import { Cadastro } from '../pages/cadastro/Cadastro.js';
import { Profile } from '../pages/chooseProfile/Profile.js';
import { Content } from '../pages/content/Content.js';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/cadastro"  element={<Cadastro />} />
                <Route path="/profile"  element={<Profile />} />
                <Route path="/content"  element={<Content />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;