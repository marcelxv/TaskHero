import React from "react";
import "./App.css";
import { TodoContextProvider } from "./context/TodoContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LogInPage from "./pages/LogInPage";
import TodoApp from "./pages/TodoApp";
import { app } from "./firebase.config";

function App() {
  console.log(app)
  return (
    <TodoContextProvider>
      <Router>
        <Routes>
          <Route path="/app" element={<TodoApp/>} />
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </Router>
    </TodoContextProvider>
    
  );
}
export default App;
