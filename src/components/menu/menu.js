import './menu.css';
import {Link} from 'react-router-dom';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import ShowChartRoundedIcon from '@material-ui/icons/ShowChartRounded';
import FolderSpecialRoundedIcon from '@material-ui/icons/FolderSpecialRounded';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Menu() {
  return (
    <div className="menu">
      <div className="icons"><Link to="/"><SportsEsportsRoundedIcon fontSize="large" /></Link></div>
      <div className="icons"><Link to="/catalogue"><FolderSpecialRoundedIcon fontSize="large" /></Link></div>
      <div className="icons"><Link to="/stats"><ShowChartRoundedIcon fontSize="large" /></Link></div>
      <div className="icons"><Link to="/login"><AccountBoxIcon fontSize="large" /></Link></div>
    </div>
  );
}

export default Menu;