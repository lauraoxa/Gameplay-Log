import './addedit-console.css';
import iconclose from '../../images/icon_close-black-48dp.svg';
import {Button, ButtonSec} from '../../elements/buttons';

function AddEditConsole() {

  return (
    <div className="form">
      <div className="form--icon">
        <img src={iconclose} alt="" />
      </div>
      <div className="form--row">
        <div className="form--text__big">
          <div>
            <label htmlFor="name">Console name:</label>
          </div>
        </div>
      </div>
      <div className="form--row">
        <div>
          <input type="text" name="name" />
        </div>
      </div>
      <div className="form--row">
        <div className="form--text__big">
          <div>
            <label htmlFor="shortname">Shortname:</label>
          </div>
        </div>
      </div>
      <div className="form--row">
        <div>
          <input type="text" name="shortname" />
        </div>
      </div>
      <div className="form--buttons">
        <div><Button primary>{"save"}</Button></div>
        <div><ButtonSec secondary>{"delete"}</ButtonSec></div>
      </div>
    </div>
  );
}

export default AddEditConsole;