import styled from "./index.module.css";
import Tilt from "react-parallax-tilt";

export const Card = ({ style, src, name, ...props }) => {
  return (
    <Tilt>
      <div style={style} className={styled.card} {...props}>
        <div className={styled.imageCard}>
          <img src={src} alt="" />
        </div>
        <h4>{name}</h4>
      </div>
    </Tilt>
  );
};
