import { useEffect, useState } from 'react';
import RainBar from './rainBar';
function RainEffect(props) {
  
  const [rainbars,setRain]=useState([]);
  useEffect(()=>{
  
    let number= Math.ceil(window.outerWidth/40);
    console.log(window.innerWidth)
    for(let i=0;i<number-1;i++)
    {
      let start=Math.floor(Math.random()*3000);
      setRain(rain=>[...rain,<RainBar key={i} startTime={start}/>])
    }

  },[])

  return (
    <div className={`flex absolute ${(props.welcome || props.chatBox)?'blurRain':''} `}>
        {rainbars}
    </div>
  );
}

export default RainEffect;
