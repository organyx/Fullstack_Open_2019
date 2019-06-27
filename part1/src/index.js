import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  return <h1>{props.course}</h1>;
};

const Content = props => {
  console.log('Content', props.parts);
  return (
    <div>
      <Part
        partNumber={props.parts[0].name}
        exercises={props.parts[0].exercises}
      />
      <Part
        partNumber={props.parts[1].name}
        exercises={props.parts[1].exercises}
      />
      <Part
        partNumber={props.parts[2].name}
        exercises={props.parts[2].exercises}
      />
    </div>
  );
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
  const course = 'Half Stack application development';
  const parts = [
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
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
