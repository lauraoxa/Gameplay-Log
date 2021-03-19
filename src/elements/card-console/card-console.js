import './card-console.css';
import {Link} from 'react-router-dom';
import icontime from '../../images/icon_time-white-48dp.svg';

/* generates a single CONSOLE card */

function CardConsole(props) {

  const logs = props.logData;
  const consoles = props.consoleData;

  var sessionMin, sessionHour;

    let total = 0;
    logs.forEach(logitem => {
      if (logitem.console === consoles.shortname) {
        total += logitem.sessionMS
      }
    })

    const msToHoursMins = (ms) => {
      let sessionFull;
      sessionHour = Math.floor(ms/1000/60/60);
      if (ms%3600000 > 32400000) {
        sessionMin = Math.floor((ms - (sessionHour*1000*60*60) )/1000/60);
      } else {
        sessionMin = "0" + Math.floor((ms - (sessionHour*1000*60*60) )/1000/60);
      }
       return sessionFull = (sessionHour + ":" + sessionMin);
    }
  
  const totalPlayedTime = msToHoursMins(total);
  
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
          <div className="card-console__playtime">{totalPlayedTime}</div>
        </div>
      </div>
      <div className="card-log--edit">
      <Link to={"/edit-console/"+props.consoleData.id}><p>edit</p></Link>
      </div>
    </div>
  );
}

export default CardConsole;