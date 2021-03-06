import './stats.css';
// import useForm from '../useform';

function Stats(props) {

  /* DISABLED CODE -----------------------
  const submit = () => {};
  
  const {values, handleChange} = useForm(submit, {stats: ""}, false);

  // SELECT CONSOLES OR GAMES ----------------------
  const consoles = props.consoleShortnames.map( (shortname) => <option key={shortname} value={shortname}>{shortname}</option>);
  const games = props.gameTitles.map( (title) => <option key={title} value={title}>{title}</option>);

  consoles.unshift(<option key="empty" value="">select console...</option>);
  games.unshift(<option key="empty" value="">select game...</option>);

  var selectConsole, selectGame;

  var selectTarget = values.stats ? (selectConsole === consoles) : (selectGame === games);
  */

  // COUNT PLAYTIMES -------------------------------
  const logs = props.logData;
  var sessionMin, sessionHour, sessionFull;

  let totalToday = 0, totalThisMonth = 0, totalThisYear = 0, totalLastYear = 0;
    logs.forEach(logitem => {
      if (logitem.date === new Date().toISOString().substring(0,10)) {
        totalToday += logitem.sessionMS
      }
    })

    logs.forEach(logitem => {
      if (logitem.date.substring(0,7) === new Date().toISOString().substring(0,7)) {
        totalThisMonth += logitem.sessionMS
      }
    })
    
    logs.forEach(logitem => {
      if (logitem.date.substring(0,4) === new Date().toISOString().substring(0,4)) {
        totalThisYear += logitem.sessionMS
      }
    })

    var currentyear = new Date().getFullYear(); var prevyear = currentyear-1;
    logs.forEach(logitem => {
      if (logitem.date.substring(0,4) == prevyear) {
        totalLastYear += logitem.sessionMS
      }
    })

    const msToHoursMins = (ms) => {
      sessionHour = Math.floor(ms/1000/60/60);
      if (ms%3600000 > 0) {
        sessionMin = Math.floor((ms - (sessionHour*1000*60*60) )/1000/60);
      } else {sessionMin = "00";}
      return sessionFull = (sessionHour + ":" + sessionMin);
    }
    
       /* else if (ms%3600000 < 10 && ms%3600000 > 0) {
          sessionMin = "0" + Math.floor((ms - (sessionHour*1000*60*60) )/1000/60);
      }  */
    // const totalPlayedTime = msToHoursMins(total);

    const today = msToHoursMins(totalToday);
    const thisMonth = msToHoursMins(totalThisMonth);
    const thisYear = msToHoursMins(totalThisYear);
    const lastYear = msToHoursMins(totalLastYear);


  return (
    <div className="stats">
      {/*
        <form onChange={handleChange}>
        <div className="stats__header">What would you like to see statistics for?</div>
        <div className="stats__type">
          <div className="stats--row" onChange={handleChange}>
            <input type="radio" name="statType" id="selectConsole" value={values.stats} checked={selectTarget = consoles} onChange={handleChange} /> Game time per console
          </div>
          <div className="stats--row">
            <input type="radio" name="statType" id="selectGame" value={values.stats} checked={selectTarget = games} onChange={handleChange} /> Game time per game
          </div>
          <div>
            <select name="selectTarget" id="selectTarget" onChange={handleChange}>{selectTarget}</select>
          </div>
        </div>
      </form>
      */}

      <div className="stats__static--box">
          <div className="stats__static__title">
            Total playtime in hours:
          </div>
          <div className="stats__static">
            <div className="stats__static--row">
              <div className="stats__static__text">
                Today:
              </div>
              <div className="stats__static__numbers">
                {today}
              </div>
            </div>
            <div className="stats__static--row">
              <div className="stats__static__text">
                This month:
              </div>
              <div className="stats__static__numbers">
                {thisMonth}
              </div>
            </div>
            <div className="stats__static--row">
              <div className="stats__static__text">
                This year:
              </div>
              <div className="stats__static__numbers">
                {thisYear}
              </div>
            </div>
            <div className="stats__static--row">
            <div className="stats__static__text">
              Last year:
            </div>
            <div className="stats__static__numbers">
              {lastYear}
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default Stats;