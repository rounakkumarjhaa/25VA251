import React from 'react';

function Props({ name, rollno, course, students }) {
  const studentList = students.map((student, index) => (
    <div key={index}>
      <h3>{student.name}</h3>
      <h3>{student.rollno}</h3>
      <h3>{student.course}</h3>
    </div>
  ));

  return (
    <div style={{ backgroundColor: '#CCC' }}>
      <h2>{name}</h2>
      <h2>{rollno}</h2>
      <h3>{course}</h3>
      {studentList}
    </div>
  );
}

export default Props;