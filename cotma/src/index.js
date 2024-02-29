import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Add from './components/Add/Add';
import AddC from './components/AddC/AddC';
import ProfileC from './components/ProfileC/ProfileC';
import SearchC from './components/SearchC/SearchC';
import ProfileW from './components/ProfileW/ProfileW';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import SearchW from './components/SearchW/SearchW';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path = "add" element = {<Add />}></Route>
      <Route path = "addc" element = {<AddC />}></Route>
      <Route path = "proc" element={<ProfileC/>}></Route>
      <Route path = "sc" element={<SearchC />}></Route>
      <Route path = "prow" element={<ProfileW/>}></Route>
      <Route path = "sw" element={<SearchW/>}></Route>
    </Routes>
  </BrowserRouter>
);

