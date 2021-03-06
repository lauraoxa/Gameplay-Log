import './addedit-console.css';
import {useHistory} from 'react-router-dom';
import iconclose from '../../images/icon_close-black-48dp.svg';
import {Button} from '../../elements/buttons';
import useForm from '../useform/useform.js';
import {v4 as uuidv4} from 'uuid';

function AddEditConsole(props) {

  const history = useHistory();

  const submit = () => {
    let storedvalues = Object.assign({}, values);
    storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
    props.onConsoleSubmit(storedvalues);
    history.push("/catalogue/allconsoles");
  }

  const initialState = props.consoleData ? props.consoleData : {
    name: "",
    shortname: ""
  };

  const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

  const handleCancel = (event) => {
    event.preventDefault();
    history.goBack();
  }

  return (
    <div className="form--console">
      <form onSubmit={handleSubmit}>
        <div className="form--console__icon">
          <img src={iconclose} onClick={handleCancel} alt="cancel" />
        </div>
        <div className="form--console__form">
          <div>
            <label htmlFor="name">Console:</label>
          </div>
          <div>
            <input type="text" name="name" onChange={handleChange} value={values.name} />
          </div>
          <div>
            <label htmlFor="shortname">Shortname:</label>
          </div>
          <div>
            <input type="text" name="shortname" onChange={handleChange} value={values.shortname} />
          </div>
        </div>
        <div className="form--console__buttons">
          <div><Button primary type="submit">{"save"}</Button></div>
        </div>
      </form>
    </div>
  );
}

export default AddEditConsole;