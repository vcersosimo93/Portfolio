import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './componentes/Header.jsx';
import Main from './componentes/Main.jsx';
import Projects from './componentes/Projects.jsx';


const WithHeaderLogin = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

function App() {
  return (
    <>

    <Main/>
    </>
  );
}

export default App;
