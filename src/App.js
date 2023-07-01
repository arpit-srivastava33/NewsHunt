import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<News key="general" category="general"/>}/>
     <Route path="/business" element={<News key="business" category="business"/>}/>
     <Route path="/entertainment" element={<News key="entertainment" category="entertainment"/>}/>
     <Route path="/health" element={<News key="health" category="health"/>}/>
     <Route path="/sports" element={<News key="sports" category="sports"/>}/>
     <Route path="/science" element={<News key="science" category="science"/>}/>
     <Route path="/technology" element={<News key="technology" category="technology"/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
