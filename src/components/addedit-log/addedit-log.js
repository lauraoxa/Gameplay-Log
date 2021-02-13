import './addedit-log.css';
import {Link} from 'react-router-dom';
import iconclose from '../../images/icon_close-black-48dp.svg';
import {Button, ButtonSec} from '../../elements/buttons';

function AddEditLog() {

  return (
    <div className="form--log">
      <div className="form--log__icon">
        <Link to="/"><img src={iconclose} alt="" /></Link>
      </div>
      <div className="form--log__row">
        <label htmlFor="title">Game title:</label>
        <div>
          <input type="text" name="title" />
        </div>
      </div>
      <div className="form--log__row">
        <label htmlFor="format">Game platform:</label>
        <div>
          <select name="format">
            <option>select...</option>
          </select>
        </div>
      </div>
      <div className="form--log__row">
        <label htmlFor="console">Console:</label>
        <div>
          <select name="console">
            <option>select...</option>
          </select>
        </div>
      </div>
      <div className="form--log__row">
        <label htmlFor="date">Date:</label>
        <div>
          <input type="date" name="date" />
        </div>
      </div>
      <div className="form--log__row">
          <label htmlFor="session">Session:</label>
        <div className="form--log__row">
          <div><input type="time" name="session" id="session-start" /></div>
          <div><input type="time" name="session" id="session-end" /></div>
        </div>
    </div>
      
      <div className="form--log__buttons">
        <div><Button primary>{"save"}</Button></div>
        <div><ButtonSec secondary>{"delete"}</ButtonSec></div>
      </div>
    </div>
  );
}

export default AddEditLog;