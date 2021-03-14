import './card-log.css';
import {Link} from 'react-router-dom';
import icongame from '../../images/icon_videogame-white-48dp.svg';
import icondate from '../../images/icon_event-white-48dp.svg';
import icontime from '../../images/icon_time-white-48dp.svg';

/* generates a single LOG card */

function CardLog(props) {

  //working code - counts "12:00" to "13:00" into millisecond, then displays HH:MM
  let sessionMin, sessionHour, sessionFull;

  if (props.logData.sessionStart && props.logData.sessionEnd) {
    const sessionStart = props.logData.sessionStart;
    const sessionEnd = props.logData.sessionEnd;
    const start = sessionStart.split(':');
    const end = sessionEnd.split(':');
    const startToMS = (+start[0]) * 60 * 60 * 1000 + (+start[1]) * 60 * 1000;
    const endToMS = (+end[0]) * 60 * 60 * 1000 + (+end[1]) * 60 * 1000;
    const sessionMS = (endToMS-startToMS);

    sessionHour = Math.floor(sessionMS/1000/60/60);
    if (sessionMS%3600000 > 0) {
      sessionMin = Math.floor((sessionMS - (sessionHour*1000*60*60) )/1000/60)}
      else {sessionMin = "00"}

    sessionFull = (sessionHour + ":" + sessionMin);  
  }

  return (
    <div className="card-log">
      <div className="card-log--left">
        <div className="card-log__title">{props.logData.name}</div>
      </div>
      <div className="card-log--statistics">
        <div className="card-log--row">
          <div className="card-log__icon"><img src={icongame} alt="" /></div>
          <div className="card-log__console">{props.logData.console}</div>
        </div>
        <div className="card-log--row">
          <div className="card-log__icon"><img src={icondate} alt="" /></div>
          <div className="card-log__date">{props.logData.date}</div>
        </div>
        <div className="card-log--row">
          <div className="card-log__icon"><img src={icontime} alt="" /></div>
          <div className="card-log__playtime">{sessionFull}</div>
        </div>
      </div>
      <div className="card-log--edit">
        <Link to={"/edit-log/"+props.logData.id}><p>edit</p></Link>
      </div>
    </div>
  );
}

export default CardLog;