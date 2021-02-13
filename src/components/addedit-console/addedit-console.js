import './addedit-console.css';
import {Link} from 'react-router-dom';
import iconclose from '../../images/icon_close-black-48dp.svg';
import {Button} from '../../elements/buttons';

function AddEditConsole() {

  return (
    <div className="form--console">
      <div className="form--console__icon">
        <Link to="/catalogue/allconsoles"><img src={iconclose} alt="" /></Link>
      </div>
      <div className="form--console__row">
        <div>
          <label htmlFor="consolename">Console name:</label>
        </div>
      </div>
      <div className="form--console__row">
        <div>
          <input type="text" name="consolename" />
        </div>
      </div>
      <div className="form--console__row">
        <div>
          <label htmlFor="shortname">Shortname:</label>
        </div>
      </div>
      <div className="form--console__row">
        <div>
          <input type="text" name="shortname" />
        </div>
      </div>
      <div className="form--console__buttons">
        <div><Button primary>{"save"}</Button></div>
      </div>
    </div>
  );
}

export default AddEditConsole;