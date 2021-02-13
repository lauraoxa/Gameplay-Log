import './addedit-game.css';
import {Link} from 'react-router-dom';
import iconclose from '../../images/icon_close-black-48dp.svg';
import {Button} from '../../elements/buttons';

function AddEditGame() {

  return (
    <div className="form--game">
      <div className="form--game__icon">
        <Link to="/catalogue/allgames"><img src={iconclose} alt="" /></Link>
      </div>
      <div className="form--game__row">
        <div>
          <label htmlFor="name">Game title:</label>
        </div>
        <div>
          <input type="text" name="name" />
        </div>
      </div>

      <div className="form--game__row">
        <div>
          <label htmlFor="format">Game platform:</label>
        </div>
        <div>
          <select name="format" >
            <option>select...</option>
          </select>
        </div>
      </div>

      <div className="form--game__row">
        <div className="form--game__storage">
          <input type="radio" name="storage" id="disc" value="disc" />
          <label htmlFor="disc">disc/cart</label>
          <input type="radio" name="storage" id="digital" value="digital" />
          <label htmlFor="digital">digital</label>
        </div>
      </div>

      <div className="form--game__row">
        <div>
          <label htmlFor="playableOn">Playable on:</label>
        </div>
        <div>
          <select name="playableOn" id="playableOn" multiple>
            <option>select playable format...</option>
          </select>
        </div>
      </div>

      <div className="form--game__buttons">
        <div><Button primary>{"save"}</Button></div>
      </div>
    </div>
  );
}

export default AddEditGame;