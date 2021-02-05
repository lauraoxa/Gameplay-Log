import './catalogue.css';
import {Link} from 'react-router-dom';
import iconarticle from '../../images/icon_article-white-48dp.svg';
import iconadd from '../../images/icon_add_box-white-48dp.svg';
import iconfilter from '../../images/icon_filter_alt-white-48dp.svg'; 

function Catalogue() {
  return(
    <div className="catalogue">
      <div className="catalogue--allconsoles">
        <div className="catalogue__left">  
          <div className="catalogue__icon">
            <img src={iconarticle} alt="" />
          </div>
          <div>
            <Link to="/allconsoles"><p>All consoles</p></Link>
          </div>
        </div>
        <div className="button-addnew">
          <div>Add<br/>new</div>
          <div className="catalogue__icon__addnew">
            <img src={iconadd} alt="" />
          </div>
        </div>
      </div>
      <div className="catalogue--allgames">
       <div className="catalogue__left">  
          <div className="catalogue__icon">
            <img src={iconarticle} alt="" />
          </div>
          <div>
            <Link to ="/allgames"><p>All games</p></Link>
          </div>
        </div>
        <div className="button-addnew">
          <div>Add<br/>new</div>
          <div className="catalogue__icon__addnew">
            <img src={iconadd} alt="" />
          </div>
        </div>
      </div>
      <div className="catalogue--filter">
        <div className="catalogue__icon">
          <img src={iconfilter} alt="" />
        </div>
        <div><p>Filter by console</p></div>
      </div>
    </div>
  );
}

export default Catalogue;