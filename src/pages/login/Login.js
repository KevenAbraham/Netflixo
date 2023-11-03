import './Login.css';
import logo from '../../img/netflixologo.svg';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className='loginContainer'>
            <header>
                <Link to='/'><img src={logo} className='logo' alt='Voltar para a home' /></Link>
            </header>

            <div className='card'>
                <h1>Entrar</h1>

                <div className='inputsArea'>
                    <input
                        type='email'
                        placeholder='Insira o seu e-mail'
                    />
                    <input 
                        type='password' 
                        placeholder='Insira a sua senha'
                    />
                </div>

                <Link className='link' to='/profile'>
                    <button>Entrar</button>
                </Link>

                <div className='aboveDButton'>
                    <div className='checkbox'>
                        <input type='checkbox' />
                        <label>Lembrar depois?</label>
                    </div>
                    <p>Esqueceu a senha?</p>
                </div>

                <p className='new'>Não tem conta? Que tal <Link to='/cadastro'><span>assinar agora?</span></Link></p>

            </div>
        </div>
    )
}