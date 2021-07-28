import React, { useContext } from 'react';
import { DataContext } from '../../context/Data';

function Student() {
  const [student, setStudent] = useContext(DataContext);

  return (
    <div>
      <h3 className="text-info">Student List</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Course</th>
          </tr>
        </thead>
        <tbody>
          {student.map(x => {
            return (
              <tr key={x._id}>
                <td>{x.name}</td>
                <td>{x.batch}</td>
                <td>{x.mentor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
