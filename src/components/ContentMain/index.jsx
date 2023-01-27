import styled from "./index.module.css";
import initSection from "../../assets/section_initial.svg";
import { SectionHouse } from "../SectionHouse";

export const ContentMain = ({houses = [], cards = []}) => {
  return (
    <main className={styled.main}>
      <img className={styled.imageInit} src={initSection} alt="" />
      <hr />
      {houses.map((house) => {
        return (
          <SectionHouse
            key={house.house}
            commonColor={house.styleHouse}
            src={house.srcHouseImage}
            cards={cards.filter((card) => card.house == house.house)}
          />
        );
      })}
    </main>
  );
};
