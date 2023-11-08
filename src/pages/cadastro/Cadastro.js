import './Cadastro.css';
import logo from '../../img/netflixologo.svg';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

export const Cadastro = () => {
    const navigate = useNavigate();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleCadastroConcluido = () => {
        setModalIsOpen(true);
    };

    const handleFecharModal = () => {
        setModalIsOpen(false);
        navigate('/profile'); // Redirecione após o fechamento do modal
    };

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://web-ek0w5pnhkp3k.up-de-fra1-1.apps.run-on-seenode.com/logins', {
                nome,
                email,
                senha,
            });

            if (response.status === 201) {
                // Cadastro bem-sucedido
                // navigate('/profile'); // Redirecione o usuário para uma página de sucesso ou faça o que for necessário
                handleCadastroConcluido();
            } else {
                // Trate erros de acordo com a resposta do servidor
            }
        } catch (error) {
            console.error(error);
        }
    }

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
