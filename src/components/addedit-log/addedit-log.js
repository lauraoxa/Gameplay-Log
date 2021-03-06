import './addedit-log.css';
import {useHistory} from 'react-router-dom';
import iconclose from '../../images/icon_close-black-48dp.svg';
import {Button, ButtonSec} from '../../elements/buttons';
import useForm from '../useform/useform.js';
import {v4 as uuidv4} from 'uuid';
import {useState, useEffect} from 'react';

function AddEditLog(props) {

  const history = useHistory();

  const submit = () => {
    let storedvalues = Object.assign({}, formValues);
    storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
    props.onLogSubmit(storedvalues);
    history.goBack();
  }

  const initialState = props.logData ? props.logData : {
    name: props.gameTitles ? props.gameTitles[0] : "",
    console: props.consoleShortnames ? props.consoleShortnames[0] : "",
    date: new Date().toISOString().substring(0,10),
    sessionStart: "",
    sessionEnd: ""
  };

  const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);
  const [formValues, setFormValues] = useState({});

  const handleCancel = (event) => {
    event.preventDefault();
    history.goBack();
  }

  const handleDelete = (event) => {
    event.preventDefault();
    props.onLogDelete(values.id);
    history.goBack();
  }

  useEffect(() => {
    const newValues = Object.assign(values);
      const start = newValues.sessionStart.split(':');
      const end = newValues.sessionEnd.split(':');
      const startToMS = (+start[0]) * 60 * 60 * 1000 + (+start[1]) * 60 * 1000;
      const endToMS = (+end[0]) * 60 * 60 * 1000 + (+end[1]) * 60 * 1000;
      newValues.sessionMS = (endToMS-startToMS);
    setFormValues(newValues);
  }, [values]);  

  return (
    <div className="form--log">
      <form onSubmit={handleSubmit}>
        <div className="form--log__icon">
          <img src={iconclose} onClick={handleCancel} alt="cancel" />
        </div>
        <div className="form--log__row">
          <label htmlFor="name">Game title:</label>
        </div>
        <div className="form--log__row">
          <div id="titleSelect">
            <select name="name" onChange={handleChange} value={formValues.name}>
              {props.gameTitles.map((title) => <option key={title} value={title}>{title}</option>)}
            </select>
          </div>
        </div>
        <div className="form--log__row">
          <label htmlFor="console">Console:</label>
          <div>
            <select name="console" onChange={handleChange} value={formValues.console}>
            {props.consoleShortnames.map( (shortname) => <option key={shortname} value={shortname}>{shortname}</option>)}
            </select>
          </div>
        </div>
        <div className="form--log__row">
          <label htmlFor="date">Date:</label>
          <div>
            <input type="date" name="date" onChange={handleChange} value={formValues.date} />
          </div>
        </div>
        <div className="form--log__row">
            <label htmlFor="session">Session:</label>
          <div className="form--log__row">
            <div>
              <input type="time" name="sessionStart" id="sessionStart" onChange={handleChange} value={formValues.sessionStart} />
            </div>
            <div >
              <input type="time" name="sessionEnd" id="sessionEnd" onChange={handleChange} value={formValues.sessionEnd} />
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