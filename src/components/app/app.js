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
import AddConsole from '../../components/add-console';
import EditConsole from '../../components/edit-console';
import AllGames from '../../components/allgames';
import AddGame from '../../components/add-game';
import EditGame from '../../components/edit-game';
import Filter from '../../components/filter';

function App() {

  const [consoles, setConsoles] = useState([]); 
  const [games, setGames] = useState([]); 
  const [logs, setLogs] = useState([]); 
  

  const consoleCollectionRef = useFirestore().collection('console');
  const {data: consoleCollection} = useFirestoreCollectionData(consoleCollectionRef.orderBy("name"), {initialData: [], idField: "id"});

  const gameCollectionRef = useFirestore().collection('game');
  const {data: gameCollection} = useFirestoreCollectionData(gameCollectionRef, {initialData: [], idField: "id"});

  const logCollectionRef = useFirestore().collection('log');
  const {data: logCollection} = useFirestoreCollectionData(logCollectionRef.orderBy("date", "desc"), {initialData: [], idField: "id"});
  const {data: logCollection20} = useFirestoreCollectionData(logCollectionRef.orderBy("date", "desc").limit(20), {initialData: [], idField: "id"});
  
  useEffect(() => {
    setConsoles(consoleCollection);
    }, [consoleCollection]);

  useEffect(() => {
    setGames(gameCollection);
    }, [gameCollection]);

    useEffect(() => {
      setLogs(logCollection);
      }, [logCollection]);

  const handleConsoleSubmit = (newconsole) => {
    consoleCollectionRef.doc(newconsole.id).set(newconsole);
  }

  const handleGameSubmit = (newgame) => {
    gameCollectionRef.doc(newgame.id).set(newgame);
  }

  const handleLogDelete = (id) => {
    logCollectionRef.doc(id).delete();
  }
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
            <Gamelog consoleData={consoles} gameData={games} />
          </Route>
          <Route exact path="/all-logs">
            <AllLogs allLogData={logCollection} />
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
            <AllConsoles consoleData={consoles} />
          </Route>
          <Route path="/add-console">
            <AddConsole onConsoleSubmit={handleConsoleSubmit} />
          </Route>
          <Route path="/edit-console/:id">
            <EditConsole onConsoleSubmit={handleConsoleSubmit} consoleData={consoles} />
          </Route>
          <Route exact path="/catalogue/allgames">
            <AllGames gameData={games} />
          </Route>
          <Route path="/add-game">
            <AddGame onGameSubmit={handleGameSubmit} consoleData={consoles} />
          </Route>
          <Route path="/edit-game/:id">
            <EditGame onGameSubmit={handleGameSubmit} gameData={games} consoleData={consoles} />
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
