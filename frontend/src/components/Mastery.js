import './Mastery.css';

function Mastery(props) {
  const { champion, championPoints, championLevel } = props.mastery;
  return (
    <div className="mastery">
      <img className="legend" src={`/assets/champion/${champion}.png`} alt={`${champion} avatar`}/>
      <img className="emblem" src={`/assets/mastery/${championLevel}.png`} alt={`${championLevel}th emblem`}/>
      <p>{ championPoints } pts</p>
    </div>
  );
}

export default Mastery;
