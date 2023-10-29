import './Profile.css';
import logo from '../../img/netflixologo.svg';
import { Link } from 'react-router-dom';

export const Profile = () => {
    return (
        <div className='profileContainer'>
            <header>
                <img src={logo} alt='Voltar para a home' />

                <Link to='/content'>
                    <button>Sair</button>
                </Link>
            </header>

            <h1>Quem vai assistir?</h1>

            <div className='content'>
                <Link to='/content'>
                    <div className='contentCard'>
                        <div className='pfp calabreso'></div>
                        <p>Calabreso</p>
                    </div>
                </Link>
                <Link to='/content'>
                    <div className='contentCard'>
                        <div className='pfp samsungo'></div>
                        <p>Samsungo</p>
                    </div>
                </Link>
                <Link to='/content'>
                    <div className='contentCard'>
                        <div className='pfp tilapio'></div>
                        <p>Tilápio</p>
                    </div>
                </Link>
                <Link to='/'>
                    <div className='contentCard'>
                        <div className='pfp linguico'></div>
                        <p>Linguiço</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}