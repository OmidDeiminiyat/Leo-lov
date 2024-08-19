import Navigation from './navbar/Navbar';
import MyCards from './cards/Cards';
import Header from './header/Header';
import React, { useState } from 'react';
import FirstCard from './wideCard/WideCard';
import MyImg from './assets/No1.jpeg';
import {SecondCard} from './SecondWideCard/SecondCard';
 import SecondImg from './assets/No2.jpeg';
 import Staff from './Staff/Staff';
 import Image1 from './assets/Staff/no1.jpeg'
 import Image2 from './assets/Staff/no2.jpeg'
 import Image3 from './assets/Staff/no3.jpeg'
 import Image4 from './assets/Staff/no4.jpeg'
 import Map from  './map/Map';
 import Location from './assets/leolov-location.png';
 import Footers from './footer/Footer';

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

   const SecNImage = SecondImg;
   const [SecondCardT] = useState('Intet Problem');
   const [SecondCardSub]  = useState('Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.');
   const [SecondCardSubTW] = useState('Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!');

   const staffs = [
    {image: Image1, name: 'John Harbinger', Describe: 'Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end Peter.'},
    {image: Image2, name: 'Peter Parker', Describe: 'Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget mere end John'},
    {image: Image3, name: 'Elise Li', Describe: 'Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt'},
    {image: Image4, name: 'Morten Nate', Describe: 'Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude.'}
   ]

   const MyMap = Location;
   const [LocationTitle] = useState('Her bo vi');
   const [LocationText] = useState('Vi har valgt at bosætte os i solen! Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget. Hvis du har råd til at tage til Sechellerne har du råd til os”. Det er et af vores utallige motto er');
   const [Addrese] = useState('Leo-Lov ApS Maldive rd. 22 Seychelles');

   const FooterItems = [
    {h1: 'Adresse', paraf: 'Find os her:', secondParaf: 'Maldive rd 22,', SecondBreak: 'Seyschelle eslands'},
    {h1: 'Kontakt', paraf: 'Kontakt os her', secondParaf: 'email@mail.dk', SecondBreak: 'Tif: 09123023'},
    {h1: 'Politik', paraf: 'Vores politikker:', secondParaf: 'Privalivspolitik', SecondBreak: 'CookiePolitik'},
    {h1: 'Sociale medier'}
   ]

  return (
    <>
      <Navigation menuItems={name} />  
      <Header Title={title} SecTit={SecondTitle} Subtitle={subtitle} />
      <MyCards CardItems={CardData} />
      <FirstCard image={Mimg} tit={CardTit} sub1={CardSubOne} sub2={CardSubsTwo}/>
       <SecondCard title={SecondCardT} subsOne={SecondCardSub} subsTwo={SecondCardSubTW} img={SecNImage}/>
       <Staff StaffList={staffs}/>
       <Map maps={MyMap} Title={LocationTitle} Paraf={LocationText} Address={Addrese}  />
       <Footers FooterData={FooterItems} />
    </>
  )
}

export default App
