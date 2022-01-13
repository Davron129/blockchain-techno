import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Article from './pages/Article';
import Contact from './pages/Contact';

interface RootState {
  colorScheme: {
    isLight: boolean
  }
}

function App() {
  const colorScheme = useSelector((state: RootState) => state.colorScheme.isLight);

  useEffect(() => {
    document.body.setAttribute("color-scheme", colorScheme ? "light" : "dark");
  }, [colorScheme]);

  return (
    <div className="App">
        <Routes>
           <Route element={<MainPage />} >
              <Route path={"/"} element={<></>}  />
              <Route path="/article/:id" element={<Article />} />
              <Route path="/contact" element={<Contact />} />
           </Route>
        </Routes>
    </div>
  );
}

export default App;
