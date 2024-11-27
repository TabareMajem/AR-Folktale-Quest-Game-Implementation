import React from 'react';
import { useGameStore } from './store/gameStore';
import StartScreen from './components/StartScreen';
import ARScene from './components/ARScene';

function App() {
  const currentQuest = useGameStore((state) => state.currentQuest);

  return (
    <div className="min-h-screen">
      {currentQuest ? <ARScene /> : <StartScreen />}
    </div>
  );
}

export default App;