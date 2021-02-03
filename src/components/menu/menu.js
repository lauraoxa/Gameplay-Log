import './menu.css';
import {Link} from 'react-router-dom';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import ShowChartRoundedIcon from '@material-ui/icons/ShowChartRounded';
import FolderSpecialRoundedIcon from '@material-ui/icons/FolderSpecialRounded';

function Menu() {
  return (
    <div className="menu">
      <div className="icons"><SportsEsportsRoundedIcon fontSize="large" /></div>
      <div className="icons"><ShowChartRoundedIcon fontSize="large" /></div>
      <div className="icons"><FolderSpecialRoundedIcon fontSize="large" /></div>
    </div>
  );
}

export default Menu;