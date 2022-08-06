import React from "react";
import "./App.css";
import { ThemeProvider } from 'styled-components';
import { taskHeroTheme } from "./theme/taskhero-theme";
import { TodoContextProvider } from "./context/TodoContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LogInPage from "./pages/LogInPage";
import TodoApp from "./pages/TodoApp";
import styled from "styled-components";

const PageWrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizes.small};
  padding: 1rem;
  background-color: ${props => props.theme.colors.primary};
  `;

function App() {

  return (
    <TodoContextProvider>
    <ThemeProvider theme={taskHeroTheme}>
    <PageWrapper>
      <Router>
        <Routes>
          <Route path="/app" element={<TodoApp/>} />
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </Router>
    </PageWrapper>
    </ThemeProvider>
    </TodoContextProvider>
    
  );
}
export default App;
