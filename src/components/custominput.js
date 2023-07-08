export default function CustomInput(props){
    let  handleSubmit=(e)=>{
        e.preventDefault();
        let message=e.target.inputMessage.value
        if(props.global===true)
        props.connec.emit("message-sent",message);
        else
        {
            props.connec.emit('private-message',{
                "from":props.from,
                "to":props.to,
                "message":message
            })
        }
        e.target.inputMessage.value="";
    }
    return (
        <>
            <form
            onSubmit={handleSubmit}
            className="borde w-[100%] flex items-center justify-center
            "
            >
                <input type="text" name="inputMessage"
                required
                placeholder=":/type_something"
                pattern='\s*[\S]{1,}.*'
                onInvalid={e=>e.target.setCustomValidity("Write your message here")}
                className="
                outline-none
                
                border-b-[1px]
                border-[#10aa10]
                m-2 p-3 
                w-[70%]
                bg-inherit
                invalid:border-green-800
                placeholder:italic
                placeholder:font-light
                font-light
                "
                />
                <button type="submit"
                className="
                    bg-green-600
                    p-3
                    text-white
                    
                "
                >
                    Send
                </button>
            </form>
        </>
    )
}