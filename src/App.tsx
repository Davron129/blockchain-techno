import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Article from './pages/Article';
import Contact from './pages/Contact';

function App() {

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
