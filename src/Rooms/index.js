import RoomItem from "./roomitem"
export default function Room(){
    return (
        <div className="outlin
        w-[60%] sm:w-[80%] h-[450px] sm:h-[45vh]
        px-6 py-3
        overflow-scroll
        backdrop-blur-sm
        bg-[#2121218d]
        flex flex-col
        items-center
        ">
            {/* <div className="text-3xl">
                Rooms
            </div> */}
            <RoomItem name="billoantiNationals" code={"AE245"}/>


            

        </div>
    )
}