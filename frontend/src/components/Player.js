import './Player.css';
import History from './History';
import Tier from './Tier';
import Mastery from './Mastery';

function Player(props) {
  return (
    <>
      <h1>{ props.name }</h1>
      <div className="tier-wrapper">
        <Tier/>
        <Tier/>
      </div>
      <div className="mastery-wrapper">
        <Mastery/> {/* First mastery is styled wider and in the middle (best one) */}
        <Mastery/>
        <Mastery/>
      </div>
      <History/>
    </>
  );
}

export default Player;
