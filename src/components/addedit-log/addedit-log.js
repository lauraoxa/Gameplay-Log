import './addedit-log.css';
import {Link} from 'react-router-dom';
import iconclose from '../../images/icon_close-black-48dp.svg';
import {Button, ButtonSec} from '../../elements/buttons';

function AddEditLog() {

  return (
    <div className="form">
      <div className="form--icon">
        <Link to="/"><img src={iconclose} alt="" /></Link>
      </div>
      <div className="form--row">
        <div className="form--text__big">
          <label htmlFor="name">Game title:</label>
        </div>
        <div>
          <input type="text" name="name" />
        </div>
      </div>
      <div className="form--row">
        <div className="form--text__big">
          <label htmlFor="format">Game platform:</label>
        </div>
        <div>
          <select name="format">
            <option>select...</option>
          </select>
        </div>
      </div>
      <div className="form--row">
        <div className="form--text__big">
          <label htmlFor="console">Console:</label>
        </div>
        <div>
          <select name="console">
            <option>select...</option>
          </select>
        </div>
      </div>
      <div className="form--row">
        <div className="form--text__big">
          <label htmlFor="date">Date:</label>
        </div>
        <div>
          <input type="date" name="date" />
        </div>
      </div>
      <div className="form--row">
      <div className="form--text__big">
        <label htmlFor="session">Session:</label>
      </div>
      <div>
        <input type="time" name="session" />
      </div>
    </div>
      
      <div className="form--buttons">
        <div><Button primary>{"save"}</Button></div>
        <div><ButtonSec secondary>{"delete"}</ButtonSec></div>
      </div>
    </div>
  );
}

export default AddEditLog;