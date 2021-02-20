import AddEditGame from '../addedit-game';

function AddGame(props) {
  return (
      <div>
        <AddEditGame onGameSubmit={props.onGameSubmit} />
      </div>
  );
}

export default AddGame;