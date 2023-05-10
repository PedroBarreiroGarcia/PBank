import style from "./AreaCelularApp.module.css"

function AreaCelularApp(){
    return(
    <div className={style.AreaCelularApp}>
        <div className={style.areaTextoCelular}>
            <div className={style.espacoTextoCelular}>
                <h1 className={style.textoGrandeCelular}>Todos nossos serviços na palma da sua mão!</h1>
                <h1 className={style.textoMenorCelular}>Acesse sua conta e descubra que ter controle financeiro pode ser mais fácil do que você imagina.</h1>
            </div>
        </div>

        <div className={style.areaImagemCelular}>
            <div className={style.espacoImgCelular}></div>
        </div>
        

    </div>
    )
}

export default AreaCelularApp