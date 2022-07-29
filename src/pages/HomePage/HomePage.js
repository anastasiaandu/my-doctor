import './HomePage.scss';
import underline from '../../assets/images/Vector.png'
import { Link } from 'react-router-dom';
// import homePage from '../../assets/images/home.png';


const HomePage = () => {
    return (
        <>
            <main className='home'>
                {/* <img src={homePage} alt='home page' className='home__page'/> */}
                <div className='home__left'>
                    <h1 className='home__find'>
                        Find a doctor who speaks <span className='home__language'>your language</span>
                    </h1>
                    <img src={underline} alt='underline' className='home__underline'/>
                    <p className='home__summary'>
                        We find doctors who speak your languages.
                        With this website, you can connect with the right doctor for your needs.
                    </p>
                </div>
                <div className='home__right'>
                    <p className='home__popular'>
                        Select from popular languages:
                    </p>
                    <ul className='home__list'>
                        <li className='home__item'>English</li>
                        <li className='home__item'>Français</li>
                        <li className='home__item'>中文</li>
                        <li className='home__item'>粤语</li>
                        <li className='home__item'>Español</li>
                        <li className='home__item'>Yoruba</li>
                    </ul>
                    <form className='home__form'>
                        <label className='home__label'>
                            Don’t see your language?
                        </label>
                        <input 
                            type="text" 
                            placeholder="search for more languages" 
                            className='home__input'
                            name="homeInput" 
                        />
                        <button className='home__button'><Link to='/doctor' className='home__continue'>Continue</Link></button>
                    </form>
                </div>
            </main>
        </>
        
    );
};

export default HomePage;