import styled from "./index.module.css";

export const Form = () => {
  return (
    <form className={styled.form}>
      <strong className={styled.strong}>
        *Preencha os campos abaixo para criar o card da personagem
      </strong>
      <input type="text" placeholder="Digite seu nome" />
      <input type="text" placeholder="Digite o endereço de imagem" />
      <select name="" id="">
        <option value="">Selecione uma casa</option>
        <option value="">grifinoria</option>
        <option value="">grifinoria</option>
        <option value="">grifinoria</option>
        <option value="">grifinoria</option>
      </select>

      <button className={styled.button}>Criar Card</button>
    </form>
  );
};
