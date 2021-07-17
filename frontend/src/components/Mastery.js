import "./Mastery.css";
export default function Mastery(props) {
  const mastery = props.mastery;
  return (
    <div className="top-champ">
      {mastery.map(({ championLevel, championName, championPoints }) => (
        <div>
          <img
            src={`assets/champion/${championName}.png`}
            alt={`${championName}`}
          />
          <div className="champ-desc">
            <img
              src={`assets/mastery/${championLevel}.png`}
              alt={`mastery ${championLevel}`}
            />
            <p>{championPoints} pts</p>
          </div>
        </div>
      ))}
    </div>
  );
}
