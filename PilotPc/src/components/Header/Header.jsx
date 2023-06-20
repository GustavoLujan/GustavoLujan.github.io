import './Header.scss'
import logo from '../../assets/logo.PNG'
import { Link } from 'react-router-dom'
import Buscador from '../Buscador/Buscador'

const Header = ({variant = false}) => {

    return (
        <header className={variant ? "header header-v" : "header"}>
            <div className="container">
                <img src={logo} alt='logo'/>

                <nav className="nav">
                    <Link className="link" to="/">Inicio</Link>
                    <Link className="link" to="/productos/Monitores">Monitores</Link>
                    <Link className="link" to="/productos/Sillas Gamer">Sillas Gamer</Link>
                    <Link className="link" to="/productos/Notebooks">Notebooks</Link>
                    <Link className="link" to="/productos/Pc Gamer">Pc Gamer</Link>
                    <Buscador />
                </nav>
            </div>
        </header>
    )
}

export default Header