
import React from 'react';
import './App.css';
import MoodChart from './components/MoodChart';
import RecipientSelect from './components/RecipientSelect';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <h1>Pigeon 🕊</h1>
      <Section title='Recipient'>
        <RecipientSelect />
      </Section>
      <MoodChart />
    </div>
  );
}

export default App;
