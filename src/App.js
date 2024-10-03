import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Request from './component/Request';
import YesPage from './component/YesPage';
import NoPage from './component/NoPage'; 
import AgainNo from './component/AgainNo'
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Request />} />
      <Route path="/yes" element={<YesPage />} />
      <Route path="/no" element={<NoPage />} />
      <Route path="/againno" element={<AgainNo />} />
    </Routes>
  </Router>
  );
}

export default App;
