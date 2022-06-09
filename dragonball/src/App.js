import './App.css';
import { useState } from 'react'
import StartMenu from './components/StartMenu/StartMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Battle from './components/Battle/Battle'
import EndMenu from './components/EndMenu/EndMenu';
function App() {
  const [mode, setMode] = useState('start');
  const [winner, setWinner] = useState();
  return (
    <div className='main' >
      {mode === 'start' && (
        <StartMenu onStartClick={() => setMode('battle')} />
      )}
      {mode === 'battle' && <Battle onGameEnd={winner => {
        setWinner(winner);
        setMode('gameOver')
      }} />}
      {mode === 'gameOver' && !!winner && (
        <EndMenu winner={winner} onStartClick={() => setMode('battle')} />
      )}

    </div>
  );
}

export default App;
