import logo from './logo.svg';
import './App.css';
import NavbarWWC from './components/NavbarWWC'
import ListItems from './components/ListItems'
import WebcamNavbar from './components/WebcamNavbar'


function App() {
  return (
    <div className="App">
      {/* <NavbarWWC/> */}
      <WebcamNavbar/>
      <ListItems></ListItems>
    </div>
  );
}

export default App;
