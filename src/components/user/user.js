import './user.css';
import {useUser, useAuth} from 'reactfire';
import {Button} from '../../elements/buttons';

function User (props) {

  const user = useUser();
  const auth = useAuth();

  const signOut = async () => {
      await auth.signOut();
  }

  return (
    <div className="user">
      <div className="user__title">User profile:</div>
      <div className="user--card">
        <div className="user--card__left">
          <div className="user__icon"><img src={user.data.photoURL} alt="" /></div>
        </div>
        <div className="user--card__right">
          <div className="user__name">{user.data.displayName}</div>
          <div className="user__email">{user.data.email}</div>
        </div>
      </div>
      <Button primary onClick={signOut}>Log out</Button>
  </div>
  );
}

export default User;