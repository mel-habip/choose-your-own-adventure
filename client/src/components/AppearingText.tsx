import { useEffect, useState } from "react";


export default function AppearingText({ text }: { text: string }) {


    const [innerText, setInnerText] = useState('');
    const [isDone, setIsDone] = useState(false);

    //might need to use animationFrame API here

    useEffect(() => {
        setInnerText('');
        setIsDone(false);
    }, [text]);


    useEffect(() => {
        if (isDone) return;

        const timer = setInterval(() => {
            setInnerText(p => {
                if (text[p.length]) {
                    return p + text[p.length]
                } else {
                    setIsDone(true);
                    return p;
                }
            });
        }, 25);

        return () => {
            clearInterval(timer);
        }

    }, [isDone, text]);

    return <h2 className="typewriter" >{innerText}</h2>
}