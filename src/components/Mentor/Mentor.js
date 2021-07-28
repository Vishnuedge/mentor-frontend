import React, { useContext } from 'react';
import { DataContext } from '../../context/Data';

function Mentor() {
  const [mentor, setMentor] = useContext(DataContext);

  return (
    <div>
      <h3 className="text-info">Mentor List</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Batch</th>
            <th scope="col">Mentor</th>
          </tr>
        </thead>
        <tbody>
          {mentor.map(x => {
            return (
              <tr key={x._id}>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.course}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Mentor;
