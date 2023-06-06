import { useEffect,useState } from "react"

export default function Chat(props){
    const [message,setMessage]=useState();
    
    useEffect(()=>{
            let size=props.message.length;
            let i=0;
            let temp="";
            let temp1=setInterval(()=>{
                // eslint-disable-next-line
                if(i==size)
                clearInterval(temp1);
                else
                {
                    temp+=props.message[i];
                    setMessage(temp);
                    i++;
                }
            },41)
            return ()=>clearInterval(temp1);
            // eslint-disable-next-line
    },[])
    
    return (
        <div className="
            outlin
            p-1
            font-light
        ">
            <div className="
                outlin inline
            "
            >
            {'->'} {props.name} :
            </div>
            <div className="
                outlin inline
                pl-2
            ">
                {message}
            </div> 
        </div>
    )
}