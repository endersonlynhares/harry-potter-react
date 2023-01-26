import styled from "./index.module.css"
import logo from "../../assets/logo.svg"

export const ContentHeader = () =>{
    return(
        <div className={styled.contentHeader}>
            <img src={logo} alt="" />
        </div>
    )
}