import './Login.css';
import logo from '../../img/netflixologo.svg';

export const Login = () => {
    return (
        <div className='loginContainer'>
            <header>
                <img src={logo} className='logo' alt='Voltar para a home' />
            </header>

            <div className='card'>
                <h1>Entrar</h1>
                
                <input type='text' className='input' placeholder='Insira o seu e-mail' />
                <input type='password' className='input' placeholder='Insira a sua senha' />

                <button>Entrar</button>

                <div className='aboveDButton'>
                    <div className='checkbox'>
                        <input type='checkbox' />
                        <label>Lembrar depois?</label>
                    </div>
                    <p>Esqueceu a senha?</p>
                </div>

                <p className='new'>Não tem conta? Que tal <span>assinar agora?</span></p>

            </div>
        </div>
    )
}