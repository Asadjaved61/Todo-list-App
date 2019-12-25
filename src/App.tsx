import React from 'react';
import './App.css';
import Header from './Header';
import TodoContainer from './TodoContainer/TodoContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TodoContainer/>
    </div>
  );
}

export default App;
