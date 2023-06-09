import { useEffect, useState } from 'react';
import './App.css';
import Chatbox from './components/ChatBox';
import Welcome from './components/welcome';
import RainEffect from './rainEffect';
import Login from './login';
function App() {
  const [showWelcome,setshowWelcome]=useState(false);
  const [showChatBox,setshowChatBox]=useState(false);
  useEffect(()=>{

    setTimeout(()=>{
      setshowWelcome(true);
    },5000)
    setTimeout(()=>{
      setshowChatBox(true);
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
          {/* {<RainEffect chatBox={showChatBox} welcome={showWelcome}/>} */}
          {/* {showWelcome && <Welcome message={"Welcome to ChatFree"}/>} */}
          {/* {showChatBox&&<Chatbox/> } */}
          <Login/>
      </div>
      </>
  );
}

export default App;
