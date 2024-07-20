// pages/patients.js
import React from 'react';

const Patients = ({ patients }) => {
  return (
    <div>
      <h1>Patient List</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.age} years old - {patient.condition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from an external API or database
  const res = await fetch('https://api.example.com/patients');
  const patients = await res.json();

  return {
    props: {
      patients,
    },
  };
}

export default Patients;
