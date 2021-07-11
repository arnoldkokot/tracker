import './Mastery.css';

function Mastery() {
  return (
    <div className="mastery">
      <img className="legend" src={`/assets/champion/Quinn.png`} alt="Quinn avatar"/>
      <img className="emblem" src={`/assets/mastery/6.png`} alt="6th emblem"/>
      <p>42314 pts</p>
    </div>
  );
}

export default Mastery;
