import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  return <h1>{props.course}</h1>;
};

const Content = props => {
  const parts = props.parts;
  console.log('Content', parts);
  const partsList = parts.map(part => (
    <Part key={part.name} partNumber={part.name} exercises={part.exercises} />
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
  return <p>Number of Exercises {total}</p>;
};

const Part = props => {
  console.log('PART ', props);
  return (
    <p>
      {props.partNumber} {props.exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));