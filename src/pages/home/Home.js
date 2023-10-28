import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className='homeContainer'>
            <header>
                <Link to="/login">
                    <button>Entrar</button>
                </Link>
            </header>

            <div className='homeText'>
                <h1>Veja o que há de novo!</h1>
                <p>Assista quando quiser, cancele quando quiser.</p>
                <Link to="/cadastro">
                    <button>Criar conta agora</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;