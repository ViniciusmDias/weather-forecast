import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Weather from '../../components/Weather';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Input />
      <Weather />
    </>
  );
};

export default Dashboard;
