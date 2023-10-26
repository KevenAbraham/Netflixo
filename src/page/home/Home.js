import './Home.css';

function Home() {
    return (
        <div className='homeContainer'>
            <header>
                <button>Entrar</button>
            </header>

            <div className='homeText'>
                <h1>Veja o que há de novo!</h1>
                <p>Assista quando quiser, cancele quando quiser.</p>
                <button>Criar conta agora</button>
            </div>
        </div>
    )
}

export default Home;