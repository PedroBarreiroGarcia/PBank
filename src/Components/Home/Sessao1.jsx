import style from "./Sessao1.module.css"

function Sessao1(){
    return(
    <div className={style.AreaSessao1}>
            <div className={style.areaTextoSessao1}>
                <div className={style.EspacoTexto}>
                    <h1 className={style.textoSessao1}>
                        Venha viver o futuro no presente com a sua conta
                    </h1>
                    <h1 className={style.textoSessao1PBank}>
                        PBank
                    </h1>

                    <button className={style.BotaoSessao1}>Abrir conta</button>

                </div>
            </div>


            <div className={style.areaImgSessao1}>
                <div className={style.imgSessao1}></div>
            </div>
    </div>
    )
}

export default Sessao1