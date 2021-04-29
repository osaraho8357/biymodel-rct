import './index.scss';
import Navbar from '../Navbar'
import Home from '../Home';
import Footer from '../Footer'


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="wrap">
          <Navbar />
        </div>
      </div>
      <div className="main">
        <Home />
      </div>
    </div>
  );
}

export default App;
