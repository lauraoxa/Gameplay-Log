import AddEditLog from '../addedit-log';

function AddLog(props) {
  return (
      <div>
        <AddEditLog onLogSubmit={props.onLogSubmit} consoleShortnames={props.consoleShortnames}  consoleNames={props.consoleNames} />
      </div>
  );
}

export default AddLog;