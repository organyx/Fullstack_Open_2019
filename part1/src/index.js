import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Section = ({ name }) => {
    return <h1>{name}</h1>;
  };

  const Buttons = props => {
    return (
      <div>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>
    );
  };

  const Results = props => {
    return (
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
      </div>
    );
  };

  return (
    <div>
      <Section name={'Feedback'} />
      <Buttons />
      <Section name={'Statistics'} />
      <Results />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
