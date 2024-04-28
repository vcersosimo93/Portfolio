import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './componentes/Header.jsx';


const WithHeaderLogin = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
