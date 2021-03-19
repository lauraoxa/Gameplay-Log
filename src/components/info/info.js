import './info.css';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import ShowChartRoundedIcon from '@material-ui/icons/ShowChartRounded';
import FolderSpecialRoundedIcon from '@material-ui/icons/FolderSpecialRounded';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Info (props) {

  var infoIcon = <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    width="18px"
    height="18px">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"/>
  </svg>

  return (
    <div className="info">
      <div className="info__whatsnew">
        <div className="infto__whatnew__title">
          <div className="info__whatsnew__title">
            <div>What's new?</div>
          </div>
        </div>
        <div className="info__whatsnew--list">
          <ul>
          <div className="info__whatsnew--entry">
            <div className="info__whatsnew--entry__date">
              2021-03-19:
            </div>
            <li>
              Numbers stylized in total playtimes & log entries.
            </li>
          </div>
            <div className="info__whatsnew--entry">
              <div className="info__whatsnew--entry__date">
                2021-03-16:
              </div>
              <li>
                A couple of new tips added for log time recording
                 and <b>Catalogue</b> naming conventions. <b>&darr;</b>
              </li>
            </div>
            <div className="info__whatsnew--entry">
              <div className="info__whatsnew--entry__date">
                2021-03-12:
              </div>
              <li>
                A new tip added for log time recording down below. <b>&darr;</b>
              </li>
              <li>
                A prompt to check out the info section added to login screen.
              </li>
            </div>
            <div className="info__whatsnew--entry">
              <div className="info__whatsnew--entry__date">
                2021-03-07:
              </div>
              <li>
                Added info section to menu.
              </li>
              <li>
                "No logs to show" feature added.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <hr />
      <div className="info__title">
        {infoIcon}
        <div>Information!</div>
      </div>
      <div className="info__text">
        <ul>
          <li>
            <div className="info__text--list__title">
              Gamelog
            </div>
            <div className="info__text--list__text">
              <div className="info--icon">
                <SportsEsportsRoundedIcon fontSize="large" />
              </div>
              Add you game log entries here! 
              First, remember to add at least 
              one console and game in <b>Catalogue</b>!
              <br />
              &bull; <b> Tip:</b> At a start of a game session, 
              set both start and finish time as your current time - 
              then simply edit the latter when you finish playing!
              <br />
              &bull; <b> Notice:</b> If your gaming session extends 
              past midnight (example: 23:00-01:00), log the time with 
              two separate entries (23:00-23:59 and 00:00-01:00).
            </div>
          </li>
          <li>
            <div className="info__text--list__title">
              Catalogue
            </div>
            <div className="info__text--list__text">
              <div className="info--icon">
                <FolderSpecialRoundedIcon fontSize="large" />
              </div>
              Add your <b>console</b> and <b>game</b> collections here. 
              Browse games for each <b>console</b>.
              <br />
              &bull; <b> Notice:</b> Lists delivered to <b>Gamelog</b> 
              entry forms are automatically alphabetized and case-sensitive. 
              Upper case is listed before lower case (A - a).
            </div>
          </li>
          <li>
            <div className="info__text--list__title">
              Stats
            </div>
            <div className="info__text--list__text">
              <div className="info--icon">
                <ShowChartRoundedIcon fontSize="large" />
              </div>
              See stats of your overall playtime 
              (today, this month, this year, and last year).
            </div>
          </li>
          <li>
            <div className="info__text--list__title">
              User
            </div>
            <div className="info__text--list__text">
              <div className="info--icon">
                <AccountBoxIcon fontSize="large" />
              </div>
              Log out of the account you're using with this 
              app. <b>Note!</b> If you have trouble logging 
              back in, try refreshing your browser view.
            </div>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Info;