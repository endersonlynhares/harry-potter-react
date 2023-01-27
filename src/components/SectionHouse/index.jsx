import styled from "./index.module.css";
import { Card } from "../Card";

export const SectionHouse = ({ src, cards = [], commonColor }) => {
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
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};
