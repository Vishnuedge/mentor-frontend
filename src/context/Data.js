import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [mentor, setMentor] = useState([]);
  const [student, setStudent] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:4000/mentors`);
    setMentor(data);

    const response = await axios.get(`http://localhost:4000/students`);
    setStudent(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <DataContext.Provider value={[mentor, setMentor, student, setStudent]}>
        {children}
      </DataContext.Provider>
    </>
  );
};
