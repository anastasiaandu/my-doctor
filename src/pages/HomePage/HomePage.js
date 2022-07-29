import './HomePage.scss';
// import homePage from '../../assets/images/home.png';


const HomePage = () => {
    return (
        <main className='home'>
            {/* <img src={homePage} alt='home page' className='home__page'/> */}
            <div className='home__left'>
                <h1 className='home__find'>
                    Find a doctor who speaks your language
                </h1>
                <p className='home__summary'>
                    We find doctors who speak your languages.
                    With this website, you can connect with the right doctor for your needs.
                </p>
            </div>
            <div className='home__right'>
                <p className='home__popular'>
                    Select from polupar languages:
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
                    <button className='home__button'>continue</button>
                </form>
            </div>
        </main>
    );
};

export default HomePage;