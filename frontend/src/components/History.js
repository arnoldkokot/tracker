import "./History.css";
// import Summary from "./history-components/Summary";
import Match from "./history-components/Match";

function History(props) {
  return (
    <>
      {/* <Summary /> */}
      <ul className="history">
        {props.matchIds.map((id) => (
          <Match id={id} name={props.name} key={id} />
        ))}
      </ul>
    </>
  );
}

export default History;
