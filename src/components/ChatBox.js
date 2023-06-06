import { useEffect,useState } from "react";
import Chat from './chat';
import CustomInput from './custominput';
import TextContainer from './textContainer';
import { io } from 'socket.io-client';
export default function Chatbox(){
    const [socket1,setSocket]=useState();
    const [messages,setMessages]=useState([]);
    useEffect(()=>{
        let socket=io("http://localhost:80");
        setSocket(socket);
        let index=0;
        socket.on("new-message",res=>{
          setMessages(messages=>[...messages,<Chat key={index++} name={res.name} message={res.message}/>]);
      })

    },[])
    return (
        <div 
        className='
          w-[60%] sm:w-[90%] outlin p-3
          flex flex-col justify-center items-center surface
        '>
          <TextContainer mess={messages}/>
          <CustomInput connec={socket1}/>
        </div>
    )

}