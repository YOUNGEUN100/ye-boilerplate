import { Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage'
import ArticleList from './pages/ArticleList'
import Layout from './layout/Layout';
import { useCookies } from 'react-cookie';

function App() {
  // const navigate = useNavigate();

  const [cookies] = useCookies(['token']);
  const cookieToken = cookies.token;
  let isLogin = false;
  if (cookieToken) {
    isLogin = true;
  }

  return (
    <Layout>
        <Routes>
        <Route path="/" element={isLogin ? <ArticleList /> : <Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Layout>
    
  );
}

export default App;
