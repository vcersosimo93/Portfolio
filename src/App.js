import logo from './logo.svg';
import './App.css';
import Main from './componentes/Main.jsx';
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    document.title = 'Vicente Cersósimo';
  }, []);

  return (
    <>
    <Main/>
    </>
  );
}

export default App;
