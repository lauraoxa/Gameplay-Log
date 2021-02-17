import './app.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//----- Firebase -----
import {useFirestore, useFirestoreCollectionData} from 'reactfire';
import 'firebase/firestore';
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

  const [consoles, setConsoles] = useState([]); 
  const [games, setGames] = useState([]); 
  const [logs, setLogs] = useState([]); 
  

  const consoleCollectionRef = useFirestore().collection('console');
  const {data: consoleCollection} = useFirestoreCollectionData(consoleCollectionRef, {initialData: []});

  const gameCollectionRef = useFirestore().collection('game');
  const {data: gameCollection} = useFirestoreCollectionData(gameCollectionRef, {initialData: []});

  const logCollectionRef = useFirestore().collection('log');
  const {data: logCollection} = useFirestoreCollectionData(logCollectionRef, {initialData: []});

  
  useEffect(() => {
    setConsoles(consoleCollection);
    }, [consoleCollection]);

  useEffect(() => {
    setGames(gameCollection);
    }, [gameCollection]);

    useEffect(() => {
      setLogs(logCollection);
      }, [logCollection]);

  /*
  
  useEffect(() => {
    const types = typeCollection.map(obj => obj.type);
    setTypelist(types);
  }, [typeCollection]); 
  */

  return (
    <div className="app">
    <Router>
        <Header />
        <Content>
          <Route exact path="/">
            <Gamelog consoleData={consoleCollection} gameData={gameCollection} />
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
            <AllConsoles consoleData={consoleCollection} />
          </Route>
          <Route path="/edit-console">
          <AddEditConsole />
        </Route>
          <Route exact path="/catalogue/allgames">
            <AllGames gameData={gameCollection} />
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
