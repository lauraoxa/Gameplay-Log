import AddEditGame from '../addedit-game';
import {useParams} from 'react-router-dom';

function EditGame(props) {

  const {id} = useParams();
  const index = props.gameData.findIndex(game => game.id === id);
  let game = props.gameData[index];

  return (
      <div>
        <AddEditGame onGameSubmit={props.onGameSubmit} gameData={game} consoleShortnames={props.consoleShortnames} />
      </div>
  );
}

export default EditGame;