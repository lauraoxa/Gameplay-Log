import './card-game.css';
import icontime from '../../images/icon_time-white-48dp.svg';

function CardGame(props) {
  return(
    <div className="card-game">
      <div className="card-game--left">
        <div className="card-game__title">{props.gameData.name}</div>
        <div className="card-game__format">{props.gameData.format}</div>
      </div>
      <div className="card-game--statistics">
        <div className="card-game--row">
          <div className="card-game__icon"><img src={icontime} alt="" /></div>
          <div className="card-game__playtime">{props.gameData.playedTotalTime}</div>
        </div>
      </div>
      <div className="card-game--edit">
        <p>edit</p>
      </div>
    </div>
  );
}

export default CardGame;