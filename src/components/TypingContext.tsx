import React, {createContext, useContext} from "react";

interface TypingContextType{
    wpm:number
}

export const TypingContext = createContext<TypingContextType |undefined>(undefined);

export const TypingProvider = ({children,wpm,} :{children:React.ReactNode; wpm:number;}) =>{
    
    return (
        <TypingContext.Provider value={{wpm}}>
            {children}
        </TypingContext.Provider>
    );
};

export const useTyping =() => {
    const context = useContext(TypingContext);
    if(!context) throw new Error("useTyping must be used within a TypingProvider");
    return context;
}



