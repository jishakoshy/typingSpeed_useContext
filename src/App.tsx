// import React from 'react';
// import { ThemeProvider } from './components/ThemeContext';
// import Header from './components/Header';
// import ThemeButton from './components/ThemeButton';


// import { UserProvider } from './components/UserContext';
// import Profile from './components/profile';
// import Login from './components/login';


// const App = () => {
//   return (
//     <div className="container">
//       <ThemeProvider>
//         <Header />
//         <ThemeButton />
//       </ThemeProvider>
      
//       <UserProvider>
//         <h1>useContext 2</h1>
//         <Login />
//         <Profile />
//     </UserProvider>
      
      
//     </div>
//   );
// };

// export default App;




import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { TypingProvider } from './components/TypingContext';
import  TypingStates  from './components/TypingStats';


const STARTING_TIME = 10;

const App: React.FC = () => {
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [wpm, setWpm] = useState(0);

  const textBoxRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const calculateWordCount = (text: string): number => {
    const words = text.trim().split(' ').filter(word => word !== '');
    return words.length;
  };

  const startGame = () => {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText('');
    setWordCount(0);
    setWpm(0);
    
    if (textBoxRef.current) {
      textBoxRef.current.disabled = false;
      textBoxRef.current.focus();
    }
  };

  const endGame = () => {
    setIsTimeRunning(false);
    const words = calculateWordCount(text);
    setWordCount(words);
    const timeTaken = STARTING_TIME;
    const speed = Math.round((words / timeTaken) * 60);
    setWpm(speed);
  };

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && isTimeRunning) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
     
    <div className="container">
      <TypingProvider wpm={wpm}>
        <h1>Typing Speed Tester</h1>
        <textarea
          ref={textBoxRef}
          disabled={!isTimeRunning}
          value={text}
          onChange={handleChange}
          placeholder="Start typing when you press Start"
        />
        <h4>Time Remaining: {timeRemaining}s</h4>
        <button onClick={startGame} disabled={isTimeRunning}>Start</button>
        <h2>Word Count: {wordCount}</h2>

        <h2>Typing Speed : {wpm} wpm</h2>

        <TypingStates/>
      </TypingProvider>
    </div>
  );
};

export default App;
