import './app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../../components/header';
import Content from '../../components/content';
import Menu from '../../components/menu';

function App() {
  return (
    <div className="app">
      <Header />
      <Content>
        <div>Game Log</div>
        <div>Stats</div>
        <div>Catalogue</div>
      </Content>
      <Menu />
    </div>
  );
}

export default App;
