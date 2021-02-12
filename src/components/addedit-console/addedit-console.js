import './addedit-console.css';
import {Link} from 'react-router-dom';
import iconclose from '../../images/icon_close-black-48dp.svg';
import {Button} from '../../elements/buttons';

function AddEditConsole() {

  return (
    <div className="form">
      <div className="form--icon">
        <Link to="/catalogue/allconsoles"><img src={iconclose} alt="" /></Link>
      </div>
      <div className="form--row">
        <div>
          <label htmlFor="name">Console name:</label>
        </div>
      </div>
      <div className="form--row">
        <div>
          <input type="text" name="name" />
        </div>
      </div>
      <div className="form--row">
        <div>
          <label htmlFor="shortname">Shortname:</label>
        </div>
      </div>
      <div className="form--row">
        <div>
          <input type="text" name="shortname" />
        </div>
      </div>
      <div className="form--buttons">
        <div><Button primary>{"save"}</Button></div>
      </div>
    </div>
  );
}

export default AddEditConsole;