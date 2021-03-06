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
import Login from '../../components/login';
//----- GAME LOG -----
import Gamelog from '../../components/gamelog';
import AllLogs from '../../components/alllogs';
import AddLog from '../../components/add-log';
import EditLog from '../../components/edit-log';
//----- STATS -----
import Stats from '../../components/stats';
//----- CATALOGUE -----
import Catalogue from '../../components/catalogue';
import AllConsoles from '../../components/allconsoles';
import AddConsole from '../../components/add-console';
import EditConsole from '../../components/edit-console';
import AllGames from '../../components/allgames';
import AddGame from '../../components/add-game';
import EditGame from '../../components/edit-game';

function App() {

  const [consoles, setConsoles] = useState([]); 
  const [consoleNames, setConsoleNames] = useState([]);
  const [consoleShortnames, setConsoleShortnames] = useState([]);
  const [games, setGames] = useState([]); 
  const [gameTitles, setGameTitles] = useState([]); 
  const [logs, setLogs] = useState([]); 
  const [logsFull, setLogsFull] = useState([]);

  const consoleCollectionRef = useFirestore().collection('console');
  const {data: consoleCollection} = useFirestoreCollectionData(consoleCollectionRef.orderBy("name"), {initialData: [], idField: "id"});

  const gameCollectionRef = useFirestore().collection('game');
  const {data: gameCollection} = useFirestoreCollectionData(gameCollectionRef.orderBy("name"), {initialData: [], idField: "id"});

  const logCollectionRef = useFirestore().collection('log');
  const {data: logCollection} = useFirestoreCollectionData(logCollectionRef.orderBy("date", "desc"), {initialData: [], idField: "id"});
  const {data: logCollection20} = useFirestoreCollectionData(logCollectionRef.orderBy("date", "desc").limit(20), {initialData: [], idField: "id"});
  
  useEffect(() => {
    setConsoles(consoleCollection);
    }, [consoleCollection]);

  useEffect(() => {
    const consoleNames = consoleCollection.map(obj => obj.name);
    setConsoleNames(consoleNames);
  }, [consoleCollection]); 

  useEffect(() => {
    const consoleShortnames = consoleCollection.map(obj => obj.shortname);
    setConsoleShortnames(consoleShortnames);
  }, [consoleCollection]); 

  useEffect(() => {
    setGames(gameCollection);
    }, [gameCollection]);

  useEffect(() => {
    const gameTitles = gameCollection.map(obj => obj.name);
    setGameTitles(gameTitles);
  }, [gameCollection]); 

  useEffect(() => {
    setLogsFull(logCollection);
    }, [logCollection]);

  useEffect(() => {
    setLogs(logCollection20);
    }, [logCollection20]);
      
  const handleConsoleSubmit = (newconsole) => {
    consoleCollectionRef.doc(newconsole.id).set(newconsole);
  }

  const handleGameSubmit = (newgame) => {
    gameCollectionRef.doc(newgame.id).set(newgame);
  }

  const handleLogSubmit = (newlog) => {
    logCollectionRef.doc(newlog.id).set(newlog);
  }

  const handleLogDelete = (id) => {
    logCollectionRef.doc(id).delete();
  }

  return (
    <div className="app">
    <Router>
        <Header />
        <Content>
          <Route exact path="/">
            <Gamelog logData={logs} consoleData={consoles} gameData={games} />
          </Route>
          <Route exact path="/all-logs">
            <AllLogs logDataFull={logsFull} consoleData={consoles} gameData={games} />
          </Route>
          <Route exact path="/add-log">
            <AddLog onLogSubmit={handleLogSubmit} consoleShortnames={consoleShortnames} consoleNames={consoleNames} gameData={games} gameTitles={gameTitles} />
          </Route>
          <Route exact path="/edit-log/:id">
            <EditLog onLogSubmit={handleLogSubmit} onLogDelete={handleLogDelete} logData={logs} consoleShortnames={consoleShortnames} consoleNames={consoleNames} gameData={games} gameTitles={gameTitles} />
          </Route>
          <Route exact path="/catalogue">
            <Catalogue />
          </Route>
          <Route exact path="/catalogue/allconsoles">
            <AllConsoles consoleData={consoles} logData={logs} />
          </Route>
          <Route path="/add-console">
            <AddConsole onConsoleSubmit={handleConsoleSubmit} />
          </Route>
          <Route path="/edit-console/:id">
            <EditConsole onConsoleSubmit={handleConsoleSubmit} consoleData={consoles} />
          </Route>
          <Route exact path="/catalogue/allgames">
            <AllGames gameData={games} consoleData={consoles} consoleShortnames={consoleShortnames} logData={logs} />
          </Route>
          <Route path="/add-game">
            <AddGame onGameSubmit={handleGameSubmit} consoleShortnames={consoleShortnames} />
          </Route>
          <Route path="/edit-game/:id">
            <EditGame onGameSubmit={handleGameSubmit} gameData={games} consoleShortnames={consoleShortnames} />
          </Route>
          <Route path="/stats">
            <Stats logData={logs} gameData={games} consoleData={consoles} gameTitles={gameTitles} consoleShortnames={consoleShortnames} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Content>
        <Menu />
      </Router>
    </div>
  );
}

export default App;
