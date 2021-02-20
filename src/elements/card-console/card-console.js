import './card-console.css';
import {Link} from 'react-router-dom';
import icontime from '../../images/icon_time-white-48dp.svg';

function CardConsole(props) {

  return (
    <div className="card-console">
      <div className="card-console--left">
        <div className="card-console__title">{props.consoleData.name}</div>
      </div>
      <div className="card-console--statistics">
        <div className="card-console--row">
          <div className="card-console__shortname">shortname:</div>
          <div className="card-console__console">{props.consoleData.shortname}</div>
        </div>
        <div className="card-console--row">
          <div className="card-console__icon"><img src={icontime} alt="" /></div>
          <div className="card-console__playtime">{props.consoleData.playedTotalTime}</div>
        </div>
      </div>
      <div className="card-log--edit">
      <Link to={"/edit-console/"+props.consoleData.id}><p>edit</p></Link>
      </div>
    </div>
  );
}

export default CardConsole;