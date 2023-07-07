import { useEffect, useState } from 'react';
import './App.css';
import Chatbox from './components/ChatBox';
import Welcome from './components/welcome';
import RainEffect from './rainEffect';
import Login from './login';
import SignUp from './signup';
import {Routes, Route} from 'react-router-dom'
import Room from './Rooms';
function App() {
  const [showWelcome,setshowWelcome]=useState(false);
  const [showLoginBox,setshowLoginBox]=useState(false);
  const [userName,setUsername]=useState('');
  const [isLogged,setIsLogged]=useState(false);
  useEffect(()=>{

    setTimeout(()=>{
      setshowWelcome(true);
    },5000)
    setTimeout(()=>{
      setshowLoginBox(true);
      setshowWelcome(false);
    },13000)
  },[])

  return (
      <>
      <div className='
        outline
        h-[100vh] w-[100vw]
        flex justify-center items-center
        m-0
      '>
          {<RainEffect chatBox={showLoginBox} welcome={showWelcome}/>}
          {showWelcome && <Welcome message={"Welcome to ChatFree"}/>}
          {isLogged && <Chatbox name={userName}/>}
          <Routes>
            <Route path='/' element={!isLogged && showLoginBox && <Login log={setIsLogged} name={setUsername}/> }/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
          {/* <Room/> */}
      </div>
      </>
  );
}

export default App;
