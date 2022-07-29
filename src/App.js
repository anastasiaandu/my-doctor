import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import FindDoctorPage from './pages/FindDoctorPage/FindDoctorPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/upload' component={FindDoctorPage}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
