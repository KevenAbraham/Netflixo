import './Content.css';
import logo from '../../img/netflixologo.svg';
import { Link } from 'react-router-dom';

export const Content = () => {
    return (
        <div className='contentContainer'>
            <header>
                <img src={logo} alt='Voltar para a home' />

                <Link className='link' to='/'>
                    <button>Sair</button>
                </Link>
            </header>

            <div className='contentHome'>
                <div className='textArea'> 
                    <h1>CALMA AI NETFLIXO</h1>
                    <p>Confira o novo lançamento</p>
                    <Link className='link' to='https://www.youtube.com/watch?v=xw5oyJhsRKo'><button>Conferir</button></Link>
                </div>
            </div>

            <div className='videoContent'>
                <div className='videoCards'>
                    <div className='thumb vid1'></div>
                    <p>Calma Madame</p>
                    <a href='https://www.youtube.com/watch?v=wh-NyCsIUBc&t=1s'><button>Assistir</button></a>
                </div>
                <div className='videoCards'>
                    <div className='thumb vid2'></div>
                    <p>Calma ai Lisbelo</p>
                    <a href='https://www.youtube.com/watch?v=kZwH4eXjx3I'><button>Assistir</button></a>
                </div>
                <div className='videoCards'>
                    <div className='thumb vid3'></div>
                    <p>Calma ai Lamparino</p>
                    <a href='https://www.youtube.com/watch?v=T6aKnvQnWfY'><button>Assistir</button></a>
                </div>
                <div className='videoCards'>
                    <div className='thumb vid4'></div>
                    <p>Relaxa Mosquito</p>
                    <a href='https://www.youtube.com/watch?v=AwVdngHssto'><button>Assistir</button></a>
                </div>
                <div className='videoCards'>
                    <div className='thumb vid5'></div>
                    <p>Olha o bronze do pai</p>
                    <a href='https://www.youtube.com/watch?v=B2T6XDrDaaQ'><button>Assistir</button></a>
                </div>
                <div className='videoCards'>
                    <div className='thumb vid6'></div>
                    <p>Ensinando Dorival</p>
                    <a href='https://www.youtube.com/watch?v=PQFLHzuag1E'><button>Assistir</button></a>
                </div>
            </div>
        </div>
    )
}