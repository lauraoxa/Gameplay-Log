import AddEditLog from '../addedit-log';

function AddLog(props) {
  return (
      <div>
        <AddEditLog onLogSubmit={props.onLogSubmit} consoleShortnames={props.consoleShortnames} consoleNames={props.consoleNames} gameData={props.gameData} gameTitles={props.gameTitles} />
      </div>
  );
}

export default AddLog;