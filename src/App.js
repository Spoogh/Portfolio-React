import './App.css';
import BucketList from './components/BucketList';
import Picandbio from './components/info';
import Navi from './components/header';
import Footer from './components/footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './index.css';

const path = process.env.REACT_APP_FOR_PATH;

function App() {
  return (
    <div>
      <Router>
    <Navi/>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
   <Footer/>
   </Router>
   </div>
  );
}

export default App;
