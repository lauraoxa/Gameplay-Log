import CardLog from '../../elements/card-log';

function AllLogs(props) {

  const logs = props.logDataFull.map( (log) => <CardLog key={log.id} logData={log} />);

  
  return (
    <div className="alllogs">
    {logs}
  </div>  
  );
}

export default AllLogs;