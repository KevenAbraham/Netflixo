import './Cadastro.css';
import logo from '../../img/netflixologo.svg';


export const Cadastro = () => {
    return (
        <div className='signUpContainer'>
            <header>
                <img src={logo} className='logo' alt='Voltar para a home' />
            </header>

            <div className='card'>
                <h1>Cadastrar</h1>
                
                <input type='text' className='input' placeholder='Insira o seu nome' />
                <input type='text' className='input' placeholder='Insira o seu e-mail' />
                <input type='password' className='input' placeholder='Insira a sua senha' />

                <button>Cadastrar</button>
            </div>
        </div>
    );
}