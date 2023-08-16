import PropTypes from 'prop-types';

const Calculator = () => (
  <div id="CalculatorContainer">
    <input type="number" placeholder="0" id="CalcInput" maxLength={9} />
    <div id="Btns">
      <button type="submit">AC</button>
      <button type="submit">+/-</button>
      <button type="submit">%</button>
      <Operators value="/" />
      <Numbers value="7" />
      <Numbers value="8" />
      <Numbers value="9" />
      <Operators value="x" />
      <Numbers value="4" />
      <Numbers value="5" />
      <Numbers value="6" />
      <Operators value="-" />
      <Numbers value="1" />
      <Numbers value="2" />
      <Numbers value="3" />
      <Operators value="+" />
      <Zero value="0" />
      <button type="submit">.</button>
      <Operators value="=" />
    </div>
  </div>
);
export default Calculator;

const Numbers = ({ value }) => <button type="submit">{value}</button>;

const Operators = ({ value }) => (
  <button className="operator" type="submit">
    {value}
  </button>
);

const Zero = ({ value }) => (
  <button id="zero" type="submit">
    {value}
  </button>
);

Numbers.propTypes = {
  value: PropTypes.string.isRequired,
};
Operators.propTypes = {
  value: PropTypes.string.isRequired,
};
Zero.propTypes = {
  value: PropTypes.string.isRequired,
};
