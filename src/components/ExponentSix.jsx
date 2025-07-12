const ExponentSix = ({count, increment, decrement}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n^6</p>
    <p className="exponent-result">{count}^6 = <span className="total">Math.pow{count}</span></p>
    <button className="counter-button" onClick={decrement}>-</button>
    <button className="counter-button" onClick={increment}>+</button>
  </div>
);

export default ExponentSix;