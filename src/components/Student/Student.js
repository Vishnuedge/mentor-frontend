import React, { useContext } from 'react';
import { DataContext } from '../../context/Data';

function Student() {
  const [mentor, setMentor, student, setStudent] = useContext(DataContext);

  return (
    <div>
      <h3 className="text-info">Student List</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Batch</th>
            <th scope="col">Mentor</th>
          </tr>
        </thead>
        <tbody>
          {console.log(student)}
          {student.map(s => {
            const student_mentor = mentor.filter(
              men => men._id === student.mentor
            );
            console.log(student_mentor);
            return (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.batch}</td>
                <td>{student_mentor[0] ? student[0].name : ''}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
