import React from "react";
import { TodoContextProvider } from "./context/TodoContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LogInPage from "./pages/LogInPage";
import TodoApp from "./pages/TodoApp";
import { app } from "./firebase.config";
import {ThemeProvider} from '@primer/react'
function App() {
  console.log(app)
  return (
    <TodoContextProvider>
    <ThemeProvider >
      <Router>
        <Routes>
          <Route path="/app" element={<TodoApp/>} />
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </TodoContextProvider>
    
  );
}
export default App;
