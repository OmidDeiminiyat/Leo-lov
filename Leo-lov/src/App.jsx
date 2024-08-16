import Navigation from './navbar/Navbar';
import MyCards from './cards/Cards';
import Header from './header/Header';
import React, { useState } from 'react';

import './App.css'

function App() {
  const name = ['Hjem', 'Advocat', 'Om os', 'Kontakt os'];
  const [title] = useState('Leo');
  const [SecondTitle] = useState('-Lov');
  const [subtitle] = useState('Lov og ret kan være et plaster! Hvis du ellers har knaster!');
  const CardData = [
    { key1: 'Familierne', key2: 'Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig.' },
    { key1: 'Ejendomsret', key2: 'Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det.' },
    { key1: 'Konkurs', key2: 'Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp' },
    { key1: 'Selskabsret', key2: 'Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag.' }
  ];

  return (
    <>
      <Navigation menuItems={name} />  
      <Header Title={title} SecTit={SecondTitle} Subtitle={subtitle} />
      <MyCards CardItems={CardData} />
    </>
  )
}

export default App
