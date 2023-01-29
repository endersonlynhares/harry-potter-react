import styled from "./index.module.css"
import logo from "../../assets/logo.svg"
import { Form } from "../Form"

export const ContentHeader = ({addCard}) =>{
    return(
        <div className={styled.contentHeader}>
            <img src={logo} alt="" />
            <Form onAddCard={addCard} />
        </div>
    )
}