import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
export default function Login(props)
{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [passCheck,setPassCheck]=useState(true);
    const [userCheck,setUserCheck]=useState(true);
    const navigate=useNavigate();

    let handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:80/login",{"userName":username,"password":password})
        .then(res=>{
            // Logged in 
            props.name(username);
            props.log(true);
            console.log(res);
            setUserCheck(true);
            setPassCheck(true);
        })
        .catch(error=>{
            if(error.response.status===403)
            {
                //Wrong password
                setPassCheck(false);
                setUserCheck(true);
            }
            else if(error.response.status===404)
            {
                // User not found ? Ask to redirect to SignUp page
                setUserCheck(false);
                setPassCheck(true);
            }
        })
    }
    let directToSignUp=(e)=>{
        e.preventDefault();
        navigate('/signup');
    }
    return (
        <div className="
            h-[250px] w-[350px] flex justify-center items-center
            bg-[#3d3d3d52]
            backdrop-blur-sm surface
        ">
            <form onSubmit={handleSubmit}>
                <label className="text-sm">Username</label><br />
                <input type="text" name="username" required
                className="mb-5 bg-inherit outline-none border-b-[.1px] border-green-700 p-2 focus:border-green-400 focus:bg-[#3d3d3d76]"
                onChange={e=>{setUsername(e.target.value) 
                    setUserCheck(true)}}
                /><br />
                <label className="text-sm">Password</label><br />
                <input type="password" name="password" required
                className="bg-inherit outline-none border-b-[.1px] border-green-700 p-2 focus:border-green-400 focus:bg-[#3d3d3d76]"
                onChange={e=>{setPassword(e.target.value)
                            setUserCheck(true)}}
                /><br />
                {!passCheck && <div className="text-xs text-[#ff0909]">incorrect password</div>}
                {!userCheck && <div className="text-xs text-[#ff0909]">user not found</div>}

                <div className="flex justify-center mt-5 font-bold">
                    {userCheck && <button type="submit" className="bg-[#27d427] py-1 px-2 text-black">Login</button>}
                    {!userCheck && <button  className="bg-[#27d427] py-1 px-2 text-black"
                        onClick={directToSignUp}>Sign Up</button>}
                </div>

            </form>
        </div>
    )
}