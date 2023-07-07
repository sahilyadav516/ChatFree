import { useEffect,useState } from "react";
import Chat from './chat';
import CustomInput from './custominput';
import TextContainer from './textContainer';
import { io } from 'socket.io-client';
import axios from "axios";
export default function Chatbox(props){
    const [socket1,setSocket]=useState();
    const [messages,setMessages]=useState([]);
    useEffect(()=>{
          
        let index=0;
        axios.get("http://localhost:80/allMessage").then((res)=>{
            let data=res.data;
            for(let i=0;i<data.length;i++)
            {
              setMessages(messages=>[...messages,<Chat key={index++} name={data[i].userName} message={data[i].message}/>]);
            }
        }).catch((e)=>{
          console.log(e);
        })
        let socket=io("http://localhost:80",{query:{"username":props.name}});
        setSocket(socket);
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