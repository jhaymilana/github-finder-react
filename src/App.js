import './style/index.css';
import { Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import User from './pages/User';

function App() {
  return (
    <main>
      <Routes>
        <Route exact path="/github-finder-react" element={<Search/>}/>
        <Route exact path="/user/:topic" element={<User/>}/>
      </Routes>
    </main>
  );
}

export default App;
