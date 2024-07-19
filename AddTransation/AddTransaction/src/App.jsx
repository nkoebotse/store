import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/Login';
import Register from './Components/Register';
import Employee from './Components/Employee';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={AdminLogin} />
        <Route path="/register" Component={Register} />
        <Route path="/employee" Component={Employee} />
      </Routes>
    </Router>
  );
}

export default App;
