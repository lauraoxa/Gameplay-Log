import AddEditLog from '../addedit-log';
import {useParams} from 'react-router-dom';

function EditLog(props) {

  const {id} = useParams();
  const index = props.logData.findIndex(log => log.id === id);
  let log = props.logData[index];

  return (
      <div>
        <AddEditLog onLogSubmit={props.onLogSubmit} onLogDelete={props.onLogDelete} logData={log} consoleShortnames={props.consoleShortnames} consoleNames={props.consoleNames} gameData={props.gameData} gameTitles={props.gameTitles} />
      </div>
  );
}

export default EditLog;