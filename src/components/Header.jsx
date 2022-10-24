import { Link } from 'react-router-dom'

export const Header = () => {

    // We can use CSS inside JSX like ths
    const linkStyle = {
        margin: "0 10px",
        fontWeight: "bold",
        textDecoration: "none",
        color: "#000"
    }

    return (
        <header>
            <nav>
                <div className="navbar-logo">
                    <h3>React Router Tutorial</h3>
                </div>
                <div className="navbar-list">
                    <ul>
                        <Link to={'/'} style={ linkStyle }>Home</Link>
                        <Link to={'/about'} style={ linkStyle }>About</Link>
                        <Link to={'/services'} style={ linkStyle }>Services</Link>
                        <Link to={'/contact'} style={ linkStyle }>Contact</Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
