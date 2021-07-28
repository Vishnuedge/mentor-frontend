import React from 'react';
import Mentor from '../components/Mentor/Mentor';
import Student from '../components/Student/Student';
import { DataProvider } from '../context/Data';
export default function Home() {
  return (
    <DataProvider>
      <Mentor />
      <Student />
    </DataProvider>
  );
}
