import './addedit-game.css';
import {useHistory} from 'react-router-dom';
import iconclose from '../../images/icon_close-black-48dp.svg';
import {Button} from '../../elements/buttons';
import useForm from '../useform/useform.js';
import {v4 as uuidv4} from 'uuid';

function AddEditGame(props) {

  const history = useHistory();

  const submit = () => {
    let storedvalues = Object.assign({}, values);
    storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
    props.onGameSubmit(storedvalues);
    history.push("/catalogue/allgames");
  }

  const initialState = props.gameData ? props.gameData : {
    name: "",
    format: props.consoleShortnames ? props.consoleShortnames[0] : "",
    storage: ""
  };

  const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

  const handleCancel = (event) => {
    event.preventDefault();
    history.goBack();
  }  

  return (

    <div className="form--game">
      <form onSubmit={handleSubmit}>
        
        <div className="form--game__icon">
          <img src={iconclose} onClick={handleCancel} alt="cancel" />
        </div> 
        <div className="form--game__form">
          <div className="form--game__label">
            <label htmlFor="name">Game title:</label>
          </div>
          <div>
            <input type="text" name="name" onChange={handleChange} value={values.name} required />
          </div>
          <div className="form--game__label">
            <label htmlFor="format">Game platform:</label>
          </div>
          <div>
              <select name="format" onChange={handleChange} value={values.format} required>
                {props.consoleShortnames.map( (shortname) => <option key={shortname} value={shortname}>{shortname}</option>)}
              </select>
          </div>
          <div className="form--game__row">
            <div className="form--game__storage" value={values.storage}>
              <input type="radio" name="storage" id="disc" value="disc/cart" checked={values.storage === "disc/cart"} onChange={handleChange} required /> disc/cart
              <input type="radio" name="storage" id="digital" value="digital" checked={values.storage === "digital"} onChange={handleChange} required /> digital
            </div>
          </div>
        </div>
        <div className="form--game__buttons">
          <div><Button primary type="submit">{"save"}</Button></div>
        </div>
      </form>
    </div>
  );
}

export default AddEditGame;