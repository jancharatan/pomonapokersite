import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Team from './pages/Team';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';

const App = () => {
  return (
      <HashRouter>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/team" component={Team} exact />
        <Route path="/sponsors" component={Sponsors} exact />
      </HashRouter>
  );
}

export default App;
