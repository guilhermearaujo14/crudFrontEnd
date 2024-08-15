import { useNavigate } from 'react-router-dom';
import './style.css';

export function Navbar(){
    const navigate = useNavigate();

    return(
        <nav className="navbar bg-dark">
            <div className="container" title='Voltar ao menu'>
                <a href="#" className='navbar-brand'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-bag-check-fill iconeNavbar" viewBox="0 0 16 16">
                        <path  d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                    </svg>
                </a>
                <ul className='navbar-nav listaPersonalizada'>
                    <li className="nav-item itemPersonalizado"><a onClick={()=>navigate('/')}>Usuário</a></li>
                    <li className="nav-item itemPersonalizado"><a onClick={()=>{navigate('/produtos')}}>Produtos</a></li>
                </ul>
            </div>
                       
        </nav>
    )
}