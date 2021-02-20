import AddEditConsole from '../addedit-console';

function AddConsole(props) {
  return (
      <div>
        <AddEditConsole onConsoleSubmit={props.onConsoleSubmit} />
      </div>
  );
}

export default AddConsole;