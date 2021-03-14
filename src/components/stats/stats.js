import './stats.css';

function Stats(props) {

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

    var currentyear = new Date().getFullYear();
    var prevyear = currentyear-1;
    
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

    const today = msToHoursMins(totalToday);
    const thisMonth = msToHoursMins(totalThisMonth);
    const thisYear = msToHoursMins(totalThisYear);
    const lastYear = msToHoursMins(totalLastYear);


  return (
    <div className="stats">
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