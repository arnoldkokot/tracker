import "./History.css";
import Match from "./Match";

function History(props) {
  return (
    <>
      <ul className="history">
        {props.matchIds.map((id) => (
          <Match id={id} name={props.name} key={id} />
        ))}
      </ul>
    </>
  );
}

export default History;
