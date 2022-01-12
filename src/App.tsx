import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Article from './pages/Article';
import Contact from './pages/Contact';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const AppStyle = {
  width: "100vw",
  height: "100vh",
  overflow: "hidden"
}

interface RootState {
  scroll: { isScrollable: boolean }
}

function App() {
  const scroll = useSelector((state: RootState) => state.scroll);

  return (
    <div className="App" style={scroll.isScrollable ? AppStyle : {}} >
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
