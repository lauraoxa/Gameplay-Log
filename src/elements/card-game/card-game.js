import './card-game.css';
import {Link} from 'react-router-dom';
import icontime from '../../images/icon_time-white-48dp.svg';

function CardGame(props) {

 /* let sessionMS, sessionMin, sessionHour, sessionFull;

  if (props.logData.name === props.gameData.name) {
    const sessionStart = props.logData.sessionStart;
    const sessionEnd = props.logData.sessionEnd;
    const start = sessionStart.split(':');
    const end = sessionEnd.split(':');
    const startToMS = (+start[0]) * 60 * 60 * 1000 + (+start[1]) * 60 * 1000;
    const endToMS = (+end[0]) * 60 * 60 * 1000 + (+end[1]) * 60 * 1000;
    sessionMS = (endToMS-startToMS);
        
    sessionHour = Math.floor(sessionMS/1000/60/60);
    if (sessionMS%3600000 > 0) {
      sessionMin = Math.floor((sessionMS - (sessionHour*1000*60*60) )/1000/60)}
      else {sessionMin = "00"}

    sessionFull = (sessionHour + ":" + sessionMin);
    
    playedTotalTime = (groupedSession, game) => {
      const index = groupedSession.findIndex( arrayGame => arrayGame.name === game.name );
      if (index >= 0) {groupedSession[index].sessionFull = groupedSession[index].sessionFull + props.logData.sessionFull;}
    } 
 
  } */

  return (
    <div className="card-game">
      <div className="card-game--left">
        <div className="card-game__title">{props.gameData.name}</div>
        <div className="card-game__format">{props.gameData.format} ({props.gameData.storage})</div>
      </div>
      <div className="card-game--statistics">
        <div className="card-game--row">
          <div className="card-game__icon"><img src={icontime} alt="" /></div>
          <div className="card-game__playtime">sessionFull</div>
        </div>
      </div>
      <div className="card-game--edit">
      <Link to={"/edit-game/"+props.gameData.id}><p>edit</p></Link>
      </div>
    </div>
  );
}

export default CardGame;