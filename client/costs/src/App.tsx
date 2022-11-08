import React from 'react';
import {Header} from "./components/header/header";
import {AuthPage} from "./components/AuthPage/AuthPage";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
            <Routes>
                <Route path='/' element={<AuthPage type='login' />} />
            </Routes>
        </Router>

    </div>
  );
}

export default App;
