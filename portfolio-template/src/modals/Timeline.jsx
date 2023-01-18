import { useState } from 'react'

export function Timeline(props) {

    const [isColored, setIsColored] = useState(false);

    const { id, year, yearGap, text, isLast } = props;

    function handleMouseEnter(){
        setIsColored(true);
    }

    function handleMouseLeave(){
        setIsColored(false);
    }

    return (
        <div>
            <div
                className="timeline flex gap-5 justify-center items-center w-[600px] h-[180px]"
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
            >
                <div className="div viivat flex gap-5 justify-center items-center w-1/4">
                    <p className={`text-red-400 font-bold ${isColored ? "-translate-x-4" : ""} duration-300`}>{year}</p>
                    <div className="ball w-10 h-10 border-4 border-red-400 rounded-[200px] relative flex items-center justify-center">
                        <div className={`smallBall absolute w-5 h-5 ${isColored ? "bg-red-400" : "bg-neutral-800"} rounded-[200px] duration-300`}>
                        </div>
                        {!isLast && <div className="line w-1 h-[100px] absolute bg-red-400 -bottom-[120px]"></div>}
                    </div>
                </div>
                <div className="text flex gap-3 items-center w-3/4">
                    <p className={`${isColored ? "text-white" : "text-slate-300"} pl-8 font-bold duration-300`}>{yearGap}</p>
                    <p className={`${isColored ? "text-white" : "text-slate-300"} duration-300`}>{text}</p>
                </div>
            </div>
        </div>
    )
}