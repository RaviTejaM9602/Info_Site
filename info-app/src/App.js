import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
  return (
      <div className="container">
      <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
          <Main />
      </div>
  )
}

