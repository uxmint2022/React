
import React from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import EditList from './components/editList';
import CreateList from './components/createList';


function App() {
  return (
      <Router>
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/post/create_page' element={<CreateList />} /> 
            <Route path='/post/edit_page/:listid' element={<EditList />} /> 
            <Route path='*' element={<div className='notfound'>Not Found</div>} />
        </Routes>
      </Router>
  );
}

export default App;
