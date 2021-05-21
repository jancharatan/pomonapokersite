import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';

const App = () => {
  return (
      <HashRouter>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/team" component={Team} exact />
        <Route path="/sponsors" component={Sponsors} exact />
      </HashRouter>
  );
}

export default App;
