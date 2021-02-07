import './allconsoles.css';
import CardConsole from '../../elements/card-console';

function AllConsoles(props) {

  const consoles = props.consoleData.map((console) => <CardConsole consoleData={console} />);

  return (
    <div>
      {consoles}
    </div>
  );
}

export default AllConsoles;