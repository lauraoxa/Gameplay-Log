import './allgames.css';
import CardGame from '../../elements/card-game';

function AllGames(props) {

  const games = props.gameData.map( (game) => <CardGame key={game.id} gameData={game} />);

  return (
    <div>
      {games}
    </div>
  );
}

export default AllGames;