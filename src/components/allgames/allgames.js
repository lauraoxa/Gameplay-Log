import './allgames.css';
import useForm from '../useform';
import CardGame from '../../elements/card-game';

function AllGames(props) {

  const submit = () => {};
  
  const {values, handleChange} = useForm(submit, {filter: ""}, false);

  const consoles = props.consoleShortnames.map( (console) => <option key={console} value={console}>{console}</option>);
  consoles.unshift(<option key="empty" value="">all games</option>);

  const filteredGames = values.filter ? props.gameData.filter((game) => game.format === values.filter) : props.gameData;

  const games = (filteredGames.length > 0) ? filteredGames.map( (game) => <CardGame key={game.id} gameData={game} consoleData={props.consoleData} logData={props.logData} />) : <div className="filtered__nogames">No games for this console.</div>;
  //const games = filteredGames.map( (game) => <CardGame key={game.id} gameData={game} />);

  return (
    <div>
      <form>
        <div className="filter">
          <label htmlFor="filter"></label>
          <select name="filter" onChange={handleChange}>
            {consoles}
          </select>
        </div>
      </form>
      <div className="filtered_games">
        {games}
      </div>
    </div>
  );
}

export default AllGames;