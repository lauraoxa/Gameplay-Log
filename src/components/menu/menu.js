import './menu.css';
import {Link} from 'react-router-dom';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import ShowChartRoundedIcon from '@material-ui/icons/ShowChartRounded';
import FolderSpecialRoundedIcon from '@material-ui/icons/FolderSpecialRounded';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded'

function Menu() {
  return (
    <div className="menu">
      <div><Link to="/"><SportsEsportsRoundedIcon fontSize="large" /></Link></div>
      <div><Link to="/catalogue"><FolderSpecialRoundedIcon fontSize="large" /></Link></div>
      <div><Link to="/stats"><ShowChartRoundedIcon fontSize="large" /></Link></div>
      <div><Link to="/user"><AccountBoxIcon fontSize="large" /></Link></div>
      <div><Link to="/info"><InfoRoundedIcon fontSize="large" /></Link></div>
    </div>
  );
}

export default Menu;