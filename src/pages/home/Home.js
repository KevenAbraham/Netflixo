import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className='homeContainer'>
            <header>
                <Link to="/profile">
                    <button>Assistir agora</button>
                </Link>
            </header>

            <div className='homeText'>
                <h1>Veja o que há de novo!</h1>
                <p>Gostaria de receber e-mails sobre lançamentos futuros?</p>
                <Link to="/cadastro">
                    <button>Gostaria!</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;