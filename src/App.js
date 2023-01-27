import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Posts from './components/Posts';
import Navibar from './components/Navibar';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navibar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='profile' element={<Profile />} />
        <Route path='posts' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
