import './app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../../components/header';
import Content from '../../components/content';
import Gamelog from '../../components/gamelog';
import Stats from '../../components/stats';
import Catalogue from '../../components/catalogue';
import AllConsoles from '../../components/allconsoles';
import AllGames from '../../components/allgames';
import Filter from '../../components/filter';
import Menu from '../../components/menu';

function App() {
  return (
    <div className="app">
    <Router>
        <Header />
        <Content>
          <Route exact path="/">
            <Gamelog />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/catalogue">
            <Catalogue />
          </Route>
          <Route path="/allconsoles/">
            <AllConsoles />
          </Route>
          <Route path="/allgames">
            <AllGames />
          </Route>
          <Route path="/filter">
            <Filter />
          </Route>
        </Content>
        <Menu />
      </Router>
    </div>
  );
}

export default App;
