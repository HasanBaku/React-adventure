import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Homepage from './components/homepage';
import Services from './components/services';
import Footer from './components/footer';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/services' element={<Services />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
