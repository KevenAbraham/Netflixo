import './Cadastro.css';
import logo from '../../img/netflixologo.svg';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

export const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

        try {
            const response = await axios.post('https://web-ek0w5pnhkp3k.up-de-fra1-1.apps.run-on-seenode.com/logins', {
                nome,
                email,
                senha,
            });

            if (response.status === 200) {
                // Cadastro bem-sucedido
                navigate('/profile'); // Redirecione o usuário para uma página de sucesso ou faça o que for necessário
            } else {
                // Trate erros de acordo com a resposta do servidor
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='signUpContainer'>
            <header>
                <Link to='/'><img src={logo} className='logo' alt='Voltar para a home' /></Link>
            </header>

                <div className='card'>
                    <h1>Cadastrar</h1>
                    
                    <form onSubmit={handleSubmit}>
                        <div className='inputsArea'>
                            <input 
                                type='text' 
                                name='nome'
                                placeholder='Insira o seu nome' 
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            <input 
                                type='email' 
                                name='email'
                                placeholder='Insira o seu e-mail' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                                type='password' 
                                placeholder='Insira a sua senha'
                                name='senha'
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        {/* <Link className='link' to='/profile'> */}
                            <button type='submit'>Cadastrar</button>
                        {/* </Link> */}
                    </form>
                </div>
        </div>
    );
}
