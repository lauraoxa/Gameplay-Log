import './card-game.css';
import {Link} from 'react-router-dom';
import icontime from '../../images/icon_time-white-48dp.svg';

function CardGame(props) {

  const logs = props.logData;
  const games = props.gameData;

  var sessionMin, sessionHour, sessionFull, msCount;

  const groupedMS = () => {
    for (let i=0; logs.length > i; i++) {
      if (games.name === logs.name) {
      msCount += logs[i]["sessionMS"];
      } return msCount;
    }
  }

  const msToHoursMins = (ms) => {
    sessionHour = Math.floor(ms/1000/60/60);
    if (ms%3600000 > 0) {
      sessionMin = Math.floor((ms - (sessionHour*1000*60*60) )/1000/60);}
      else {sessionMin = "00";}
    return sessionFull = (sessionHour + ":" + sessionMin);
  }
  
  const totalPlayedTime = msToHoursMins(groupedMS);

  //const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //if (games.name === logs.name) {logs()



  return (
    <div className="card-game">
      <div className="card-game--left">
        <div className="card-game__title">{props.gameData.name}</div>
        <div className="card-game__format">{props.gameData.format} ({props.gameData.storage})</div>
      </div>
      <div className="card-game--statistics">
        <div className="card-game--row">
          <div className="card-game__icon"><img src={icontime} alt="" /></div>
          <div className="card-game__playtime">{totalPlayedTime}</div>
        </div>
      </div>
      <div className="card-game--edit">
      <Link to={"/edit-game/"+props.gameData.id}><p>edit</p></Link>
      </div>
    </div>
  );
}

export default CardGame;