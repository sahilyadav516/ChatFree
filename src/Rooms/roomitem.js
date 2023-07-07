export default function RoomItem(props)
{
    return (
        <div className="w-[100%]
        outlin outline-[1px]
        px-3 py-2 sm:py-3 my-1
        backdrop-blur-sm
        bg-[#45454595]
        cursor-pointer
        select-none
        flex justify-between
        ">
            {props.name}
            <div className="text-gray-400">
                #{props.code}
            </div>
        </div>
    )
}