import React from 'react';

function Exp7({ students }) {
  const studentList = students?.map((student, index) => (
    <div key={index} style={{ backgroundColor: '#363434', padding: '5px 10px', margin: '5px 0' }}>
      <h3>{student.name}</h3>
      <h3>{student.rolno}</h3>
      <h3>{student.course}</h3>
    </div>
  ));

  return (
    <div>
      {studentList}
    </div>
  );
}

export default Exp7;