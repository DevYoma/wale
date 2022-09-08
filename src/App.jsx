import './App.css';
import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Widget from './Components/Widget/Widget';

function App() {
  return (
    <div className="app">
      {/* Sidebar */} 
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widget />
    </div>
  );
}

export default App;

  