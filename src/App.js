import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import TodoPage from './pages/TodoPage';
import AboutPage from './pages/AboutPage';

function App() {




  
  return (
    <TodoProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          {/* Replace Switch with Routes */}
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<TodoPage />} />
          </Routes>
        </div>
      </Router>
    </TodoProvider>
  );
}

export default App;
