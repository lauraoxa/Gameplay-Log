import './gamelog.css';
import {Link} from 'react-router-dom';
import CardLog from '../../elements/card-log';
import Content from '../content';
import iconadd from '../../images/icon_add_box-white-48dp.svg';
import iconlist from '../../images/icon_article-white-48dp.svg';

function Gamelog() {
  return (
    <div className="gamelog">
      <div className="gamelog--entries">
          <CardLog />
          <CardLog />
          <CardLog />
          <CardLog />
          <CardLog />
          <CardLog />
          <CardLog />
          <CardLog />
      </div>
      <div className="gamelog--menu">
        <div className="gamelog--menu__icon"><Link to="/all-logs"><img src={iconlist} alt="" /></Link></div>
        <div className="gamelog--menu__icon"><Link to="/"><img src={iconadd} alt="" /></Link></div>
      </div>   
    </div>
  );
}

export default Gamelog;