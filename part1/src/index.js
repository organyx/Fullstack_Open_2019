import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  return <h1>{props.course}</h1>;
};

const Content = props => {
  return (
    <div>
      <Part partNumber={props.partNumber} exercises={props.exercises} />
      <Part partNumber={props.partNumber} exercises={props.exercises} />
      <Part partNumber={props.partNumber} exercises={props.exercises} />
    </div>
  );
};

const Total = props => {
  return <p>Number of Exercises {props.total}</p>;
};

const Part = props => {
  return (
    <p>
      {props.partNumber} {props.exercises}
    </p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content  />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
