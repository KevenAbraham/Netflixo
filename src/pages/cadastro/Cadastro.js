import './Cadastro.css';
import logo from '../../img/netflixologo.svg';
import { Link } from 'react-router-dom';

export const Cadastro = () => {
    return (
        <div className='signUpContainer'>
            <header>
                <Link to='/'><img src={logo} className='logo' alt='Voltar para a home' /></Link>
            </header>

            <form>
                <div className='card'>
                    <h1>Cadastrar</h1>
                    
                    <input type='text' className='input' placeholder='Insira o seu nome' />
                    <input type='text' className='input' placeholder='Insira o seu e-mail' />
                    <input type='password' className='input' placeholder='Insira a sua senha' />

                    <Link className='link' to='/profile'><button>Cadastrar</button></Link>
                </div>
            </form>
        </div>
    );
}