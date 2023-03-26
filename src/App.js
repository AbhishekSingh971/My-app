import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About';
import Alert from './components/Alert'
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  // This is for alert
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  // This is for color backgrounds
  //    function removeBodyClasses(){
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-info');
  //   document.body.classList.remove('bg-primary');
  // }

  const toggleMode = (/*cls*/)=>{
    // removeBodyClasses()
    // document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success")
    // document.title = "Textutils - Dark Mode"
    // setInterval(()=>{
    //   document.title = "Textutils is Amazing Mode";
    // }, 2000)
    // setInterval(()=>{
    //   document.title = "Install Textutils Now";
    // }, 1500)
  }

  // This is for background different colors
  // else if(cls === 'primary'||cls === 'danger'||cls === 'success'||cls === 'info'){
  //     document.body.classList.add('text-light')
  //     document.getElementById('myBox')
  //   }
  //   else if(cls === 'warning'){
  //   document.body.classList.add('text-dark')
  // }

  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success")
    // document.title = "Textutils - Light Mode"
    }
  }
  return (
  <>
  <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <Switch>
          <Route exact path="/about">
            <About  mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    </Router>
  </>
  );
}

export default App;
