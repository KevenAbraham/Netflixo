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
                    
                    <div className='inputsArea'>
                        <input 
                            type='text' 
                            placeholder='Insira o seu nome' 
                        />
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
                        <button>Cadastrar</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}