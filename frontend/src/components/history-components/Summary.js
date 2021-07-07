import './Summary.css';

function Summary() {
  return (
    <div className="summary">
        <div className="wr-circle">
          <h3>50%</h3>
          <svg>
            <circle cx="50%" cy="50%" r="45%"></circle>
            <circle cx="50%" cy="50%" r="45%" strokeDashoffset="100"></circle>
            {/* stroke-dashoffset determines circle border proportion*/}
          </svg>
        </div>
        <div>64 / 75 / 60</div>
        <div className="prefered-lanes">
          <div>
            <img src="TOP.png" alt="toplane"/>
            <p>36%</p>
          </div>
          <div>
            <img src="TOP.png" alt="toplane"/>
            <p>36%</p>
          </div>
          <div>
            <img src="TOP.png" alt="toplane"/>
            <p>36%</p>
          </div>
        </div>
    </div>
  );
}

export default Summary;
