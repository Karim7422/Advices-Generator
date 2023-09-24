import React, { useEffect, useState } from "react";
import iconDice from "../src/assets/images/icon-dice.svg";
import pesudo from "../src/assets/images/pattern-divider-desktop.svg"
export default function Advices() {
    const [advice, setAdvice] = useState("");

    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        console.log(data);
        setAdvice(data);
    }

    useEffect(() => {
        getAdvice();
    }, []);
    return (
        <main>
            {advice && (
                <div className="adviceBox">
                    <span>ADVICE #{advice.slip.id}</span> <p>❝ {advice.slip.advice} ❞</p>
                    <img src={pesudo} alt="pesudo" />
                </div>
            )}
            <div className="icon" onClick={getAdvice}>
                <img src={iconDice} alt="icon-dice" />
            </div>
        </main>
    );
}
