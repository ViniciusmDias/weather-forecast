import React from 'react';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Weather from '../../components/Weather';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Search />
      <Weather />
    </>
  );
};

export default Dashboard;
