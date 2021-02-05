import './card-game.css';
import icongame from '../../images/icon_videogame-white-48dp.svg';
import icondate from '../../images/icon_event-white-48dp.svg';
import icontime from '../../images/icon_time-white-48dp.svg';

function CardGame() {
  return(
    <div className="card-log">
      <div className="card-log--left">
        <div className="card-log__title">Skylanders: Spyro's Adventure.</div>
        <div className="card-log__format">(PS3)</div>
      </div>
      <div className="card-log--statistics">
        <div className="card-log--row">
          <div className="card-log__icon"><img src={icongame} alt="" /></div>
          <div className="card-log__console">PlayStation 3</div>
        </div>
        <div className="card-log--row">
          <div className="card-log__icon"><img src={icondate} alt="" /></div>
          <div className="card-log__date">Jan-28-2021</div>
        </div>
        <div className="card-log--row">
          <div className="card-log__icon"><img src={icontime} alt="" /></div>
          <div className="card-log__playtime">2 H 33 MIN testi</div>
        </div>
      </div>
      <div className="card-log--edit">
        <p>edit</p>
      </div>
    </div>
  );
}

export default CardGame;