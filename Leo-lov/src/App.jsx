import Navigation from './navbar/Navbar';
import MyCards from './cards/Cards';
import Header from './header/Header';
import React, { useState } from 'react';
import FirstCard from './wideCard/WideCard';
import MyImg from './assets/No1.jpeg';

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
  const Mimg = MyImg;
  const [CardTit] = useState('Intet Problem');
  const [CardSubOne]  = useState('Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.');
  const [CardSubsTwo] = useState('Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!');

  return (
    <>
      <Navigation menuItems={name} />  
      <Header Title={title} SecTit={SecondTitle} Subtitle={subtitle} />
      <MyCards CardItems={CardData} />
      <FirstCard image={Mimg} tit={CardTit} sub1={CardSubOne} sub2={CardSubsTwo}/>
    </>
  )
}

export default App
