import styled from "./index.module.css";

export const Card = ({ style, src, name }) => {
 
  return (
      <div style={style} className={styled.card}>
        <div className={styled.imageCard}>
          <img src={src} alt="" />
        </div>
        <h4>{name}</h4>
      </div>
  );
};
