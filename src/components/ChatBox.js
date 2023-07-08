import { useEffect,useState } from "react";
import Chat from './chat';
import CustomInput from './custominput';
import TextContainer from './textContainer';
import { io } from 'socket.io-client';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ArrowLeftOutlined} from '@ant-design/icons'
export default function Chatbox(props){
    const [socket1,setSocket]=useState();
    const [messages,setMessages]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
          
        let index=0;
        axios.get("https://chatfree-server.onrender.com/allMessage").then((res)=>{
            let data=res.data;
            for(let i=0;i<data.length;i++)
            {
              setMessages(messages=>[...messages,<Chat key={index++} name={data[i].userName} message={data[i].message}/>]);
            }
        }).catch((e)=>{
          console.log(e);
        })
        let socket=io("https://chatfree-server.onrender.com",{query:{"username":props.name}});
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
          <div className="self-start outline-[.1px] cursor-pointer hover:outline transition-all px-2 py-1 mb-2 text-2xl flex justify-center items-center"
          onClick={()=>{
            navigate("/")
          }}
          > 
          <ArrowLeftOutlined />
          </div>
          <TextContainer mess={messages}/>
          <CustomInput global={true} connec={socket1}/>
        </div>
    )

}