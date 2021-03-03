import './catalogue.css';
import {Link} from 'react-router-dom';
import iconarticle from '../../images/icon_article-white-48dp.svg';
import iconadd from '../../images/icon_add_box-white-48dp.svg';

function Catalogue() {
  return(      
      <div className="catalogue">
        <div className="catalogue--allconsoles">
          <div className="catalogue__left">  
            <div className="catalogue__icon">
              <img src={iconarticle} alt="" />
            </div>
            <div>
            <Link to="/catalogue/allconsoles"><p>All consoles</p></Link>
            </div>
          </div>
          <Link to="/add-console">
            <div className="button-addnew">
              <div>Add<br/>new</div>
              <div className="catalogue__icon__addnew">
                <img src={iconadd} alt="" />
              </div>
            </div>
          </Link>
        </div>
        <div className="catalogue--allgames">
        <div className="catalogue__left">  
            <div className="catalogue__icon">
              <img src={iconarticle} alt="" />
            </div>
            <div>
            <p><Link to="catalogue/allgames">All games</Link></p>
            </div>
          </div>
          <Link to="/add-game">
            <div className="button-addnew">
              <div>Add<br/>new</div>
              <div className="catalogue__icon__addnew">
                <img src={iconadd} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
  );
}

export default Catalogue;