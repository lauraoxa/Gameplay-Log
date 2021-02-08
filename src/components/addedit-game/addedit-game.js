import './addedit-game.css';
import iconclose from '../../images/icon_close-black-48dp.svg';
import {Button, ButtonSec} from '../../elements/buttons';

function AddEditGame() {

  return (
    <div className="form">
      <div className="form--icon">
        <img src={iconclose} alt="" />
      </div>
      <div className="form--row">
        <div className="form--text__big">
          <div>
            <label htmlFor="name">Game title:</label>
          </div>
        </div>
      </div>
      <div className="form--row">
        <div>
          <input type="text" name="name" />
        </div>
        <div className="form--text__small">
        <div className="form--row__radioselect">
          <input type="radio" name="storage" id="disc" value="disc" />
          <label htmlFor="disc">disc/cart</label>
          <input type="radio" name="storage" id="digital" value="digital" />
          <label htmlFor="digital">digital</label>
        </div>
      </div>
      </div>
      <div className="form--row">
        <div className="form--text__big">
          <div>
            <label htmlFor="format">Game platform:</label>
          </div>
        </div>
        <div className="form--text__medium">
          <label htmlFor="playableOn">Playable on:</label>
        </div>
      </div>
      <div className="form--row">
        <div>
          <select name="format" >
            <option>select...</option>
          </select>
        </div>
        <div>
          <select name="playableOn" id="playableOn" multiple>
            <option>select playable format...</option>
          </select>
        </div>
      </div>
      <div className="form--buttons">
        <div><Button primary>{"save"}</Button></div>
        <div><ButtonSec secondary>{"delete"}</ButtonSec></div>
      </div>
    </div>
  );
}

export default AddEditGame;