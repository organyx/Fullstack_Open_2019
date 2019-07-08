import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  return <h1>{props.course}</h1>;
};

const Content = props => {
  const parts = props.parts;
  // console.log('Content', parts);
  const partsList = parts.map(part => (
    <Part key={part.id} partNumber={part.name} exercises={part.exercises} />
  ));
  return <div>{partsList}</div>;
};

const Total = props => {
  const countTotal = function(parts) {
    var total = 0;
    parts.forEach(part => {
      total += part.exercises;
    });
    return total;
  };
  const total = countTotal(props.total);
  return <p>Total # of Exercises: {total}</p>;
};

const Part = props => {
  // console.log('PART ', props);
  return (
    <p>
      {props.partNumber} {props.exercises}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  };
  return (
    <div>
      <Course course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
