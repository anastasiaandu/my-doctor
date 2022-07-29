import './Header.scss';


const Header = () => {
    return (
        <Header>
            <h1 className="header__logo">Logo</h1>
            <div className="header__pages">
                <a href="/" className="header__pages-link">Home</a>
                <a href="/" className="header__pages-link">About Us</a>
                <a href="/" className="header__pages-link">FAQ</a>
            </div>
            <div className="header__login-signup">
            <a href='/' className="header__login">Login</a> <p>/</p> <a href='/' className="header__login">Sign up</a>
            </div>
        </Header>
    )
}

export default Header;