import React from "react";

import { useTyping } from "./TypingContext";

const TypingStates : React.FC = () => {
    const {wpm} = useTyping();

    return(
        <div>
            <h2>Typing Speed : {wpm} wpm</h2>
        </div>
    );
};

export default TypingStates