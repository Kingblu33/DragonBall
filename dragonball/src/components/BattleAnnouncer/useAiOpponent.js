import { useEffect, useState } from "react";
export const useAiOpponent = turn => {
    const [aiChoice, setAiChoice] = useState('');

    useEffect(() => {

        if (turn === 1) {
            const options = ['attack', 'magic', 'heal'];

            setAiChoice(options[Math.floor(Math.random() * options.length)]);
        }
    }, [turn])

    return aiChoice;
}