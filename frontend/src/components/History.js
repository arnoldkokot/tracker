import './History.css';
import Summary from './history-components/Summary';
import Match from './history-components/Match';

function History(props) {
  return (
    <>
      <Summary/>
      <ul className="history">
          <Match/>
          <Match/>
          <Match/>
          <Match/>
      </ul>
    </>
  );
}

export default History;
