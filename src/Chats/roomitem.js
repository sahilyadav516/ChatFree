import { useNavigate } from "react-router-dom"
export default function RoomItem(props)
{
    const navigate=useNavigate();
    let handleClick=()=>{
        if(props.global)
        {
            navigate("/global")
        }
        else
        {
            navigate("/private/"+props.name);
        }
    }
    return (
        <div className="w-[100%]
        outlin outline-[1px]
        px-3 py-2 sm:py-3 my-1
        backdrop-blur-sm
        bg-[#45454595]
        cursor-pointer
        select-none
        flex justify-between
        "
        onClick={handleClick}
        >
            {props.name}
        </div>
    )
}