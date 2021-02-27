import './addedit-log.css';
import {useHistory} from 'react-router-dom';
import iconclose from '../../images/icon_close-black-48dp.svg';
import {Button, ButtonSec} from '../../elements/buttons';
import useForm from '../useform/useform.js';
import {v4 as uuidv4} from 'uuid';

function AddEditLog(props) {

  const history = useHistory();

  const submit = () => {
    let storedvalues = Object.assign({}, values);
    storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
    props.onLogSubmit(storedvalues);
    history.goBack();
  }

  const initialState = props.logData ? props.logData : {
    name: "",
    format: props.consoleShortnames ? props.consoleShortnames[0] : "",
    console: props.consoleNames ? props.consoleNames[0] : "",
    date: new Date().toISOString().substring(0,10),
    sessionStart: "",
    sessionEnd: ""
  };

  const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

  const handleCancel = (event) => {
    event.preventDefault();
    history.goBack();
  }

  const handleDelete = (event) => {
    event.preventDefault();
    props.onLogDelete(values.id);
    history.goBack();
  }

  return (
    <div className="form--log">
      <form onSubmit={handleSubmit}>
        <div className="form--log__icon">
          <img src={iconclose} onClick={handleCancel} alt="cancel" />
        </div>
        <div className="form--log__row">
          <label htmlFor="name">Game title:</label>
          <div>
            <input type="text" name="name" onChange={handleChange} value={values.name} />
          </div>
        </div>
        <div className="form--log__row">
          <label htmlFor="format">Game platform:</label>
          <div>
            <select name="format" onChange={handleChange} value={values.format}>
              {props.consoleShortnames.map( (shortname) => <option key={shortname} value={shortname}>{shortname}</option>)}
            </select>
          </div>
        </div>
        <div className="form--log__row">
          <label htmlFor="console">Console:</label>
          <div>
            <select name="console" onChange={handleChange} value={values.console}>
              {props.consoleNames.map( (console) => <option key={console} value={console}>{console}</option>)}
            </select>
          </div>
        </div>
        <div className="form--log__row">
          <label htmlFor="date">Date:</label>
          <div>
            <input type="date" name="date" onChange={handleChange} value={values.date} />
          </div>
        </div>
        <div className="form--log__row">
            <label htmlFor="session">Session:</label>
          <div className="form--log__row">
            <div>
              <input type="time" name="sessionStart" onChange={handleChange} value={values.sessionStart} />
            </div>
            <div >
              <input type="time" name="sessionEnd" onChange={handleChange} value={values.sessionEnd} />
            </div>
          </div>
        </div>
        
        <div className="form--log__buttons">
          <div><Button primary type="submit">{"save"}</Button></div>
          {props.onLogDelete ? <div><ButtonSec secondary onClick={handleDelete}>delete</ButtonSec></div> : "" }
        </div>
      </form>

  

    </div>
  );
}

export default AddEditLog;