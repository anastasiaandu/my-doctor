import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';
import HomePage from './pages/HomePage/HomePage';
import InputComponent from './components/InputComponent/InputComponent';

function App() {
  return (
    <Router>
      <PageHeader />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/doctor' component={InputComponent}/>
      </Switch>
      <PageFooter />
    </Router>
  );
}

export default App;
