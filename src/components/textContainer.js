export default function TextContainer(props){
    return (
        <>
            <div
            className="border-b-[.1px]
            border-green-700
            px-2 py-3
            w-full h-[450px] sm:h-[55vh]
            overflow-scroll
            backdrop-blur-lg
            bg-[#2121219a]
            flex flex-col-reverse
            "
            >
                <div className="outl">
                {props.mess}
                </div>
                
            </div>
        </>
    )
}