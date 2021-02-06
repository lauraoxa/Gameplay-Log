import './card-game.css';
import icontime from '../../images/icon_time-white-48dp.svg';

function CardGame() {
  return(
    <div className="card-game">
      <div className="card-game--left">
        <div className="card-game__title">Skylanders: Spyro's Adventure.</div>
        <div className="card-game__format">(PS3)</div>
      </div>
      <div className="card-game--statistics">
        <div className="card-game--row">
          <div className="card-game__icon"><img src={icontime} alt="" /></div>
          <div className="card-game__playtime">2 H 33 MIN</div>
        </div>
      </div>
      <div className="card-game--edit">
        <p>edit</p>
      </div>
    </div>
  );
}

export default CardGame;