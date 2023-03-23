import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacts from './components/pages/Contacts';
import Experience from './components/pages/Experience';
import Aboutme from './components/pages/Aboutme';
import NotFound from './components/NotFound';

const App = () => {
  
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Aboutme />}/>
        <Route path='Contacts' element={<Contacts />}/>
        <Route path='Experience' element={<Experience />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </>
  )
};

export default App;
