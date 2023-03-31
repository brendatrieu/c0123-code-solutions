import Accordion from './Accordion';
import './App.css';
import { useState } from 'react';

function App() {
  const [view, setView] = useState('none');
  const topics = [
    {header: "Harry Potter and the Philosopher's Stone",
      content: "It's time to take the magical journey of a lifetime ... Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!"},
    {header: "Harry Potter and the Chamber of Secrets",
      content: "The Dursleys were so mean that hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike. And strike it does.For in Harry's second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor, Gilderoy Lockheart, a spirit named Moaning Myrtle who haunts the girls' bathroom, and the unwanted attentions of Ron Weasley's younger sister, Ginny. But each of these seem minor annoyances when the real trouble begins, and someone--or something--starts turning Hogwarts students to stone.Could it be Draco Malfoy, a more poisonous rival than ever ? Could it possibly be Hagrid, whose mysterious past is finally told ? Or could it be the one everyone at Hogwarts most suspects...Harry Potter himself ?"},
    {header: "Harry Potter and the Prisoner of Azkaban",
      content: "'Welcome to the Knight Bus, emergency transport for the stranded witch or wizard. Just stick out your wand hand, step on board and we can take you anywhere you want to go.' When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves...But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul- sucking kiss."}

  ];

  return (
    <div className="App">
      <Accordion topics={topics} view={view} onSwapView={(header) => setView(header)}/>
    </div>
  );
}

export default App;
