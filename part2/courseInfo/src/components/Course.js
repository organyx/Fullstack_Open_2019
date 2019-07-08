import React from 'react';

const Header = props => {
  return (<h1>{props.course}</h1>);
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

export default Course;
