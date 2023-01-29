import { ContentHeader } from './components/ContentHeader'
import { ContentMain } from './components/ContentMain';

import sectionGrifinoria from "./assets/section-grifinoria.svg";
import sectionSonserina from "./assets/section-sonserina.svg";
import sectionLufaLufa from "./assets/section-lufa-lufa-1.svg";
import sectionCorvinal from "./assets/section-corvinal.svg";
import rony from "./assets/rony_weasley.png";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'

const houses = [
  {
    house: "grifinoria",
    srcHouseImage: sectionGrifinoria,
    styleHouse: {
      borderColor: "var(--red-common-house)",
      color: "var(--red-common-house)",
    },
  },
  {
    house: "sonserina",
    srcHouseImage: sectionSonserina,
    styleHouse: {
      borderColor: "var(--green-common-house)",
      color: "var(--green-common-house)",
    },
  },
  {
    house: "corvinal",
    srcHouseImage: sectionCorvinal,
    styleHouse: {
      borderColor: "var(--blue-common-house)",
      color: "var(--blue-common-house)",
    },
  },
  {
    house: "lufa-lufa",
    srcHouseImage: sectionLufaLufa,
    styleHouse: {
      borderColor: "var(--yellow-commom-house)",
      color: "var(--yellow-commom-house)",
    },
  },
];


function App() {

  const [cardsHouse, setCardsHouse] = useState([])
  
  const addCard = (card) =>{
    setCardsHouse([...cardsHouse, card])
  }

  return(
    <div className="app">
      <ContentHeader addCard={addCard}/>
      <ContentMain houses={houses} cards={cardsHouse}  />
    </div>
  )  
}

export default App
