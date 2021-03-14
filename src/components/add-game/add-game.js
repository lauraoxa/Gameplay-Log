import AddEditGame from '../addedit-game';

function AddGame(props) {
  return (
      <div>
        <AddEditGame
          onGameSubmit={props.onGameSubmit}
          consoleShortnames={props.consoleShortnames}
        />
      </div>
  );
}

export default AddGame;