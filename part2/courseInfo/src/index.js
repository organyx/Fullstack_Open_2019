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
  const totalReduced = props.total.reduce((totalEx, part) => {
    return totalEx + part.exercises;
  }, 0);

  return (
    <p>
      <strong>Total # of Exercises: {totalReduced}</strong>
    </p>
  );
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ];
  const coursesList = courses.map(course => (
    <Course key={course.id} course={course} />
  ));
  return <div>{coursesList}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
