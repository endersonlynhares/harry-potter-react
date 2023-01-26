import styled from "./index.module.css"
import initSection from "../../assets/section-init.svg"
import sectionGrifinoria from "../../assets/section-grifinoria.svg"
import sectionSonserina from "../../assets/section-sonserina.svg"
import rony from "../../assets/rony_weasley.png"

export const ContentMain = () =>{
    return(
        <main className={styled.main}>
            <img src={initSection} alt="" />

            <section className={styled.section}>
                <img src={sectionGrifinoria} alt="" />
                <div className={styled.cardGroup}>
                    <div className={styled.card}>
                        <div className={styled.imageCard}>
                            <img src={rony} alt=""/>
                        </div>
                        <h4>Rony Weasley</h4>
                    </div>
                    <div className={styled.card}>
                        <div className={styled.imageCard}>
                            <img src={rony} alt=""/>
                        </div>
                        <h4>Rony Weasley</h4>
                    </div>
                    <div className={styled.card}>
                        <div className={styled.imageCard}>
                            <img src={rony} alt=""/>
                        </div>
                        <h4>Rony Weasley</h4>
                    </div>
                    <div className={styled.card}>
                        <div className={styled.imageCard}>
                            <img src={rony} alt=""/>
                        </div>
                        <h4>Rony Weasley</h4>
                    </div>
                    <div className={styled.card}>
                        <div className={styled.imageCard}>
                            <img src={rony} alt=""/>
                        </div>
                        <h4>Rony Weasley</h4>
                    </div>
                    
                    
                </div>
            </section>

            <section className={styled.section}>
                <img src={sectionSonserina} alt="" />
                <div className={styled.cardGroup}>
                    <div style={{'borderColor': "green"}} className={styled.card}>
                        <div className={styled.imageCard}>
                            <img src={"https://i.pinimg.com/originals/e2/b0/e7/e2b0e70f3627ce10d9faa701c9612148.jpg"} alt=""/>
                        </div>
                        <h4 style={{'color': "green"}}>Rony Weasley</h4>
                    </div>
                    <div style={{'borderColor': "green"}} className={styled.card}>
                        <div className={styled.imageCard}>
                        <img src={"https://i.pinimg.com/originals/e2/b0/e7/e2b0e70f3627ce10d9faa701c9612148.jpg"} alt=""/>
                        </div>
                        <h4 style={{'color': "green"}}>Rony Weasley</h4>
                    </div>
                    <div style={{'borderColor': "green"}} className={styled.card}>
                        <div className={styled.imageCard}>
                        <img src={"https://i.pinimg.com/originals/e2/b0/e7/e2b0e70f3627ce10d9faa701c9612148.jpg"} alt=""/>
                        </div>
                        <h4 style={{'color': "green"}}>Rony Weasley</h4>
                    </div>
                    <div style={{'borderColor': "green"}} className={styled.card}>
                        <div className={styled.imageCard}>
                        <img src={"https://i.pinimg.com/originals/e2/b0/e7/e2b0e70f3627ce10d9faa701c9612148.jpg"} alt=""/>
                        </div>
                        <h4 style={{'color': "green"}}>Rony Weasley</h4>
                    </div>
                    <div style={{'borderColor': "green"}} className={styled.card}>
                        <div className={styled.imageCard}>
                        <img src={"https://i.pinimg.com/originals/e2/b0/e7/e2b0e70f3627ce10d9faa701c9612148.jpg"} alt=""/>
                        </div>
                        <h4 style={{'color': "green"}}>Rony Weasley</h4>
                    </div>
                    
                    
                </div>
            </section>
        </main>
    )
}