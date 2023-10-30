import './Cadastro.css';
import logo from '../../img/netflixologo.svg';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import validator from 'validator';

export const Cadastro = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        watch,
      } = useForm();

      const watchPassword = watch('password');

      const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='signUpContainer'>
            <header>
                <Link to='/'><img src={logo} className='logo' alt='Voltar para a home' /></Link>
            </header>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <h1>Cadastrar</h1>
                    
                    <input type='text' className='input' placeholder='Insira o seu nome' />
                    <input type='text' className='input' placeholder='Insira o seu e-mail' />
                    <input type='password' className='input' placeholder='Insira a sua senha' />

                    <Link className='link' to='/profile'><button onClick={() => handleSubmit(onSubmit)()}>Cadastrar</button></Link>
                </div>
            </form>
        </div>
    );
}