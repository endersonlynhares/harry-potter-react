import styled from "./index.module.css"
import logo from "../../assets/logo.svg"
import { Form } from "../Form"

export const ContentHeader = () =>{
    return(
        <div className={styled.contentHeader}>
            <img src={logo} alt="" />
            <Form />
        </div>
    )
}