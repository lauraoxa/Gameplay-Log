import AddEditConsole from '../addedit-console';
import {useParams} from 'react-router-dom';

function EditConsole(props) {

  const {id} = useParams();
  const index = props.consoleData.findIndex(console => console.id === id);
  let console = props.consoleData[index];

  return (
      <div>
        <AddEditConsole onConsoleSubmit={props.onConsoleSubmit} consoleData={console}/>
      </div>
  );
}

export default EditConsole;