import { Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './layout/Layout';

function App() {
  const navigate = useNavigate();

  return (
    <Layout>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Layout>
    
  );
}

export default App;
