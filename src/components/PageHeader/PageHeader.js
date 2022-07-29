import './PageHeader.scss';
import pageLogo from '../../assets/logo/healthcareLogo/Wordmark.png';


const PageHeader = () => {
    return (
        <div className="component">
            <div className="header">
                <img className="header__logo" src={pageLogo} alt='my doctor logo' />
                <div className="header__pages">
                    <a href="/" className="header__pages-link">Home</a>
                    <a href="/" className="header__pages-link">About Us</a>
                    <a href="/" className="header__pages-link">FAQ</a>
                </div>
                <div className="header__login">
                <a href='/' className="header__login-link">Login</a> <p className='header__login-spacer'> / </p> <a href='/' className="header__login-link">Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default PageHeader;