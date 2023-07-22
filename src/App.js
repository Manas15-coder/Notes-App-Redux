import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import NotesForm from './components/NotesForm';
import Navbar from './components/Navbar';
import AllNotes from './components/AllNotes';
import EditNote from './components/EditNote';
import AllEditNotes from './components/AllEditNotes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<NotesForm/>}/>
          <Route path='/allNotes' element={<AllNotes/>}/>
          <Route path='/editNote' element={<EditNote/>}/>
          <Route path='/allEditNotes' element={<AllEditNotes/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
