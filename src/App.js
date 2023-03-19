import React from 'react';
import Contacts from './components/pages/Contacts';
import Experience from './components/pages/Experience';
import Aboutme from './components/pages/Aboutme';

const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/Experience')
  {
    Component = Experience
  } 
  else if (pathname === '/Contacts')
  {
    Component = Contacts
  }
  else
  {
    Component = Aboutme
  }

  return (
  <>
    <Component/>
  </>
  )
};

export default App;
