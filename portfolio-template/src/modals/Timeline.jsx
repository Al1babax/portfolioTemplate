
import React, { useState } from 'react';

export function Timeline(props) {

    const [isColored, setIshighlighted] = useState(false);
    const { id, year, yearGap, text, isLast, } = props;

    function handleMouseEnter() {
        setIshighlighted(true);
    }
    function handleMouseLeave() {
        setIshighlighted(false);
    }

    console.log(year, yearGap, text, isLast);
    return (

        <div className="timeline flex gap-5 justify-center items-center w-[600px] h-[180px]"
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={() => handleMouseLeave(id)}
        >
            <div className="div viivat flex gap-5 justify-center items-center w-1/4">
                <p className={`text-red-500 font-sans ${isColored ? "-translate-x-4 text-xl" : ""} hover:-translate-x-4 duration-300`}>{year}</p>
                <div className="bal w-10 h-10 border-4 border-red-500 rounded-[200px] relative flex items-center justify-center">
                    <div className={`"smallball absolute w-5 h-5 bg-red-500 ${isColored ? "bg-red-700" : ""} rounded-[200px] duration-300"`}>
                    </div>
                    {!isLast && <div className="line w-1 h-[100px] absolute bg-red-500 top -bottom-[120px]" name="viiva"></div>}
                </div>
            </div>
            <div className="text flex gap-3 items-center w-3/4">
                <p className={`"pl-8 font-serif ${isColored ? "text-white" : ""} duration-300`}>{yearGap}</p>
                <p className={`"pl-8 font-serif ${isColored ? "text-white" : ""} duration-300`}>{text}</p>
            </div>
        </div>
    );
}