import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Add from './components/Add/Add';
import AddC from './components/AddC/AddC';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path = "add" element = {<Add />}></Route>
      <Route path = "addc" element = {<AddC />}></Route>
    </Routes>
  </BrowserRouter>
);

