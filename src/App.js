// import logo from './logo.svg';
import React ,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  HashRouter as Router, Route, Routes
} from "react-router-dom";


  // Add more routes as needed



function App() {
  const[mode,setMode]=useState('light')
  const[text,setText] = useState("Dark")
  const[alert,setAlert]=useState(null)
  const alertin=(Message,type)=>{
    setAlert({
      msg: Message,
      type: type

    })
    setTimeout(() => {
      setAlert(null)
    }, 1600);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      setText("Light")
      alertin(" Changed to Dark","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';

      setText("Dark")
      alertin(" Changed to Light","success")
    }
  }
  
  return (
    <>
    
     {/* <Navbar/>  */}
     <Router>
      <Navbar title="TextHR" mode={mode} text={text} toggleMode={toggleMode} about="About" />
      <Alert alert={alert} alertin={alertin} />
      <div className="container my-3">
        <Routes>
          <Route
            exact path="/"
            element={<TextForm mode={mode} alertin={alertin} text={text} toggleMode={toggleMode} heading="Please Provide the following details" />}
          />
          <Route
            exact path="/about"
            element={<About mode={mode} text={text} toggleMode={toggleMode} />}
          />
        </Routes>
      </div>
    </Router>
    
    
    </>
  );
}

export default App;