import { useEffect,useState } from "react";
import Chat from './chat';
import CustomInput from './custominput';
import TextContainer from './textContainer';
import { io } from 'socket.io-client';
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons"
export default function PrivateChat(props){
    const [socket1,setSocket]=useState();
    const [messages,setMessages]=useState([]);
    const params=useParams();
    const navigate=useNavigate();
    let to=params.id;  
    useEffect(()=>{
        console.log(to)
        let index=0;
        axios.get("http://localhost:80/allPrivateMessage",{params:{
            "user1":props.from,
            "user2":to
        }}).then((res)=>{
            let data=res.data;
            for(let i=0;i<data.length;i++)
            {
              setMessages(messages=>[...messages,<Chat key={index++} name={data[i].from} message={data[i].message}/>]);
            }

        }).catch((e)=>{
          console.log(e);
        })
        let socket=io("http://localhost:80",{query:{"username":props.from}});
        setSocket(socket);
        socket.on("new-private-message",res=>{
          if(res.from===props.from || res.from===to)
          setMessages(messages=>[...messages,<Chat key={index++} name={res.from} message={res.message}/>]);
      })

    },[])
    return (
        <div 
        className='outlin
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
          <CustomInput from={props.from} to={to} global={false} connec={socket1}/>
        </div>
    )

}