import './Content.css';
import logo from '../../img/netflixologo.svg';
import { Link } from 'react-router-dom';

export const Content = () => {
    return (
        <div className='contentContainer'>
            <header>
                <img src={logo} alt='Voltar para a home' />

                <Link to='/content'>
                    <button>Sair</button>
                </Link>
            </header>

            <div className='contentHome'></div>

            <div className='videoContent'>
                <div className='videoCards'>
                    <div className='thumb vid1'></div>
                    <p>Title</p>
                    <button>Assitir</button>
                </div>
                <div className='videoCards'>
                    <div className='thumb vid2'></div>
                    <p>Title</p>
                    <button>Assitir</button>
                </div>
                <div className='videoCards'>
                    <div className='thumb vid3'></div>
                    <p>Title</p>
                    <button>Assitir</button>
                </div>
                <div className='videoCards'>
                    <div className='thumb vid4'></div>
                    <p>Title</p>
                    <button>Assitir</button>
                </div>
                <div className='videoCards'>
                    <div className='thumb vid5'></div>
                    <p>Title</p>
                    <button>Assitir</button>
                </div>
                <div className='videoCards'>
                    <div className='thumb vid6'></div>
                    <p>Title</p>
                    <button>Assitir</button>
                </div>
            </div>
        </div>
    )
}