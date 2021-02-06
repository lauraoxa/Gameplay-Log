import './card-console.css';
import icontime from '../../images/icon_time-white-48dp.svg';

function CardConsole() {
  return(
    <div className="card-console">
      <div className="card-console--left">
        <div className="card-console__title">Nintendo Game Boy Color</div>
      </div>
      <div className="card-console--statistics">
        <div className="card-console--row">
          <div className="card-console__shortname">shortname:</div>
          <div className="card-console__console">GBC</div>
        </div>
        <div className="card-console--row">
          <div className="card-console__icon"><img src={icontime} alt="" /></div>
          <div className="card-console__playtime">563 H 07 MIN</div>
        </div>
      </div>
      <div className="card-log--edit">
        <p>edit</p>
      </div>
    </div>
  );
}

export default CardConsole;