import { useState,useEffect } from "react";
export default function SignUp()
{   
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [confpassword,setConfPassword]=useState('');
    const [passcheck,setPassCheck]=useState(true);
    let handleSubmit=(e)=>{
        e.preventDefault();
        if(confpassword!==password)
        {   
            setPassCheck(false);
        }
        else{
            alert("Success");
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
            backdrop-blur-sm
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
                <div className="flex justify-center mt-5">
                    <button type="submit" className="bg-[#27d427] py-1 px-2 text-black">Sign Up</button>
                </div>

            </form>
        </div>
    )
}