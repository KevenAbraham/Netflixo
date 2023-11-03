import './Login.css';
import logo from '../../img/netflixologo.svg';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export const Login = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm();

    console.log({ errors });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='loginContainer'>
            <header>
                <Link to='/'><img src={logo} className='logo' alt='Voltar para a home' /></Link>
            </header>

            <div className='card'>
                <h1>Entrar</h1>

                <div className='inputsArea'>
                    <input
                        className={errors?.email && "input-error"}
                        type='email'
                        placeholder='Insira o seu e-mail'
                        {...register('email', { required: true })}
                    />
                    {errors?.email?.type == 'required' && 
                        <p className="error-message">
                            {errors?.email}E-mail é obrigatório.
                        </p>
                    }
                    <input 
                        className={errors?.password && "input-error"}
                        type='password' 
                        placeholder='Insira a sua senha'
                        {...register('password', { required: true, minLength: 7 })}
                    />
                    {errors?.password?.type == 'minLength' && 
                        <p className="error-message">
                            {errors?.email}A senha deve ter, pelo menos, 7 caracteres.
                        </p>
                    }
                </div>

                {/* <Link className='link' to='/profile'> */}
                    <button onClick={() => handleSubmit(onSubmit)}>Entrar</button>
                {/* </Link> */}

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