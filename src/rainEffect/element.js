
export default function Element(props){
    
    return (
        <div className={`${props.new?'text-white':'fade'}`}>{props.char}</div>
    )
}