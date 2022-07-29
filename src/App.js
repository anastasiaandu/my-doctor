import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';
import HomePage from './pages/HomePage/HomePage';
import FindDoctorPage from './pages/FindDoctorPage/FindDoctorPage';

function App() {
  return (
    <Router>
      <PageHeader />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/doctor' component={FindDoctorPage}/>
      </Switch>
      <PageFooter />
    </Router>
  );
}

export default App;
