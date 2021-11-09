import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stuff from './pages/Stuff/Stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stuff">
          <Route path=":userID" element={<Stuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
