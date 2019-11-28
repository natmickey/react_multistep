import React from 'react';
import './App.css';
import { UserForm } from './components/UserForm'
import ProgressBar from './ProgressBar/index'

function App() {
  return (
    <div className="App">
     <UserForm>
       <ProgressBar />
     </UserForm>
    </div>
  );
}

export default App;
