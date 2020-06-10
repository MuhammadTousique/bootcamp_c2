import React from 'react';
import './App.css';
import Student from './students.js';
function App() {
  return (
    <div>
      <h1>Hello World</h1>
        <Student name="Tousique" course="Bootcamp" class="1" />
        <Student name="Tousique" course="Bootcamp" class="2" />
        <Student name="Tousique" course="Bootcamp" class="3" />
    </div>
  );
}

export default App;
