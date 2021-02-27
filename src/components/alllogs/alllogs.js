import './alllogs.css';
import CardLog from '../../elements/card-log';

function AllLogs(props) {

  const logs = props.logDataFull.map( (log) => <CardLog key={log.id} logData={log} />);

  
  return (
    <div className="gamelog--entries">
    {logs}
  </div>  
  );
}

export default AllLogs;