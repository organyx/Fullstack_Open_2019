import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Votes = ({ selected, votes }) => <p>Has {votes[selected]} votes</p>;

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(6).fill(0));

  const random = Math.floor((Math.random() * anecdotes.length));

  const vote = selected => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <Votes votes={votes} selected={selected} />
      <Button handleClick={() => vote(selected)} text="Vote" />
      <Button
        handleClick={() => setSelected(random)}
        text="Next One"
      />
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
