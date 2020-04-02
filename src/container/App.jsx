import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Calendar from '../components/Calendar';
import '../styles/components/App.styl';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <Calendar />
      </Main>
    </>
  )
};

export default App;
