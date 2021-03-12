import './startup.css';
import icongame from '../../images/icon_videogame-white-48dp.svg';
import iconinfo from '../../images/icon_info-white-18dp.svg';
import {Button} from '../../elements/buttons';
import firebase from 'firebase/app';
import {useAuth} from 'reactfire';

function Startup (props) {

    const auth = useAuth();
  
    const signIn = async () => {
      await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

  return (
    <div className="startup">
      <div className="startup_box">
        <div className="startup__title">
          Gameplay <img src={icongame} alt="game controller" /> Log
        </div>
        <div><b>Welcome to Gameplay Log!</b></div>
        <div>
          <p>Save your consoles and games,<br />and keep a log of your playtime on each!</p>
          <p>Please use your <b>Google-account</b><br/>to sign in and to use this app.</p>
        </div>
        <Button onClick={signIn} primary>Log in</Button>
        <div className="startup_footer">
          Check out <img src={iconinfo} alt="info" /> for tips and information!
        </div>
      </div>
    </div>
  );
}

export default Startup;