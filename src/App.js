
import './Appa.css';
import Navbar from './components/Navbar';
import About from './components/About';
import React,{useState}from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App(){
  const[mode,setMode]=useState('light'); //whether darkmode enabled or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
  const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='grey';
      showAlert("Dark mode has been enabled","success");
    document.title='Textutils-Dark Mode';
    }
   else{
    setMode('light');
    document.body.style.background='white';
    showAlert("Light mode has been enabled","success");
    document.title='Textutils-Light Mode';
  }
  }
  return (
    <>
{/*<Navbar title="TextUtils2" aboutText="about textutils"/>

{/*<Navbar/>*/}
<Router>
<Navbar title="TextUtils2" mode={mode}toggleMode={toggleMode}/>
<Alert alert={alert} />
<div className="container my-3">

   <Routes>
      {/*react do partial  mtching so imp o write exact path*/}
            <Route exact path="/about" element={<About  mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Try Textutils-Word counter,Character counter"  mode={mode} showAlert={showAlert} />}>
            </Route>
  </Routes>

{/*<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />*/}

{/*<About/>*/}
</div>
</Router>

    </>
  );
}

export default App;
