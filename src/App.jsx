import { ContentHeader } from './components/ContentHeader'
import { ContentMain } from './components/ContentMain';

import sectionGrifinoria from "./assets/section-grifinoria.svg";
import sectionSonserina from "./assets/section-sonserina.svg";
import sectionLufaLufa from "./assets/section-lufa-lufa.svg";
import sectionCorvinal from "./assets/section-corvinal.svg";
import rony from "./assets/rony_weasley.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'


const cards = [
  {
    name: "Rony Weasley",
    house: "corvinal",
    srcImage: rony,
  },
  {
    name: "Rony dadasds",
    house: "sonserina",
    srcImage: rony,
  },
  {
    name: "Draco",
    house: "grifinoria",
    srcImage: rony,
  },
  {
    name: "Rony as",
    house: "corvinal",
    srcImage: rony,
  },
  {
    name: "dadsadas",
    house: "sonserina",
    srcImage: rony,
  },
];

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
      borderColor: "var(--yellow-common-house)",
      color: "var(--yellow-common-house)",
    },
  },
];


function App() {
  return(
    <div className="app">
      <ContentHeader />
      <ContentMain houses={houses} cards={cards} />
    </div>
  )  
}

export default App
