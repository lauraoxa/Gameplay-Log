import './app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//----- MAIN ELEMENTS -----
import Header from '../../components/header';
import Content from '../../components/content';
import Menu from '../../components/menu';
//----- GAME LOG -----
import Gamelog from '../../components/gamelog';
import AllLogs from '../../components/alllogs';
import AddEditLog from '../../components/addedit-log';
//----- STATS -----
import Stats from '../../components/stats';
//----- CATALOGUE -----
import Catalogue from '../../components/catalogue';
import AllConsoles from '../../components/allconsoles';
import AddEditConsole from '../../components/addedit-console';
import AllGames from '../../components/allgames';
import AddEditGame from '../../components/addedit-game';
import Filter from '../../components/filter';
//----- test data -----
import consoleData from '../../tempConsoleData.js';
import gameData from '../../tempGameData.js';

function App() {
  return (
    <div className="app">
    <Router>
        <Header />
        <Content>
          <Route exact path="/">
            <Gamelog consoleData={consoleData} gameData={gameData}/>
          </Route>
          <Route exact path="/all-logs">
            <AllLogs />
          </Route>
          <Route exact path="/edit-log">
            <AddEditLog />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route exact path="/catalogue">
            <Catalogue />
          </Route>
          <Route exact path="/catalogue/allconsoles">
            <AllConsoles consoleData={consoleData} />
          </Route>
          <Route path="/edit-console">
          <AddEditConsole />
        </Route>
          <Route exact path="/catalogue/allgames">
            <AllGames gameData={gameData}/>
          </Route>
          <Route path="/edit-game">
          <AddEditGame />
        </Route>
          <Route exact path="/catalogue/filter">
            <Filter />
          </Route>
        </Content>
        <Menu />
      </Router>
    </div>
  );
}

export default App;
