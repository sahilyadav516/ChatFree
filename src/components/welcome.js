import { useEffect, useState } from "react"

export default function Welcome(props){
    const [text,setText]=useState('');

    useEffect(()=>{

        let characters=['ア','ァ','カ','サ','タ','ナ','ハ','マ','ヤ','ャ','ラ','ワ','ガ','ザ','ダ','バ','パ','イ','ィ','キ','シ','チ','ニ','ヒ','ミ','リ','ヰ','ギ','ジ','ヂ','ビ','ピ','ウ','ゥ','ク','ス','ツ','ヌ','フ','ム','ユ','ュ','ル','グ','ズ','ブ','ヅ','プ','エ','ェ','ケ','セ','テ','ネ','ヘ','メ','レ','ヱ','ゲ','ゼ','デ','ベ','ペ','オ','ォ','コ','ソ','ト','ホ','モ','ヨ','ョ','ロ','ヲ','ゴ','ゾ','ド','ボ','ポ','ヴ','ッ','ン'];
        let size=props.message.length;
        for(let i=0;i<size;i++)
        {
            setText(text=>text+characters[Math.floor(Math.random()*100)%characters.length])
        }
        let counter=0;
        let incrementCounter=setInterval(()=>{
            // eslint-disable-next-line
            if(counter==size)
            clearInterval(incrementCounter);
            else
            counter++;
        },80)
        let randomGen=setInterval(()=>{
            setText(()=>{
                let temp='';
                for(let i=0;i<size;i++)
                {
                    if(i<=counter)
                    {
                        temp+=props.message[i];
                    }
                    // eslint-disable-next-line
                    else if(i==counter+1)
                    {
                        temp+=characters[Math.floor(Math.random()*100)%characters.length];
                    }
                    else
                    {
                        temp+=' '
                    }
                }
                return temp;
            })
            // eslint-disable-next-line
            if(counter==size)
            clearInterval(randomGen);
        },10)
        // eslint-disable-next-line
    },[])
    return (
        <div className="outlin fades
            text-4xl sm:text-3xl
            whitespace-pre
            text-[#40ff5a]
        ">
            {text}
        </div>
    )
}