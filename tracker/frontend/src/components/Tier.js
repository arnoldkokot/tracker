import "./Tier.css";
export default function Tier(props) {
  const { queueType, tier, rank, leaguePoints, wins, losses } = props;
  return (
    <div className="tier" key={queueType}>
      <img src={`assets/ranked-emblems/${tier}.png`} alt={`${tier} emblem`} />
      <div>
        <p>{queueType}</p>
        <h2>
          {tier} {rank}
        </h2>
        <p>
          {leaguePoints}LP | {wins}W {losses}L
        </p>
        <p>Win Ratio {((wins / (wins + losses)) * 100).toFixed(2)}%</p>
      </div>
    </div>
  );
}
