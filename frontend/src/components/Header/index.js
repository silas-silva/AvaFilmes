import { Link } from 'react-router-dom';
import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import './index.css';

function Header() {
    return (
        <header>
            <nav className='container'>
                <div className='nav-content'>
                    <Link to={"/"}><h1>AvaFilmes</h1></Link>
                    <a href="https://github.com/silas-silva" target="_blank">
                        <GithubIcon />
                        <p>/Silas-Silva</p>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header;