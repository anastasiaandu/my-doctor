import './PageFooter.scss';
import facebookIcon from '../../assets/icons/facebook-02.png';
import instagramIcon from '../../assets/icons/instagram-02.png';
import twitterIcon from '../../assets/icons/twitter-02.png';
import youtubeIcon from '../../assets/icons/youtube-02.png';


const PageFooter = () => {
    return (
        <div className="footer-component">
            <div className="footer">
                <h3 className="footer__links">2022 All Rights Reserved</h3>
                <h3 className="footer__links">Privacy Policy</h3>
                <h3 className="footer__links">Terms & Conditions</h3>
                <div className="footer__socials">
                    <img className="footer__socials-icon" src={facebookIcon} alt='facebook logo'></img>
                    <img className="footer__socials-icon" src={instagramIcon} alt='instagram logo'></img>
                    <img className="footer__socials-icon" src={twitterIcon} alt='twitter logo'></img>
                    <img className="footer__socials-icon" src={youtubeIcon} alt='youtube logo'></img>
                </div>
            </div>
        </div>
    )
}

export default PageFooter;