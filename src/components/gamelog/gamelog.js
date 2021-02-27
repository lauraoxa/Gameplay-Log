import './gamelog.css';
import {Link} from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import CardLog from '../../elements/card-log';
import iconadd from '../../images/icon_add_box-white-48dp.svg';
import iconlist from '../../images/icon_article-white-48dp.svg';

function Gamelog(props) {
  
  const logs = props.logData.map( (log) => <CardLog key={log.id} logData={log} />);

  return (
    <div className="gamelog">
      <div className="gamelog--menu">
        <div className="gamelog--menu__icon">
          <Tooltip title="See all logs!" placement="right">
            <Link to="/all-logs"><img src={iconlist} alt="" /></Link>
          </Tooltip>
        </div>
        <div className="gamelog--menu__icon">
          <Tooltip title="Add a new log!" placement="left">
            <Link to="/add-log"><img src={iconadd} alt="" /></Link>
          </Tooltip>
        </div>
      </div> 
      <div className="gamelog--entries">
        {logs}
      </div>  
    </div>
  );
}

export default Gamelog;