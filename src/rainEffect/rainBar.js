import { useEffect, useState } from 'react';
import Element from './element';
function RainBar(props) {
  const [items,setItems]=useState([]);
  let characters=['ア','ァ','カ','サ','タ','ナ','ハ','マ','ヤ','ャ','ラ','ワ','ガ','ザ','ダ','バ','パ','イ','ィ','キ','シ','チ','ニ','ヒ','ミ','リ','ヰ','ギ','ジ','ヂ','ビ','ピ','ウ','ゥ','ク','ス','ツ','ヌ','フ','ム','ユ','ュ','ル','グ','ズ','ブ','ヅ','プ','エ','ェ','ケ','セ','テ','ネ','ヘ','メ','レ','ヱ','ゲ','ゼ','デ','ベ','ペ','オ','ォ','コ','ソ','ト','ホ','モ','ヨ','ョ','ロ','ヲ','ゴ','ゾ','ド','ボ','ポ','ヴ','ッ','ン','0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  useEffect(()=>{
      for(let i=0;i<40;i++)
      {
        setItems(items=>[...items,<Element new={true} key={i}/>])
      }
      let rainEff
      setTimeout(()=>{
        let target=0;
        rainEff = setInterval(()=>{
  
            setItems(items=>{
              let temp=items.map(item=>{
                // eslint-disable-next-line
                if(target==item.key)
                return <Element new={true} key={item.key} char={characters[(Math.floor(Math.random()*100))%(characters.length)]}/>;
                else
                return <Element new={false} key={item.key} char={item.props.char}/>;
  
              })
              return temp;
            })
            // setItems(items=>[<Element char={characters[(Math.floor(Math.random()*100))%(characters.length)]}/>])
            // eslint-disable-next-line
            if(target==39)
            target=0
            else
            target++;
        },100)
        return ()=>{clearInterval(rainEff)}
      },props.startTime)
      return ()=>{clearInterval(rainEff)}
    // eslint-disable-next-line
  },[])

  return (
    <div className='
        h-[100vh]
        flex flex-col items-center
        w-[40px] m-0
        bg-black
        text-[#40ff5a]
        text-lg
        overflow-clip
    '
    >
              {items}
    </div>
  );
}

export default RainBar;
