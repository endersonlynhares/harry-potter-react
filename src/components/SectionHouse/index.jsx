import styled from "./index.module.css";
import { Card } from "../Card";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export const SectionHouse = ({ src, cards = [], commonColor }) => {

  useEffect(() =>{
    Aos.init({duration: 600})
  },[])

  return cards.length > 0 ? (
    <section className={styled.section}>
      <img src={src} alt="" />
      <div className={styled.cardGroup}>
        {cards.map((card) => {
          return (
            <Card
              key={card.name}
              name={card.name}
              src={card.srcImage}
              style={commonColor}
              data-aos="fade-up"
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};
