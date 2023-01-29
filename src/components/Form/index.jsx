import styled from "./index.module.css";
import {useForm} from "react-hook-form"

export const Form = ({onAddCard}) => {

  const {register, handleSubmit} = useForm();
  const onSubmit = (data) =>{
    onAddCard(data)
  }

  return (
    <form className={styled.form} onSubmit={handleSubmit(onSubmit)}>
      <strong className={styled.strong}>
        *Preencha os campos abaixo para criar o card da personagem
      </strong>
      <input type="text" {...register('name')} placeholder="Digite seu nome" />
      <input type="text" {...register('srcImage')} placeholder="Digite o endereço de imagem" />
      <select {...register('house')}>
        <option value="">Selecione uma casa</option>
        <option value="grifinoria">grifinoria</option>
        <option value="sonserina">sonserina</option>
        <option value="lufa-lufa">lufa-lufa</option>
        <option value="corvinal">corvinal</option>
      </select>

      <button className={styled.button}>Criar Card</button>
    </form>
  );
};
