import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddThing from './pages/AddThing/AddThing';
import Dashboard from './pages/Dashboard/Dashboard';
import Stuff from './pages/Stuff/Stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddThing />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/stuff" element={<Stuff />}>
          <Route path=":thingID" element={<Stuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
