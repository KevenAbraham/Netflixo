import './Cadastro.css';
import logo from '../../img/netflixologo.svg';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

export const Cadastro = () => {

    const navigate = useNavigate();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleFecharModal = () => {
        setModalIsOpen(false);
        navigate('/login'); // Redirecione após o fechamento do modal
    };

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            // Verificar se a senha e a confirmação de senha são iguais
            if (password !== confirmPassword) {
                setErrorMessage('A senha e a confirmação de senha não coincidem');
                return;
            }

            const response = await axios.post('https://web-ek0w5pnhkp3k.up-de-fra1-1.apps.run-on-seenode.com/logins', {
                nome,
                email,
                senha: password,
            });

            console.log('Usuário cadastrado com sucesso:', response.data);

            setModalIsOpen(true);

            // Lógica para redirecionar o usuário após o cadastro
        } catch (error) {
            if (error.response) {
                // O servidor retornou uma resposta com um status diferente de 2xx
                if (error.response.status === 400) {
                    // Código específico para lidar com o erro 400 (por exemplo, e-mail duplicado)
                    setErrorMessage('E-mail já cadastrado. Por favor, escolha outro.');
                } else {
                    // Outros códigos de erro do servidor
                    setErrorMessage('Erro ao cadastrar usuário. Tente novamente mais tarde.');
                }
            } else if (error.request) {
                // A solicitação foi feita, mas não recebeu resposta
                setErrorMessage('Erro na solicitação. Tente novamente mais tarde.');
            } else {
                // Erro durante a configuração da solicitação
                setErrorMessage('Erro ao cadastrar usuário. Tente novamente mais tarde.');
            }
        }
    };

    useEffect(() => {
        if (modalIsOpen) {
            // Aguarde 2 segundos antes de redirecionar o usuário para /profile
            setTimeout(handleFecharModal, 2000);
        }
    }, [modalIsOpen]);

    return (
        <div className='signUpContainer'>
            <header>
                <Link to='/'><img src={logo} className='logo' alt='Voltar para a home' /></Link>
            </header>

            <div className='card'>
                <h1>Cadastrar</h1>

                <form onSubmit={handleSignup}>
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Insira a sua senha novamente'
                            name='senha'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                    {/* <Link className='link' to='/profile'> */}
                    <button type='submit'>Cadastrar</button>
                    {/* </Link> */}

                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={handleFecharModal}
                        contentLabel="Cadastro Concluído"
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo do overlay
                            },
                            content: {
                                width: '300px', // Largura do modal
                                height: '300px', 
                                margin: 'auto', // Centralizar o modal horizontalmente
                                padding: '50px', // Espaçamento interno
                                backgroundColor: 'white', // Cor de fundo do modal
                                borderRadius: '8px', // Borda arredondada
                                textAlign: 'center', // Centralizar conteúdo verticalmente
                            },
                        }}
                    >
                        <h2>Cadastro Concluído com Sucesso!</h2>
                        <p>Estamos redirecionando você para a próxima página.</p>
                    </Modal>
                </form>
            </div>
        </div>
    );
}
