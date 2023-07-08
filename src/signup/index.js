import { useState,useEffect } from "react";
import axios from 'axios'
import {useNavigate} from  'react-router-dom'
export default function SignUp()
{   
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [confpassword,setConfPassword]=useState('');
    const [passcheck,setPassCheck]=useState(true);
    const [userCheck,setUserCheck]=useState(true);
    const navigate=useNavigate();
    let handleSubmit=(e)=>{
        e.preventDefault();
        if(confpassword!==password)
        {   
            setPassCheck(false);
        }
        else{
            axios.post("https://chatfree-server.onrender.com/signup",{"userName":username,"password":password}).then((res)=>{
                console.log(res);
                setUserCheck(true);
                //After this redirect to login page.
                // Use router to redirect to login page.
                navigate('/');
            })
            .catch(e=>{
                console.log(e.response.status);
                if(e.response.status===403)
                {
                    setUserCheck(false);
                }
                //Already present ask to redirect to login page.
            })
        }

    }
    useEffect(()=>{
        if(confpassword!==password)
        {
            setPassCheck(false);
        }
        else
            setPassCheck(true);
    },[confpassword])
    return (
        <div className="
            h-[350px] w-[350px] flex justify-center items-center
            bg-[#3d3d3d52]
            backdrop-blur-sm surface
        ">
            <form onSubmit={handleSubmit}>
                <label className="text-sm">Username</label><br />
                <input type="text" name="username" required placeholder="start here"
                className="mb-5 bg-inherit outline-none border-b-[.1px] border-green-700 p-2 focus:border-green-400 focus:bg-[#3d3d3d76]"
                onChange={(e)=>{setUsername(e.target.value)}}
                pattern="[a-zA-Z0-9@]+[\s]*"
                /><br />
                <label className="text-sm">Password</label><br />
                <input type="password" name="password" required
                className=" mb-5 bg-inherit outline-none border-b-[.1px] border-green-700 p-2 focus:border-green-400 focus:bg-[#3d3d3d76]"
                onChange={(e)=>{setPassword(e.target.value)}}
                /><br />
                <label className="text-sm">Confirm Password</label><br />
                <input type="password" name="confirmpassword" required
                className={`${passcheck?"":"!border-[red]"} bg-inherit outline-none border-b-[.1px] border-green-700 p-2 focus:border-green-400 focus:bg-[#3d3d3d76]`}
                onChange={(e)=>{setConfPassword(e.target.value)}}
                /><br />
                {!passcheck && <div className="text-xs text-[#ff0909]">enter same password</div>}
                {!userCheck && <div className="text-xs text-[#ff0909]">user already exists</div>}
                <div className="flex justify-center mt-5 font-bold">
                    {userCheck && <button type="submit" className="bg-[#27d427] py-1 px-2 text-black">Sign Up</button>}
                    {!userCheck && <button className="bg-[#27d427] py-1 px-2 text-black"
                        onClick={()=>{navigate('/')}}>Log In</button>}
                </div>

            </form>
        </div>
    )
}